const CONTACT = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "kontakt@varebilklar.no";

export function Icon({ d, size = 44 }: { d: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

export const VAN =
  "M2 16V8a2 2 0 0 1 2-2h10v10M14 9h4l3 4v3h-7M2 16h2M10 16h4M20 16h1M7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM17 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z";
export const CLOCK = "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2";
export const CALC = "M4 4h16v16H4zM8 8h8M8 12h3M13 12h3M8 16h3M13 16h3";

export function SiteHeader() {
  return (
    <>
      <header className="site">
        <div className="wrap site-inner">
          <a className="brand" href="/" aria-label="Varebilklar, til forsiden">
            <span className="brand-mark">
              <Icon d={VAN} size={24} />
            </span>
            Varebilklar
          </a>
          <nav className="nav" aria-label="Hovedmeny">
            <a href="/#prov">Gratis prøve</a>
            <a href="/hviletidskalkulator">Kalkulator</a>
            <a href="/kjore-og-hviletid-varebil">Reglene</a>
            <a className="nav-cta" href="/#venteliste">
              Venteliste
            </a>
          </nav>
        </div>
      </header>
      <div className="notice">
        <div className="wrap">Uavhengig øvingstjeneste. Ikke tilknyttet Statens vegvesen.</div>
      </div>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="wrap foot-grid">
        <div>
          <h3>Varebilklar</h3>
          <p>
            Uavhengig øvingstjeneste, ikke tilknyttet Statens vegvesen. Innholdet er ment som øving og forklaring, ikke
            juridisk rådgivning. Sjekk alltid gjeldende regelverk.
          </p>
          <p>
            <a href="/hviletidskalkulator">Hviletidskalkulator</a> ·{" "}
            <a href="/kjore-og-hviletid-varebil">Kjøre- og hviletid</a> ·{" "}
            <a href="/fartsskriver-varebil">Fartsskriver</a> · <a href="/loyveeksamen-varebil">Løyveeksamen</a>
          </p>
        </div>
        <div>
          <h3>Kontakt</h3>
          <p>Namsvatn Markonsult · Org.nr. 914 829 216</p>
          <p>
            <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
          </p>
          <p>
            <a href="/personvern">Personvern</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
