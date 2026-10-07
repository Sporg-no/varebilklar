// Forenklet kontroll av én arbeidsdag mot reglene for kjøre- og hviletid (forordning (EF) nr. 561/2006,
// slik Statens vegvesen beskriver dem). Dekker ikke flerbemanning, ferje/tog, ukehvil eller unntak.

export type SegType = "kjoring" | "arbeid" | "pause";
export type Segment = { type: SegType; start: string; end: string };
export type Level = "ok" | "advarsel" | "brudd";
export type Finding = { level: Level; title: string; detail: string };

export type Result = {
  valid: boolean;
  error?: string;
  findings: Finding[];
  totals: { kjoring: number; arbeid: number; pause: number; spenn: number };
  verdict: Level;
};

const MAX_BLOCK = 270; // 4,5 t kjøring før pause
const DAY_DRIVE = 540; // 9 t
const DAY_DRIVE_EXT = 600; // 10 t, maks to ganger per uke
const SPAN_REGULAR = 13 * 60; // 24 t - 11 t døgnhvil
const SPAN_REDUCED = 15 * 60; // 24 t - 9 t redusert døgnhvil

export function toMin(hhmm: string): number | null {
  const m = /^(\d{1,2}):(\d{2})$/.exec(hhmm.trim());
  if (!m) return null;
  const h = Number(m[1]);
  const min = Number(m[2]);
  if (h > 23 || min > 59) return null;
  return h * 60 + min;
}

export function fmtDur(min: number): string {
  const h = Math.floor(min / 60);
  const m = min % 60;
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h} t`;
  return `${h} t ${m} min`;
}

export function fmtClock(absMin: number): string {
  const t = ((absMin % 1440) + 1440) % 1440;
  return `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}

type Abs = { type: SegType; s: number; e: number; gap?: boolean };

