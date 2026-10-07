import Countdown from "@/components/Countdown";
import Experience from "@/components/Experience";
import type { Metadata } from "next";
import { Icon, SiteFooter, SiteHeader, VAN } from "@/components/Site";

export const metadata: Metadata = { alternates: { canonical: "/" } };


export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero">
          <div className="hero-text">
            <h1>Nye regler for varebil fra 1. april 2027. Er du klar?</h1>
            <p className="lead">
              Varebiler på 2,5–3,5 tonn i godstransport må følge reglene for kjøre- og hviletid og ha fartsskriver. Ta en
              gratis prøve og se hvor mye du kan.
            </p>
            <div className="hero-actions">
              <a className="btn" href="#prov">
                Start gratis prøve
              </a>
              <a className="btn btn-outline" href="#venteliste">
                Få tidlig tilgang
              </a>
            </div>
            <p className="hero-note">10 spørsmål · ingen registrering · svar og forklaring underveis</p>
          </div>
          <div className="hero-panel">
            <Countdown />
          </div>
        </section>

        <section className="section section-sand" aria-labelledby="fakta-h">
          <div className="wrap">
            <h2 className="section-title" id="fakta-h">
              Dette bør du vite
            </h2>
            <p className="section-sub">Kravene gjelder både deg som kjører selv og firma med flere biler.</p>
            <div className="cards">
              <div className="card">
                <span className="ico">
                  <Icon d={VAN} />
                </span>
                <span className="big">33 000</span>
                <p>varebiler omfattes av kravene om kjøre- og hviletid og fartsskriver</p>
              </div>
              <div className="card">
                <span className="ico">
                  <Icon d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </span>
                <span className="big">74 %</span>
                <p>strøk på løyveeksamen for varebil høsten 2025</p>
              </div>
              <div className="card">
                <span className="ico">
                  <Icon d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2" />
                </span>
                <span className="big">30 av 35</span>
                <p>riktige svar kreves for å bestå eksamen</p>
              </div>
            </div>
          </div>
        </section>

        <Experience />

        <section className="section" id="kommer" aria-labelledby="kommer-h">
          <div className="wrap">
            <h2 className="section-title" id="kommer-h">
              Kommer snart
            </h2>
            <p className="section-sub">På norsk og laget for mobilen.</p>
            <div className="cols">
              <div className="col">
                <span className="ico">
                  <Icon d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z" />
                </span>
                <h3>Øvingsbank</h3>
                <p>Prøver med 35 spørsmål og samme krav som på trafikkstasjonen. Forklaring på hvert svar.</p>
              </div>
              <div className="col">
                <span className="ico">
                  <Icon d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2" />
                </span>
                <h3>
                  <a href="/kjore-og-hviletid-varebil">Kjøre- og hviletid</a>
                </h3>
                <p>Pauser, døgnhvil, ukehvil og fartsskriver forklart med eksempler fra en vanlig budbil-dag.</p>
              </div>
              <div className="col">
                <span className="ico">
                  <Icon d="M4 4h16v16H4zM8 8h8M8 12h3M13 12h3M8 16h3M13 16h3" />
                </span>
                <h3>
                  <a href="/hviletidskalkulator">Hviletidskalkulator</a>
                </h3>
                <p>
                  Klar nå: legg inn arbeidsdagen og se med en gang om den er lovlig.{" "}
                  <a href="/hviletidskalkulator">Prøv kalkulatoren</a>
                </p>
              </div>
              <div className="col">
                <span className="ico">
                  <Icon d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </span>
                <h3>Firmalisens</h3>
                <p>Gi alle sjåførene tilgang og se hvem som har fullført kjøre- og hviletidsmodulen.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-mist faq" id="faq" aria-labelledby="faq-h">
          <div className="narrow">
            <h2 className="section-title" id="faq-h" style={{ marginBottom: 28 }}>
              Spørsmål og svar
            </h2>
            <details>
              <summary>Gjelder de nye reglene for meg?</summary>
              <p>
                De gjelder nasjonal godstransport med varebil på 2,5–3,5 tonn tillatt totalvekt fra 1. april 2027. Unntatt
                er blant annet egentransport der kjøring ikke er hovedaktiviteten (typisk håndverkere), privat bruk, og
                elektriske varebiler under 4 250 kg som kjører innenfor 100 km fra foretakets hjemsted.
              </p>
            </details>
            <details>
              <summary>Er spørsmålene hentet fra eksamen?</summary>
              <p>
                Nei. Spørsmålene er laget av oss ut fra offentlige regler og kilder, og hvert svar viser hvor det kommer
                fra. Statens vegvesen publiserer ikke eksamensoppgavene.
              </p>
            </details>
            <details>
              <summary>Hvem må ta løyveeksamen?</summary>
              <p>
                Transportlederen i en virksomhet som skal ha nasjonalt varebilløyve. Eksamen tas på trafikkstasjon og har
                35 flervalgsoppgaver. Du må ha minst 30 riktige.
              </p>
            </details>
            <details>
              <summary>Hva koster det?</summary>
              <p>Prøven her er gratis. Pris for full tilgang kommer ved lansering. De på ventelisten får lanseringspris.</p>
            </details>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
