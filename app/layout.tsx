import type { Metadata, Viewport } from "next";
import "./globals.css";

// OG-bilder trenger absolutt URL. Uten eget domene brukes Vercel-adressen automatisk.
const SITE =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Varebilklar – øv til løyveeksamen og nye regler for varebil",
  description:
    "Fra 1. april 2027 gjelder kjøre- og hviletid og fartsskriver for varebiler på 2,5–3,5 tonn. Ta en gratis prøve med 10 spørsmål og se hvor klar du er.",
  openGraph: {
    title: "Ville du bestått? 10 gratis spørsmål om de nye varebilreglene",
    description:
      "Kjøre- og hviletid og fartsskriver for varebil fra 1. april 2027. 74 % strøk på løyveeksamen. Test deg selv på 4 minutter.",
    locale: "nb_NO",
    type: "website",
    siteName: "Varebilklar",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0f3b3a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <body>{children}</body>
    </html>
  );
}
