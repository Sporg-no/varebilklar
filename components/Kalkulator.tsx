"use client";

import { useMemo, useState } from "react";
import { analyse, EXAMPLE_DAY, fmtDur, type Segment, type SegType } from "@/lib/hviletid";

const TYPES: { v: SegType; l: string }[] = [
  { v: "kjoring", l: "Kjøring" },
  { v: "arbeid", l: "Annet arbeid" },
  { v: "pause", l: "Pause" },
];

type Row = Segment & { id: number };

let nextId = 1;
const withIds = (segs: Segment[]): Row[] => segs.map((s) => ({ ...s, id: nextId++ }));

const VERDICT = {
  ok: { cls: "v-ok", title: "Dagen ser lovlig ut", text: "Ingen brudd på reglene kalkulatoren sjekker." },
  advarsel: { cls: "v-warn", title: "Lovlig, men med forbehold", text: "Noe her er bare lov et begrenset antall ganger per uke." },
  brudd: { cls: "v-bad", title: "Dagen bryter reglene", text: "Se hva som må endres under." },
};

export default function Kalkulator() {
  const [rows, setRows] = useState<Row[]>(() => withIds(EXAMPLE_DAY));
  const [hvile, setHvile] = useState("11");

  const result = useMemo(() => {
    const h = hvile.trim() === "" ? null : Number(hvile.replace(",", "."));
    return analyse(rows, h);
  }, [rows, hvile]);

  function update(id: number, patch: Partial<Segment>) {
    setRows((r) => r.map((x) => (x.id === id ? { ...x, ...patch } : x)));
  }
  function remove(id: number) {
    setRows((r) => r.filter((x) => x.id !== id));
  }
  function add() {
    setRows((r) => {
      const last = r[r.length - 1];
      const start = last ? last.end : "07:00";
      const [h, m] = start.split(":").map(Number);
      const endMin = ((h * 60 + m + 60) % 1440 + 1440) % 1440;
      const end = `${String(Math.floor(endMin / 60)).padStart(2, "0")}:${String(endMin % 60).padStart(2, "0")}`;
      return [...r, { id: nextId++, type: "kjoring", start, end }];
    });
  }

  return (
    <div className="calc">
      <div className="calc-input">
        <div className="calc-head">
          <h2>Arbeidsdagen din</h2>
          <div className="calc-tools">
            <button type="button" className="link-btn" onClick={() => setRows(withIds(EXAMPLE_DAY))}>
              Eksempeldag
            </button>
            <button type="button" className="link-btn" onClick={() => setRows([])}>
              Tøm
            </button>
          </div>
        </div>
        <p className="calc-help">
          Legg inn periodene i rekkefølge. Tid uten registrering mellom to perioder regnes som pause.
        </p>

        <ol className="rows">
          {rows.map((r, i) => (
            <li key={r.id} className={`row row-${r.type}`}>
              <span className="row-n" aria-hidden="true">
                {i + 1}
              </span>
              <label className="sr" htmlFor={`t-${r.id}`}>
                Type periode {i + 1}
              </label>
              <select id={`t-${r.id}`} className="input" value={r.type} onChange={(e) => update(r.id, { type: e.target.value as SegType })}>
                {TYPES.map((t) => (
                  <option key={t.v} value={t.v}>
                    {t.l}
                  </option>
                ))}
              </select>
              <label className="sr" htmlFor={`s-${r.id}`}>
                Fra
              </label>
              <input id={`s-${r.id}`} className="input" type="time" value={r.start} onChange={(e) => update(r.id, { start: e.target.value })} />
              <span className="row-dash" aria-hidden="true">
                –
              </span>
              <label className="sr" htmlFor={`e-${r.id}`}>
                Til
              </label>
              <input id={`e-${r.id}`} className="input" type="time" value={r.end} onChange={(e) => update(r.id, { end: e.target.value })} />
              <button type="button" className="row-del" onClick={() => remove(r.id)} aria-label={`Fjern periode ${i + 1}`}>
                ×
              </button>
            </li>
          ))}
        </ol>
        <button type="button" className="btn btn-outline" onClick={add}>
          + Legg til periode
        </button>

        <div className="field" style={{ marginTop: 24 }}>
          <label htmlFor="hvile">Hvile før neste arbeidsdag (timer)</label>
          <input
            id="hvile"
            className="input"
            inputMode="decimal"
            value={hvile}
            onChange={(e) => setHvile(e.target.value)}
            style={{ maxWidth: 140 }}
          />
        </div>
      </div>

      <div className="calc-out" aria-live="polite">
        {!result.valid ? (
          <div className="verdict v-warn">
            <b>Sjekk utfyllingen</b>
            <p>{result.error}</p>
          </div>
        ) : (
          <>
            <div className={`verdict ${VERDICT[result.verdict].cls}`}>
              <b>{VERDICT[result.verdict].title}</b>
              <p>{VERDICT[result.verdict].text}</p>
            </div>
            <dl className="totals">
              <div>
                <dt>Kjøring</dt>
                <dd>{fmtDur(result.totals.kjoring)}</dd>
              </div>
              <div>
                <dt>Annet arbeid</dt>
                <dd>{fmtDur(result.totals.arbeid)}</dd>
              </div>
              <div>
                <dt>Pause</dt>
                <dd>{fmtDur(result.totals.pause)}</dd>
              </div>
              <div>
                <dt>Start til slutt</dt>
                <dd>{fmtDur(result.totals.spenn)}</dd>
              </div>
            </dl>
            <ul className="findings">
              {result.findings.map((f, i) => (
                <li key={i} className={`f-${f.level}`}>
                  <b>{f.title}</b>
                  <span>{f.detail}</span>
                </li>
              ))}
            </ul>
          </>
        )}
        <p className="calc-note">
          Forenklet kontroll av én dag. Sjekker ikke ukentlig kjøretid (56 t), to-ukers kjøretid (90 t), ukehvil, delt
          døgnhvil (3 + 9 t), flerbemanning eller ferje. Gir ikke juridisk vurdering.
        </p>
      </div>
    </div>
  );
}
