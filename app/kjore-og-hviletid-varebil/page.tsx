import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/Site";

export const metadata: Metadata = {
  title: "Kjøre- og hviletid for varebil fra 1. april 2027 – reglene forklart | Varebilklar",
  description:
    "Hvem omfattes, hvilke unntak gjelder og hva sier reglene om pause, daglig kjøretid, døgnhvil og ukehvil for varebil 2,5–3,5 tonn? Med eksempel fra en budbil-dag.",
  alternates: { canonical: "/kjore-og-hviletid-varebil" },
  openGraph: {
    title: "Kjøre- og hviletid for varebil – reglene forklart",
    description: "Nye krav fra 1. april 2027 for varebil 2,5–3,5 tonn i godstransport.",
    url: "/kjore-og-hviletid-varebil",
    type: "article",
  },
};

const UPDATED = "2026-10-07";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Kjøre- og hviletid for varebil fra 1. april 2027 – reglene forklart",
  inLanguage: "nb",
  datePublished: UPDATED,
  dateModified: UPDATED,
  author: { "@type": "Organization", name: "Varebilklar" },
  publisher: { "@type": "Organization", name: "Varebilklar" },
  mainEntityOfPage: "https://varebilklar.no/kjore-og-hviletid-varebil",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section section-mist page-top">
          <div className="narrow">
            <p className="crumb">
              <a href="/">Forside</a> / Kjøre- og hviletid for varebil
            </p>
            <h1 className="page-title">Kjøre- og hviletid for varebil fra 1. april 2027</h1>
            <p className="page-lead">
              Varebiler på 2,5–3,5 tonn i nasjonal godstransport får samme krav til kjøre- og hviletid og fartsskriver som
              lastebiler. Her er reglene forklart, med eksempel fra en vanlig budbil-dag.
            </p>
            <p className="meta">Sist oppdatert 7. oktober 2026</p>
          </div>
        </section>

        <article className="section">
          <div className="narrow article">
            <nav className="toc" aria-label="Innhold">
              <b>Innhold</b>
              <ol>
                <li><a href="#hvem">Hvem omfattes</a></li>
                <li><a href="#unntak">Unntak</a></li>
                <li><a href="#pause">Pause etter 4,5 timer</a></li>
                <li><a href="#kjoretid">Daglig og ukentlig kjøretid</a></li>
                <li><a href="#hvil">Døgnhvil og ukehvil</a></li>
                <li><a href="#fartsskriver">Fartsskriver</a></li>
                <li><a href="#eksempel">Eksempel: en budbil-dag</a></li>
                <li><a href="#ansvar">Hvem har ansvaret</a></li>
              </ol>
            </nav>

            <h2 id="hvem">Hvem omfattes</h2>
            <p>
              Fra <b>1. april 2027</b> gjelder kravene om kjøre- og hviletid og fartsskriver for nasjonal godstransport med
              kjøretøy med tillatt totalvekt mellom 2,5 og 3,5 tonn. Regjeringen anslår at rundt 33 000 varebiler omfattes.
              For internasjonal transport med varebil gjelder kravene allerede fra 1. juli 2026.
            </p>
            <p>
              Sjekk tillatt totalvekt i vognkortet. Det er den som avgjør, ikke hvor mye bilen faktisk veier med last.
            </p>

            <h2 id="unntak">Unntak</h2>
            <p>Kravene gjelder ikke for:</p>
            <ul>
              <li>
                Transport for virksomhetens eller førerens egen regning der kjøring ikke er førerens hovedaktivitet. Typisk
                håndverkere som frakter eget verktøy og materiell.
              </li>
              <li>Elektriske varebiler under 4 250 kg som frakter gods innenfor 100 km fra foretakets hjemsted.</li>
              <li>Varebiler som brukes til private formål.</li>
            </ul>
            <p>
              Kjører du pakker, møbler eller annet gods for andre mot betaling med en dieselbil over 2,5 tonn, er du omfattet.
            </p>

            <h2 id="pause">Pause etter 4,5 timer kjøring</h2>
            <p>
              Etter maksimalt <b>4,5 timer kjøring</b> skal du ha minst <b>45 minutter pause</b>. Pausen kan deles i to:
              først minst 15 minutter, deretter minst 30 minutter. Rekkefølgen betyr noe. 30 + 15 minutter godkjennes ikke.
            </p>
            <p>
              Lasting, lossing, levering til dør og venting hos kunde er <b>annet arbeid</b>, ikke pause. Korte stopp
              nullstiller derfor ikke kjøretiden.
            </p>

            <h2 id="kjoretid">Daglig og ukentlig kjøretid</h2>
            <ul>
              <li><b>Daglig kjøretid:</b> maks 9 timer. To ganger per uke kan den utvides til 10 timer.</li>
              <li><b>Ukentlig kjøretid:</b> maks 56 timer.</li>
              <li><b>To uker på rad:</b> maks 90 timer til sammen.</li>
            </ul>
            <p>Kjører du 56 timer én uke, har du bare 34 timer igjen uka etter.</p>

            <h2 id="hvil">Døgnhvil og ukehvil</h2>
            <ul>
              <li>
                <b>Døgnhvil:</b> minst 11 timer sammenhengende, eller delt i minst 3 + 9 timer. Den kan reduseres til 9 timer
                maks tre ganger mellom to ukehviler.
              </li>
              <li>
                <b>Ukehvil:</b> minst 45 timer, senest etter seks døgn (144 timer) fra forrige ukehvil. Den kan reduseres til
                24 timer annenhver uke, men reduksjonen må tas igjen senere.
              </li>
              <li>En normal ukehvil kan ikke tas i bilen.</li>
            </ul>
            <p>
              Døgnhvilen må tas innen 24 timer fra arbeidsdagen startet. Det betyr at det i praksis kan gå maks 13 timer fra
              du starter til du er ferdig, eller 15 timer med redusert døgnhvil.
            </p>

            <h2 id="fartsskriver">Fartsskriver</h2>
            <p>
              Biler som omfattes må ha fartsskriver. Den registrerer kjøring, annet arbeid, pauser og hvile, og er det
              kontrollørene bruker. Hver sjåfør trenger et eget sjåførkort, som søkes hos Statens vegvesen.
            </p>
            <p>
              Fartsskriveren må monteres av et godkjent fartsskriververksted. Regjeringen utsatte kravet for nasjonal
              transport med ni måneder nettopp for å gi tid til anskaffelse og montering, så bestill time i god tid før
              1. april.
            </p>

            <h2 id="eksempel">Eksempel: en budbil-dag</h2>
            <table className="day">
              <thead>
                <tr><th>Tid</th><th>Aktivitet</th><th>Kjøretid siden pause</th></tr>
              </thead>
              <tbody>
                <tr><td>07:00–07:30</td><td>Lasting på terminal</td><td>0 t</td></tr>
                <tr><td>07:30–10:00</td><td>Kjøring</td><td>2,5 t</td></tr>
                <tr><td>10:00–10:15</td><td>Pause</td><td>2,5 t (første del av pausen)</td></tr>
                <tr className="bad"><td>10:15–12:30</td><td>Kjøring</td><td>4,75 t – grensen passeres kl. 12:15</td></tr>
                <tr><td>12:30–13:00</td><td>Pause</td><td>For sent</td></tr>
              </tbody>
            </table>
            <p>
              Pausen på 15 minutter kl. 10:00 er gyldig som første del. Men den andre delen på 30 minutter må tas før
              kjøretiden passerer 4,5 timer, altså senest kl. 12:15. Flytt lunsjen et kvarter tidligere, så er dagen lovlig.
              Prøv selv i <a href="/hviletidskalkulator">hviletidskalkulatoren</a>.
            </p>

            <h2 id="ansvar">Hvem har ansvaret</h2>
            <p>
              Arbeidsgiveren har ansvar for å organisere kjøringen slik at sjåføren kan følge reglene om kjøre- og hviletid
              og bruke fartsskriveren riktig. Brudd kan straffes. Kjører du eget enkeltpersonforetak, er ansvaret ditt.
            </p>
            <p>
              For ansatte sjåfører gjelder i tillegg arbeidstidsreglene. Samlet arbeidstid er som hovedregel maks 13 timer i
              døgnet, og arbeidsdager over 6 timer krever pause.
            </p>

            <div className="cta-box">
              <b>Test deg selv</b>
              <p>Ta den gratis prøven med 10 spørsmål om kjøre- og hviletid, løyve og HMS-kort.</p>
              <a className="btn" href="/#prov">
                Start gratis prøve
              </a>
            </div>

            <h2>Kilder</h2>
            <ul className="sources">
              <li>
                <a href="https://www.regjeringen.no/no/aktuelt/innforer-krav-om-kjore-og-hviletid-og-fartsskriver-for-varebiler/id3168129/" target="_blank" rel="noopener noreferrer">
                  Regjeringen: Innfører krav om kjøre- og hviletid og fartsskriver for varebiler (1. juli 2026)
                </a>
              </li>
              <li>
                <a href="https://www.vegvesen.no/kjoretoy/yrkestransport/kjore-og-hviletid/regelverk/" target="_blank" rel="noopener noreferrer">
                  Statens vegvesen: Regelverk for kjøre- og hviletid
                </a>
              </li>
              <li>
                <a href="https://www.vegvesen.no/kjoretoy/yrkestransport/kjore-og-hviletid/arbeidstid-og-reguleringer/hvor-mye-arbeid-kan-utfores/" target="_blank" rel="noopener noreferrer">
                  Statens vegvesen: Hvor mye arbeid kan utføres
                </a>
              </li>
            </ul>
          </div>
        </article>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
