# Varebilklar – landingsside

Next.js 16 (App Router) + Supabase. Gratis prøve med 10 spørsmål, venteliste, quiz-statistikk, OG-bilde for Facebook.

## Drift
- Produksjon: https://varebilklar.no (Vercel-prosjekt `varebilklar`, region arn1)
- Database: Supabase-prosjekt `varebilklar` (eu-north-1)
- Push til `main` publiserer automatisk.

## Struktur
- `lib/questions.ts` – de 10 spørsmålene (svar, forklaring, kilde)
- `components/Experience.tsx` – quiz + venteliste (klient)
- `app/api/waitlist` – lagrer påmelding via RPC `join_waitlist`
- `app/api/quiz` – lagrer anonym poengsum + feil spørsmål via RPC `log_quiz_run`
- `app/opengraph-image.tsx` – forhåndsvisningsbilde i Facebook
- `supabase/schema.sql` – tabeller, RLS og RPC-funksjoner

## Miljøvariabler (Vercel)
- `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY` – tabellene er låst, nøkkelen kan bare kalle de to RPC-funksjonene
- `NEXT_PUBLIC_SITE_URL` – https://varebilklar.no
- `NEXT_PUBLIC_CONTACT_EMAIL` – kontaktadresse i footer og personvernerklæring

## Sporing per Facebook-gruppe
- `https://varebilklar.no/?src=fb1`
- `https://varebilklar.no/?src=fb2`

```sql
select src, count(*) from quiz_runs group by src;   -- fullførte prøver
select src, count(*) from waitlist  group by src;   -- påmeldinger
select unnest(wrong_ids) q, count(*) from quiz_runs group by q order by 2 desc; -- vanskeligste spørsmål
```

## Lokalt
```
npm install
cp .env.example .env.local   # fyll inn
npm run dev
```
