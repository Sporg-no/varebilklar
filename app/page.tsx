import Countdown from "@/components/Countdown";
import Experience from "@/components/Experience";

const CONTACT = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "kontakt@varebilklar.no";

function Icon({ d }: { d: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="top">
        <div className="wrap">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">V</span>
            Varebilklar
          </div>
          <div className="hero">
            <Countdown />
            <h1>
              Nye regler for varebil. <em>Er du klar?</em>
            </h1>
            <p className="lead">
              Fra 1. april 2027 må varebiler på 2,5–3,5 tonn i godstransport følge reglene for kjøre- og hviletid og ha
              fartsskriver. Ta en gratis prøve og se hvor mye du kan.
            </p>
            <a className="cta" href="#prov">
              Start gratis prøve →
            </a>
            <p className="hero-note">10 spørsmål · Ingen registrering · Svar og forklaring underveis</p>

            <div className="facts">
              <div className="fact">
                <b>33 000</b>
                <span>varebiler omfattes av de nye kravene</span>
              </div>
              <div className="fact">
                <b>74 %</b>
                <span>strøk på løyveeksamen for varebil høsten 2025</span>
              </div>
              <div className="fact">
                <b>30/35</b>
                <span>riktige svar kreves for å bestå eksamen</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Experience />

      <section className="block" aria-labelledby="kommer-h">
        <div className="wrap">
          <p className="eyebrow">Kommer snart</p>
          <h2 id="kommer-h">Alt du trenger, på norsk, på mobilen</h2>
          <div className="list" style={{ marginTop: 18 }}>
            <div className="item">
              <span className="ico"><Icon d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></span>
              <div>
                <h3>Øvingsbank til løyveeksamen</h3>
                <p>Prøver med 35 spørsmål og samme krav som på trafikkstasjonen: 30 riktige for å bestå. Forklaring på hvert svar.</p>
              </div>
            </div>
            <div className="item">
              <span className="ico"><Icon d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2" /></span>
              <div>
                <h3>Kjøre- og hviletid for varebil</h3>
                <p>Pauser, døgnhvil, ukehvil og fartsskriver forklart med eksempler fra en vanlig budbil-dag.</p>
              </div>
            </div>
            <div className="item">
              <span className="ico"><Icon d="M4 4h16v16H4zM8 8h8M8 12h3M13 12h3M8 16h3M13 16h3" /></span>
              <div>
                <h3>Hviletidskalkulator</h3>
                <p>Legg inn arbeidsdagen din og se med en gang om den er lovlig – og hva du må endre.</p>
              </div>
            </div>
            <div className="item">
              <span className="ico"><Icon d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></span>
              <div>
                <h3>Lisens for hele firmaet</h3>
                <p>Gi alle sjåførene tilgang og se hvem som har fullført kjøre- og hviletidsmodulen før 1. april.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="block faq" aria-labelledby="faq-h">
        <div className="wrap">
          <h2 id="faq-h">Spørsmål og svar</h2>
          <details>
            <summary>Gjelder de nye reglene for meg?</summary>
            <p>
              De gjelder nasjonal godstransport med varebil på 2,5–3,5 tonn tillatt totalvekt fra 1. april 2027. Unntatt er
              blant annet egentransport der kjøring ikke er hovedaktiviteten (typisk håndverkere), privat bruk, og elektriske
              varebiler under 4 250 kg som kjører innenfor 100 km fra foretakets hjemsted.
            </p>
          </details>
          <details>
            <summary>Er spørsmålene hentet fra eksamen?</summary>
            <p>
              Nei. Spørsmålene er laget av oss ut fra offentlige regler og kilder, og hvert svar viser hvor det kommer fra.
              Statens vegvesen publiserer ikke eksamensoppgavene.
            </p>
          </details>
          <details>
            <summary>Hvem må ta løyveeksamen?</summary>
            <p>
              Transportlederen i en virksomhet som skal ha nasjonalt varebilløyve. Eksamen tas på trafikkstasjon og har 35
              flervalgsoppgaver – du må ha minst 30 riktige.
            </p>
          </details>
          <details>
            <summary>Hva koster det?</summary>
            <p>Prøven her er gratis. Pris for full tilgang kommer ved lansering – de på ventelisten får lanseringspris.</p>
          </details>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <p>
            Varebilklar er ikke tilknyttet Statens vegvesen. Innholdet er ment som øving og forklaring, ikke juridisk
            rådgivning – sjekk alltid gjeldende regelverk.
          </p>
          <p>
            Erlend Namsvatn ENK · Org.nr. 914 829 216 · <a href={`mailto:${CONTACT}`}>{CONTACT}</a> ·{" "}
            <a href="/personvern">Personvern</a>
          </p>
        </div>
      </footer>
    </main>
  );
}
