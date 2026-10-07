import type { Metadata } from "next";
import Kalkulator from "@/components/Kalkulator";
import { SiteFooter, SiteHeader } from "@/components/Site";

export const metadata: Metadata = {
  title: "Hviletidskalkulator for varebil – er arbeidsdagen din lovlig? | Varebilklar",
  description:
    "Gratis kalkulator: legg inn kjøring, pauser og annet arbeid, og se om dagen følger reglene for kjøre- og hviletid som gjelder varebil fra 1. april 2027.",
  alternates: { canonical: "/hviletidskalkulator" },
  openGraph: {
    title: "Hviletidskalkulator for varebil",
    description: "Er budbil-dagen din lovlig etter de nye reglene? Sjekk på ett minutt.",
    url: "/hviletidskalkulator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Hviletidskalkulator for varebil",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Alle",
  inLanguage: "nb",
  offers: { "@type": "Offer", price: "0", priceCurrency: "NOK" },
  url: "https://varebilklar.no/hviletidskalkulator",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section section-mist page-top">
          <div className="wrap">
            <p className="crumb">
              <a href="/">Forside</a> / Hviletidskalkulator
            </p>
            <h1 className="page-title">Hviletidskalkulator for varebil</h1>
            <p className="page-lead">
              Fra 1. april 2027 gjelder reglene for kjøre- og hviletid også varebiler på 2,5–3,5 tonn i godstransport.
              Legg inn en arbeidsdag og se om den er lovlig. Eksempeldagen under er en vanlig budbil-dag med én feil.
            </p>
            <Kalkulator />
          </div>
        </section>

        <section className="section">
          <div className="narrow article">
            <h2>Hva kalkulatoren sjekker</h2>
            <ul>
              <li>
                <b>Pause etter 4,5 timer kjøring.</b> Minst 45 minutter, eller delt i minst 15 minutter etterfulgt av minst
                30 minutter. Lasting, lossing og levering til dør er annet arbeid, ikke pause.
              </li>
              <li>
                <b>Daglig kjøretid.</b> Maks 9 timer. To ganger per uke kan den være inntil 10 timer.
              </li>
              <li>
                <b>Døgnhvil.</b> Minst 11 timer sammenhengende. Den kan reduseres til 9 timer maks tre ganger mellom to
                ukehviler, og må tas innen 24 timer fra arbeidsdagen startet.
              </li>
              <li>
                <b>Arbeidstid for ansatte.</b> Samlet arbeidstid over 13 timer i døgnet gir en advarsel for ansatte sjåfører.
              </li>
            </ul>
            <p>
              Les hele gjennomgangen av reglene i <a href="/kjore-og-hviletid-varebil">kjøre- og hviletid for varebil</a>,
              eller test deg selv med den <a href="/#prov">gratis prøven</a>.
            </p>
            <p className="sources">
              Kilder:{" "}
              <a href="https://www.vegvesen.no/kjoretoy/yrkestransport/kjore-og-hviletid/regelverk/" rel="noopener noreferrer" target="_blank">
                Statens vegvesen – regelverk for kjøre- og hviletid
              </a>
              ,{" "}
              <a href="https://www.regjeringen.no/no/aktuelt/innforer-krav-om-kjore-og-hviletid-og-fartsskriver-for-varebiler/id3168129/" rel="noopener noreferrer" target="_blank">
                Regjeringen 1. juli 2026
              </a>
              .
            </p>
            <div className="cta-box">
              <b>Vil du ha full oversikt før 1. april?</b>
              <p>Få beskjed når kurset om kjøre- og hviletid for varebil er klart.</p>
              <a className="btn" href="/#venteliste">
                Sett meg på ventelisten
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