export function analyse(segments: Segment[], hvileEtterTimer: number | null): Result {
  const empty = { kjoring: 0, arbeid: 0, pause: 0, spenn: 0 };
  if (segments.length === 0) {
    return { valid: false, error: "Legg inn minst én periode.", findings: [], totals: empty, verdict: "ok" };
  }

  // Gjør om til absolutte minutter, tillat passering av midnatt.
  const abs: Abs[] = [];
  let cursor = -1;
  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i];
    let s = toMin(seg.start);
    let e = toMin(seg.end);
    if (s === null || e === null) {
      return { valid: false, error: `Periode ${i + 1}: skriv klokkeslett som tt:mm.`, findings: [], totals: empty, verdict: "ok" };
    }
    while (cursor >= 0 && s < cursor) s += 1440;
    while (e <= s) e += 1440;
    if (cursor >= 0 && s < cursor) {
      return { valid: false, error: `Periode ${i + 1} overlapper forrige periode.`, findings: [], totals: empty, verdict: "ok" };
    }
    if (e - s > 16 * 60) {
      return { valid: false, error: `Periode ${i + 1} er lengre enn 16 timer. Sjekk klokkeslettene.`, findings: [], totals: empty, verdict: "ok" };
    }
    if (cursor >= 0 && s > cursor) abs.push({ type: "pause", s: cursor, e: s, gap: true });
    abs.push({ type: seg.type, s, e });
    cursor = e;
  }

  const totals = { kjoring: 0, arbeid: 0, pause: 0, spenn: abs[abs.length - 1].e - abs[0].s };
  for (const a of abs) totals[a.type] += a.e - a.s;

  const findings: Finding[] = [];

  // 1) 4,5 t kjøring før 45 min pause (kan deles 15 + 30, i den rekkefølgen).
  let acc = 0;
  let had15 = false;
  let blockBreached = false;
  let breaches = 0;
  for (const a of abs) {
    const d = a.e - a.s;
    if (a.type === "kjoring") {
      if (!blockBreached && acc + d > MAX_BLOCK) {
        const at = a.s + (MAX_BLOCK - acc);
        breaches++;
        blockBreached = true;
        findings.push({
          level: "brudd",
          title: `For lang kjøring uten pause (kl. ${fmtClock(at)})`,
          detail: had15
            ? `Du har tatt en pause på minst 15 minutter, men mangler den påfølgende pausen på minst 30 minutter. Den måtte vært tatt senest kl. ${fmtClock(at)}, etter 4,5 timer kjøring.`
            : `Etter 4,5 timer kjøring skal du ha minst 45 minutter pause, eller 15 + 30 minutter. Pausen måtte vært tatt senest kl. ${fmtClock(at)}.`,
        });
      }
      acc += d;
    } else if (a.type === "pause") {
      if (d >= 45 || (had15 && d >= 30)) {
        acc = 0;
        had15 = false;
        blockBreached = false;
      } else if (d >= 15) {
        had15 = true;
      }
    }
  }
  if (breaches === 0 && totals.kjoring > 0) {
    findings.push({
      level: "ok",
      title: "Pauser er tatt i tide",
      detail: "Du kjører aldri mer enn 4,5 timer uten 45 minutter pause (eller 15 + 30 minutter).",
    });
  }

  // 2) Daglig kjøretid.
  if (totals.kjoring > DAY_DRIVE_EXT) {
    findings.push({
      level: "brudd",
      title: `Daglig kjøretid ${fmtDur(totals.kjoring)}`,
      detail: "Daglig kjøretid kan aldri være mer enn 10 timer.",
    });
  } else if (totals.kjoring > DAY_DRIVE) {
    findings.push({
      level: "advarsel",
      title: `Daglig kjøretid ${fmtDur(totals.kjoring)}`,
      detail: "Mer enn 9 timer er bare lov to ganger per uke (maks 10 timer).",
    });
  } else {
    findings.push({ level: "ok", title: `Daglig kjøretid ${fmtDur(totals.kjoring)}`, detail: "Innenfor grensen på 9 timer." });
  }

  // 3) Arbeidsdagens lengde og døgnhvil (døgnhvilen må tas innen 24 timer fra dagen startet).
  if (totals.spenn > SPAN_REDUCED) {
    findings.push({
      level: "brudd",
      title: `Arbeidsdagen varer ${fmtDur(totals.spenn)}`,
      detail: "Døgnhvilen må tas innen 24 timer fra du startet. Med mer enn 15 timer fra start til slutt får du ikke plass til selv redusert døgnhvil på 9 timer.",
    });
  } else if (totals.spenn > SPAN_REGULAR) {
    findings.push({
      level: "advarsel",
      title: `Arbeidsdagen varer ${fmtDur(totals.spenn)}`,
      detail: "Med mer enn 13 timer fra start til slutt rekker du ikke 11 timers døgnhvil innen 24 timer. Redusert døgnhvil (9 timer) er bare lov tre ganger mellom to ukehviler.",
    });
  }

  if (hvileEtterTimer !== null && Number.isFinite(hvileEtterTimer)) {
    const rest = Math.round(hvileEtterTimer * 60);
    if (rest < 9 * 60) {
      findings.push({
        level: "brudd",
        title: `Døgnhvil ${fmtDur(rest)}`,
        detail: "Døgnhvilen skal være minst 11 timer (eller 3 + 9 timer). Den kan reduseres til 9 timer, men aldri kortere.",
      });
    } else if (rest < 11 * 60) {
      findings.push({
        level: "advarsel",
        title: `Døgnhvil ${fmtDur(rest)}`,
        detail: "Redusert døgnhvil. Lov maks tre ganger mellom to ukehviler.",
      });
    } else {
      findings.push({ level: "ok", title: `Døgnhvil ${fmtDur(rest)}`, detail: "Minst 11 timer sammenhengende." });
    }
  }

  // 4) Arbeidstid for ansatte (arbeidstidsforskriften for sjåfører).
  const work = totals.kjoring + totals.arbeid;
  if (work > 13 * 60) {
    findings.push({
      level: "advarsel",
      title: `Samlet arbeidstid ${fmtDur(work)}`,
      detail: "For ansatte sjåfører er samlet arbeidstid som hovedregel maks 13 timer per døgn. Gjelder ikke deg som driver eget enkeltpersonforetak og kjører selv.",
    });
  }

  const verdict: Level = findings.some((f) => f.level === "brudd")
    ? "brudd"
    : findings.some((f) => f.level === "advarsel")
      ? "advarsel"
      : "ok";

  return { valid: true, findings, totals, verdict };
}

export const EXAMPLE_DAY: Segment[] = [
  { type: "arbeid", start: "07:00", end: "07:30" },
  { type: "kjoring", start: "07:30", end: "10:00" },
  { type: "pause", start: "10:00", end: "10:15" },
  { type: "kjoring", start: "10:15", end: "12:30" },
  { type: "pause", start: "12:30", end: "13:00" },
  { type: "kjoring", start: "13:00", end: "15:30" },
  { type: "arbeid", start: "15:30", end: "16:00" },
];
