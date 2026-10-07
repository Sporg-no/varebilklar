import type { Metadata } from "next";

export const metadata: Metadata = { title: "Personvern – Varebilklar" };

const CONTACT = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "kontakt@varebilklar.no";

export default function Personvern() {
  return (
    <>
    <header className="site">
      <div className="wrap site-inner">
        <a className="brand" href="/">Varebilklar</a>
        <nav className="nav" aria-label="Hovedmeny">
          <a className="nav-cta" href="/">Til forsiden</a>
        </nav>
      </div>
    </header>
    <main className="narrow prose">
      <h1>Personvernerklæring</h1>
      <p>Sist oppdatert: 7. oktober 2026</p>

      <h2>Behandlingsansvarlig</h2>
      <p>
        Erlend Namsvatn ENK, org.nr. 914 829 216, Kvernbakken 175, 4355 Kverneland. Kontakt:{" "}
        <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
      </p>

      <h2>Hva vi lagrer</h2>
      <ul>
        <li>Venteliste: e-postadresse, hva som passer deg (rolle), eventuelt antall varebiler, hva du er interessert i, poengsum på prøven og hvilken lenke du kom fra.</li>
        <li>Prøven: poengsum og hvilke spørsmål som ble besvart feil, uten navn, e-post eller IP-adresse.</li>
      </ul>

      <h2>Formål og grunnlag</h2>
      <p>
        E-posten brukes kun til å gi deg beskjed når tjenesten lanseres, og til å tilpasse innholdet til de som har meldt
        interesse. Grunnlaget er ditt samtykke (GDPR art. 6 nr. 1 a). Prøvestatistikken brukes til å forbedre spørsmålene
        (berettiget interesse, art. 6 nr. 1 f).
      </p>

      <h2>Hvor data lagres</h2>
      <p>
        Data lagres hos Supabase (database) innenfor EU/EØS, og nettsiden driftes hos Vercel. Vi selger eller deler ikke
        data med andre.
      </p>

      <h2>Hvor lenge</h2>
      <p>Ventelisten slettes senest 12 måneder etter lansering, eller straks du ber om det.</p>

      <h2>Dine rettigheter</h2>
      <p>
        Du kan be om innsyn, retting eller sletting, og trekke samtykket når som helst ved å sende e-post til{" "}
        <a href={`mailto:${CONTACT}`}>{CONTACT}</a>. Du kan klage til Datatilsynet.
      </p>
    </main>
    </>
  );
}
