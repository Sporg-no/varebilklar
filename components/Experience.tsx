"use client";

import { useEffect, useRef, useState } from "react";
import { questions } from "@/lib/questions";

const KEYS = ["A", "B", "C", "D"];

function getSrc(): string | null {
  if (typeof window === "undefined") return null;
  const u = new URLSearchParams(window.location.search);
  return u.get("src") || u.get("utm_source");
}

function verdict(score: number, total: number) {
  const pct = score / total;
  if (pct >= 30 / 35) return "Det holder til bestått på ekte eksamen.";
  if (pct >= 0.7) return "Nære, men ikke nok. Eksamen krever 30 av 35 riktige.";
  return "Det holder ikke. Tre av fire strøk på løyveeksamen høsten 2025.";
}

export default function Experience() {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<(number | null)[]>(() => questions.map(() => null));
  const [finished, setFinished] = useState(false);
  const quizTop = useRef<HTMLDivElement>(null);
  const nextBtn = useRef<HTMLButtonElement>(null);

  const q = questions[i];
  const answer = picked[i];
  const answered = answer !== null;
  const score = picked.filter((p, idx) => p === questions[idx].correct).length;

  useEffect(() => {
    if (answered) nextBtn.current?.focus({ preventScroll: true });
  }, [answered]);

  function choose(idx: number) {
    if (answered) return;
    setPicked((prev) => prev.map((v, k) => (k === i ? idx : v)));
  }

  function next() {
    if (i < questions.length - 1) {
      setI(i + 1);
      quizTop.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    setFinished(true);
    quizTop.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    const wrong_ids = questions.filter((qq, k) => picked[k] !== qq.correct).map((qq) => qq.id);
    fetch("/api/quiz", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ score, wrong_ids, src: getSrc() }),
      keepalive: true,
    }).catch(() => {});
  }

  function restart() {
    setPicked(questions.map(() => null));
    setI(0);
    setFinished(false);
  }

  return (
    <>
      <section className="section section-mist" id="prov" aria-labelledby="prov-h">
        <div className="narrow" ref={quizTop} style={{ scrollMarginTop: 16 }}>
          <h2 className="section-title" id="prov-h">Hvor klar er du?</h2>
          <p className="section-sub">
            Gratis prøve med 10 spørsmål om kjøre- og hviletid, løyve og HMS-kort. Du ser svaret og forklaringen etter
            hvert spørsmål.
          </p>

          <div className="quiz">
            <div className="qbar" aria-hidden="true">
              {questions.map((qq, k) => {
                const p = picked[k];
                const cls =
                  p === null ? (k === i && !finished ? "now" : "") : p === qq.correct ? "done-ok" : "done-bad";
                return <i key={qq.id} className={cls} />;
              })}
            </div>

            {!finished ? (
              <div>
                <div className="qmeta">
                  <span>
                    Spørsmål {i + 1} av {questions.length}
                  </span>
                  <span>{q.topic}</span>
                </div>
                <p className="qprompt" id={`${q.id}-p`}>
                  {q.prompt}
                </p>
                <div className="opts" role="group" aria-labelledby={`${q.id}-p`}>
                  {q.options.map((opt, idx) => {
                    let cls = "opt";
                    if (answered) {
                      if (idx === q.correct) cls += " is-correct";
                      else if (idx === answer) cls += " is-wrong";
                      else cls += " is-dim";
                    }
                    return (
                      <button key={idx} type="button" className={cls} disabled={answered} onClick={() => choose(idx)}>
                        <span className="key" aria-hidden="true">
                          {KEYS[idx]}
                        </span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {answered && (
                  <div className={`feedback ${answer === q.correct ? "ok" : "bad"}`} role="status">
                    <b>{answer === q.correct ? "Riktig." : `Feil. Riktig svar er ${KEYS[q.correct]}.`}</b>
                    <p>{q.explanation}</p>
                    <a className="src" href={q.sourceUrl} target="_blank" rel="noopener noreferrer">
                      Kilde: {q.sourceLabel}
                    </a>
                  </div>
                )}

                {answered && (
                  <div className="qnext">
                    <button ref={nextBtn} type="button" className="btn" onClick={next}>
                      {i < questions.length - 1 ? "Neste spørsmål →" : "Se resultatet →"}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="result" role="status">
                <p className="result-label">Ditt resultat</p>
                <p className="score">
                  {score}
                  <small>/{questions.length}</small>
                </p>
                <p className="verdict">{verdict(score, questions.length)}</p>
                <p className="note">
                  Full øvingsbank med 35-spørsmålsprøver i samme format som eksamen, og en egen modul om kjøre- og
                  hviletid for varebil, kommer snart. Skriv deg på listen under for tidlig tilgang.
                </p>
                <a className="btn" href="#venteliste">
                  Få tidlig tilgang
                </a>
                <div>
                  <button type="button" className="link-btn" onClick={restart}>
                    Ta prøven på nytt
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Waitlist score={finished ? score : null} />
    </>
  );
}

const ROLLER = [
  { v: "sjafor_enk", l: "Kjører selv (ENK)" },
  { v: "transportleder", l: "Transportleder" },
  { v: "firma", l: "Har flere biler/sjåfører" },
  { v: "annet", l: "Annet" },
];
const INTERESSER = [
  { v: "loyveeksamen", l: "Øving til løyveeksamen" },
  { v: "kjore_hviletid", l: "Kjøre- og hviletid / fartsskriver" },
  { v: "kalkulator", l: "Hviletidskalkulator" },
  { v: "firmalisens", l: "Lisens for alle sjåførene" },
];

function Waitlist({ score }: { score: number | null }) {
  const [email, setEmail] = useState("");
  const [rolle, setRolle] = useState("");
  const [antall, setAntall] = useState("");
  const [interesse, setInteresse] = useState<string[]>([]);
  const [samtykke, setSamtykke] = useState(false);
  const [hp, setHp] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [err, setErr] = useState("");

  const showAntall = rolle === "firma" || rolle === "transportleder";

  function toggle(v: string) {
    setInteresse((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr("");
    if (!rolle) return setErr("Velg hva som passer deg best.");
    if (!samtykke) return setErr("Kryss av for at vi kan lagre e-posten din.");
    setState("sending");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email,
          rolle,
          antall_biler: showAntall && antall ? Number(antall) : null,
          interesse,
          quiz_score: score,
          src: getSrc(),
          samtykke,
          firmanettside: hp,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        setErr(data.error || "Noe gikk galt. Prøv igjen.");
        setState("idle");
        return;
      }
      setState("done");
    } catch {
      setErr("Fikk ikke kontakt. Sjekk nettet og prøv igjen.");
      setState("idle");
    }
  }

  return (
    <section className="section section-sand" id="venteliste" aria-labelledby="wl-h">
      <div className="narrow">
        <div className="wl">
          {state === "done" ? (
            <div className="done" role="status">
              <b>Du står på listen.</b>
              <p>Du får e-post når øvingsbanken og kjøre- og hviletidsmodulen er klar – med lanseringsrabatt.</p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <h2 id="wl-h">Få tidlig tilgang og lanseringspris</h2>
              <p className="sub">Én e-post når det er klart. Ingen spam, og du kan melde deg av når som helst.</p>

              <div className="field">
                <label htmlFor="email">E-post</label>
                <input
                  id="email"
                  className="input"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="navn@firma.no"
                />
              </div>

              <fieldset className="field">
                <legend>Hva passer best?</legend>
                <div className="chips">
                  {ROLLER.map((r) => (
                    <label key={r.v} className="chip">
                      <input type="radio" name="rolle" value={r.v} checked={rolle === r.v} onChange={() => setRolle(r.v)} />
                      <span>{r.l}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {showAntall && (
                <div className="field">
                  <label htmlFor="antall">Hvor mange varebiler?</label>
                  <input
                    id="antall"
                    className="input"
                    type="number"
                    inputMode="numeric"
                    min={0}
                    max={10000}
                    value={antall}
                    onChange={(e) => setAntall(e.target.value)}
                    style={{ maxWidth: 160 }}
                  />
                </div>
              )}

              <fieldset className="field">
                <legend>Hva trenger du? (valgfritt)</legend>
                <div className="chips">
                  {INTERESSER.map((r) => (
                    <label key={r.v} className="chip">
                      <input type="checkbox" checked={interesse.includes(r.v)} onChange={() => toggle(r.v)} />
                      <span>{r.l}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="hp" aria-hidden="true">
                <label htmlFor="firmanettside">Ikke fyll ut</label>
                <input
                  id="firmanettside"
                  tabIndex={-1}
                  autoComplete="off"
                  value={hp}
                  onChange={(e) => setHp(e.target.value)}
                />
              </div>

              <label className="consent">
                <input type="checkbox" checked={samtykke} onChange={(e) => setSamtykke(e.target.checked)} />
                <span>
                  Jeg godtar at Varebilklar lagrer e-posten min for å sende meg beskjed om lansering. Les{" "}
                  <a href="/personvern">personvernerklæringen</a>.
                </span>
              </label>

              <button className="btn" type="submit" disabled={state === "sending"}>
                {state === "sending" ? "Sender …" : "Sett meg på listen"}
              </button>
              {err && (
                <p className="formmsg err" role="alert">
                  {err}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
