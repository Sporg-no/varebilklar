import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/Site";

export const metadata: Metadata = {
  title: "Fartsskriver i varebil fra 1. april 2027 – dette må du ordne | Varebilklar",
  description:
    "Varebiler på 2,5–3,5 tonn i godstransport må ha fartsskriver fra 1. april 2027. Hvilken type, sjåførkort, bedriftskort, nedlasting av data og hva det koster.",
  alternates: { canonical: "/fartsskriver-varebil" },
  openGraph: {
    title: "Fartsskriver i varebil – dette må du ordne før 1. april 2027",
    description: "Sjåførkort, bedriftskort, montering og nedlasting forklart.",
    url: "/fartsskriver-varebil",
    type: "article",
  },
};

const UPDATED = "2026-10-07";
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Fartsskriver i varebil fra 1. april 2027 – dette må du ordne",
  inLanguage: "nb",
  datePublished: UPDATED,
  dateModified: UPDATED,
  author: { "@type": "Organization", name: "Varebilklar" },
  publisher: { "@type": "Organization", name: "Varebilklar" },
  mainEntityOfPage: "https://varebilklar.no/fartsskriver-varebil",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section section-mist page-top">
          <div className="narrow">
            <p className="crumb">
              <a href="/">Forside</a> / Fartsskriver i varebil
            </p>
            <h1 className="page-title">Fartsskriver i varebil fra 1. april 2027</h1>
            <p className="page-lead">
              Alle kjøretøy som brukes i transport som er omfattet av kjøre- og hviletidsreglene, skal ha fartsskriver. Fra
              1. april 2027 gjelder det også varebiler på 2,5–3,5 tonn i nasjonal godstransport. Her er det du må ordne.
            </p>
            <p className="meta">Sist oppdatert 7. oktober 2026</p>
          </div>
        </section>

        <article className="section">
          <div className="narrow article">
            <nav className="toc" aria-label="Innhold">
              <b>Innhold</b>
              <ol>
                <li><a href="#sjekkliste">Sjekkliste før 1. april</a></li>
                <li><a href="#type">Hvilken fartsskriver</a></li>
                <li><a href="#sjaforkort">Sjåførkort</a></li>
                <li><a href="#bedriftskort">Bedriftskort og nedlasting</a></li>
                <li><a href="#bruk">Bruk i hverdagen</a></li>
                <li><a href="#kontroll">Ved kontroll</a></li>
              </ol>
            </nav>

            <h2 id="sjekkliste">Sjekkliste før 1. april 2027</h2>
            <ol>
              <li>Sjekk tillatt totalvekt i vognkortet. Er den over 2,5 tonn og bilen brukes til godstransport, er du trolig omfattet. Se <a href="/kjore-og-hviletid-varebil#unntak">unntakene</a>.</li>
              <li>Bestill montering hos et godkjent fartsskriververksted. Verkstedene får mange bestillinger mot fristen.</li>
              <li>Søk om sjåførkort til alle som skal kjøre bilen, også de som bare kjører av og til.</li>
              <li>Skaff bedriftskort til firmaet og avtal hvordan data skal lastes ned og lagres.</li>
              <li>Lær deg reglene for pause, kjøretid og hvil. Test en vanlig arbeidsdag i <a href="/hviletidskalkulator">hviletidskalkulatoren</a>.</li>
            </ol>

            <h2 id="type">Hvilken fartsskriver</h2>
            <p>Det finnes tre hovedtyper:</p>
            <ul>
              <li><b>Analog:</b> registrerer på diagramskiver. Fases ut.</li>
              <li><b>Digital:</b> en liten datamaskin i bilen som registrerer aktivitet kontinuerlig.</li>
              <li><b>Smart (SMART-fartsskriver):</b> nyeste generasjon. Siden 24. desember 2025 har nyregistrerte kjøretøy hatt krav om SMART fartsskriver versjon 2 (G2V2A).</li>
            </ul>
            <p>
              For internasjonal transport kreves SMART fartsskriver versjon 2. For eldre biler i nasjonal transport kan analog
              eller første generasjons digital fartsskriver fortsatt brukes. Hvilken type som kreves når en varebil uten
              fartsskriver skal ettermonteres, avklarer du med verkstedet før du bestiller.
            </p>

            <h2 id="sjaforkort">Sjåførkort</h2>
            <p>
              Alle som kjører transport som er omfattet av kjøre- og hviletidsreglene i en bil med digital fartsskriver, må ha
              eget sjåførkort. Det gjelder også vikarer og de som bare kjører av og til.
            </p>
            <ul>
              <li><b>Søk på nett:</b> på Din side hos Statens vegvesen, hvis du har norsk førerkort og fødselsnummer. Behandling tar inntil 72 timer, og kortet kommer normalt innen 3–5 dager. Beregn opptil to uker.</li>
              <li><b>Søk på trafikkstasjon:</b> ved utenlandsk sjåførkort, tapt eller skadet kort, eller hvis du ikke er registrert bosatt i Norge.</li>
              <li><b>Pris:</b> 370 kroner på nett, 400 kroner på trafikkstasjon.</li>
              <li><b>Gyldighet:</b> 5 år. Fornyelse kan søkes tre måneder før utløp.</li>
            </ul>

            <h2 id="bedriftskort">Bedriftskort og nedlasting av data</h2>
            <p>
              Transportbedrifter må ha bedriftskort. Det brukes til å låse data i fartsskriverens kjøretøyenhet, og ifølge
              Statens vegvesen må det gjøres minst hver måned. Data fra sjåførkortene skal også lastes ned minst én gang i
              måneden. Driver du enkeltpersonforetak og kjører selv, er det du som har ansvaret for dette.
            </p>

            <h2 id="bruk">Bruk i hverdagen</h2>
            <ul>
              <li>Sett inn sjåførkortet før du starter å kjøre.</li>
              <li>Fartsskriveren registrerer kjøring automatisk. Annet arbeid, som lasting og levering, og pauser må registreres riktig.</li>
              <li>Pauser og hvile registreres under sengesymbolet.</li>
              <li>Ta ut kortet når arbeidsdagen er ferdig.</li>
            </ul>

            <h2 id="kontroll">Ved kontroll</h2>
            <p>
              Ved kontroll langs veien må du kunne vise kjøre- og hviletidsdata for dagen i dag og de siste 56 dagene.
              Kontrollørene bruker eget kontrollkort i fartsskriveren.
            </p>

            <div className="cta-box">
              <b>Sjekk arbeidsdagen din</b>
              <p>Legg inn en vanlig dag og se om pauser og kjøretid er innenfor reglene.</p>
              <a className="btn" href="/hviletidskalkulator">
                Åpne hviletidskalkulatoren
              </a>
            </div>

            <h2>Kilder</h2>
            <ul className="sources">
              <li><a href="https://www.vegvesen.no/kjoretoy/yrkestransport/fartsskriver-og-sjaforkort/fartsskriver/" target="_blank" rel="noopener noreferrer">Statens vegvesen: Fartsskriver</a></li>
              <li><a href="https://www.vegvesen.no/kjoretoy/yrkestransport/fartsskriver-og-sjaforkort/sok-om-sjaforkort/" target="_blank" rel="noopener noreferrer">Statens vegvesen: Søk om sjåførkort</a></li>
              <li><a href="https://www.vegvesen.no/kjoretoy/yrkestransport/kjore-og-hviletid/fartsskriver/nye-krav-til-fartsskriver/" target="_blank" rel="noopener noreferrer">Statens vegvesen: Nye krav til fartsskriver</a></li>
              <li><a href="https://www.regjeringen.no/no/aktuelt/innforer-krav-om-kjore-og-hviletid-og-fartsskriver-for-varebiler/id3168129/" target="_blank" rel="noopener noreferrer">Regjeringen: Innfører krav om kjøre- og hviletid og fartsskriver for varebiler</a></li>
            </ul>
          </div>
        </article>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
