import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/Site";

export const metadata: Metadata = {
  title: "Løyveeksamen for varebil – format, temaer og hvordan du består | Varebilklar",
  description:
    "35 oppgaver, minst 30 riktige og 70 minutter. Hvem må ta løyveeksamen for nasjonalt varebilløyve, hvilke temaer den dekker, og hvorfor tre av fire strøk høsten 2025.",
  alternates: { canonical: "/loyveeksamen-varebil" },
  openGraph: {
    title: "Løyveeksamen for varebil – slik består du",
    description: "Format, temaer og råd. Tre av fire strøk høsten 2025.",
    url: "/loyveeksamen-varebil",
    type: "article",
  },
};

const UPDATED = "2026-10-07";
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Løyveeksamen for varebil – format, temaer og hvordan du består",
  inLanguage: "nb",
  datePublished: UPDATED,
  dateModified: UPDATED,
  author: { "@type": "Organization", name: "Varebilklar" },
  publisher: { "@type": "Organization", name: "Varebilklar" },
  mainEntityOfPage: "https://varebilklar.no/loyveeksamen-varebil",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section section-mist page-top">
          <div className="narrow">
            <p className="crumb">
              <a href="/">Forside</a> / Løyveeksamen for varebil
            </p>
            <h1 className="page-title">Løyveeksamen for varebil</h1>
            <p className="page-lead">
              Skal virksomheten din kjøre gods mot betaling med varebil på 2,5–3,5 tonn, trenger dere nasjonalt varebilløyve.
              Da må transportlederen bestå løyveeksamen hos Statens vegvesen. Av de første 1 813 som tok eksamen, bestod bare
              467.
            </p>
            <p className="meta">Sist oppdatert 7. oktober 2026</p>
          </div>
        </section>

        <article className="section">
          <div className="narrow article">
            <nav className="toc" aria-label="Innhold">
              <b>Innhold</b>
              <ol>
                <li><a href="#hvem">Hvem må ta eksamen</a></li>
                <li><a href="#format">Slik foregår eksamen</a></li>
                <li><a href="#temaer">Temaer</a></li>
                <li><a href="#stryk">Hvorfor så mange stryker</a></li>
                <li><a href="#loyve">Resten av løyvekravene</a></li>
              </ol>
            </nav>

            <h2 id="hvem">Hvem må ta eksamen</h2>
            <p>
              Siden 1. januar 2026 må virksomheter som kjører gods mot vederlag med varebil på 2,5–3,5 tonn i Norge ha
              nasjonalt varebilløyve, ett løyve per kjøretøy. Det er <b>transportlederen</b> som må dokumentere faglig
              kompetanse, ikke hver sjåfør.
            </p>
            <p>Du slipper eksamen hvis transportlederen:</p>
            <ul>
              <li>allerede oppfyller kravene til faglig kompetanse for fellesskapsløyve for gods, eller</li>
              <li>kan dokumentere å ha ledet et transportforetak med varebiler sammenhengende i minst 10 år før 1. januar 2026.</li>
            </ul>
            <p>Håndverkere som bruker varebil til og fra egne oppdrag, trenger ikke løyve.</p>

            <h2 id="format">Slik foregår eksamen</h2>
            <ul>
              <li><b>35 flervalgsoppgaver</b> med ett riktig svar hver.</li>
              <li><b>Minst 30 riktige</b> for å bestå. Du kan altså bare svare feil på 5.</li>
              <li><b>70 minutter</b> til rådighet.</li>
              <li>Eksamen tas på PC på en trafikkstasjon. Time bestilles hos Statens vegvesen.</li>
              <li>Oppgavene finnes på bokmål og nynorsk. Tolk er ikke tillatt, men du kan få oppgavene lest opp på bokmål.</li>
              <li>Du får resultatet med en gang. Utskriften viser hvor mange riktige du hadde per tema, nyttig hvis du må ta den på nytt.</li>
              <li>Opplæring er ikke obligatorisk. Du må forberede deg selv.</li>
            </ul>

            <h2 id="temaer">Temaer</h2>
            <p>Ifølge regjeringen skal løyvehaveren ha fagkompetanse innen blant annet:</p>
            <ul>
              <li>Yrkestransportregelverket</li>
              <li>Vegtrafikkregelverket</li>
              <li>Arbeidsmiljølovgivningen</li>
              <li>Kjøreatferd og trafikksikkerhet</li>
              <li>HMS</li>
              <li>Økonomi</li>
            </ul>
            <p>
              Statens vegvesen har en egen temaliste for løyveeksamen for varebil. Les den før du begynner å øve, og bruk
              den som sjekkliste.
            </p>

            <h2 id="stryk">Hvorfor så mange stryker</h2>
            <p>
              Fram til 12. desember 2025 hadde 1 813 tatt eksamen, og 467 bestod. Det er en strykprosent på 74. Statens
              vegvesen sa da at de ikke kjente til noe opplæringstilbud, og at det kunne forklare mye av resultatet.
            </p>
            <p>
              Kravet om 30 av 35 riktige er strengt. Det holder ikke å kunne det meste. Du må kunne nesten alt, også temaer du
              sjelden bruker i hverdagen, som økonomi og arbeidsrett.
            </p>

            <div className="cta-box">
              <b>Ville du bestått?</b>
              <p>Ta den gratis prøven med 10 spørsmål og se hvor du står.</p>
              <a className="btn" href="/#prov">
                Start gratis prøve
              </a>
            </div>

            <h2 id="loyve">Resten av løyvekravene</h2>
            <p>
              Faglig kompetanse er bare ett av kravene. For nasjonalt varebilløyve gjelder også kravene til økonomi, vandel og
              etablering i yrkestransportforskriften. I tillegg skal sjåfører og medhjelpere som transporterer andres varer ha
              HMS-kort, og hvert kjøretøy må ha med seg gyldig løyvedokument.
            </p>
            <p>
              Fra 1. april 2027 kommer også kravene om <a href="/kjore-og-hviletid-varebil">kjøre- og hviletid</a> og{" "}
              <a href="/fartsskriver-varebil">fartsskriver</a>.
            </p>

            <h2>Kilder</h2>
            <ul className="sources">
              <li><a href="https://www.vegvesen.no/forerkort/ta-forerkort/teoriprove/loyveeksamen/loyveeksamen-for-varebil/" target="_blank" rel="noopener noreferrer">Statens vegvesen: Løyveeksamen for varebil</a></li>
              <li><a href="https://www.vegvesen.no/kjoretoy/yrkestransport/transportloyver-og-tillatelser/nasjonalt-varebilloyve/" target="_blank" rel="noopener noreferrer">Statens vegvesen: Nasjonalt løyve for varebil</a></li>
              <li><a href="https://www.regjeringen.no/no/aktuelt/ryddar-opp-i-varebilbransjen-nye-reglar-og-fleire-krav-til-seriositet/id3144088/" target="_blank" rel="noopener noreferrer">Regjeringen: Nye reglar og fleire krav til seriøsitet i varebilbransjen</a></li>
              <li><a href="https://www.yrkesbil.no/loyve-loyveplikt-statens-vegvesen/nye-regler-fra-nyttar-men-mange-sliter-tre-av-fire-stryker-pa-loyveeksamen/4155990" target="_blank" rel="noopener noreferrer">Yrkesbil: Tre av fire stryker på løyveeksamen</a></li>
            </ul>
          </div>
        </article>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
