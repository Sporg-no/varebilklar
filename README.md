# Varebilklar – landingsside

Next.js 16 (App Router) + Supabase. Gratis prøve med 10 spørsmål, venteliste, quiz-statistikk, OG-bilde for Facebook.

## Struktur
- `lib/questions.ts` – de 10 spørsmålene (svar, forklaring, kilde)
- `components/Experience.tsx` – quiz + venteliste (klient)
- `app/api/waitlist` – lagrer påmelding (service role, kun server)
- `app/api/quiz` – lagrer anonym poengsum + feil spørsmål
- `app/opengraph-image.tsx` – forhåndsvisningsbilde i Facebook
- `supabase/schema.sql` – tabeller + RLS

## Oppsett (gjøres én gang)
1. Supabase: nytt prosjekt, region **EU (Frankfurt eller Stockholm)**. SQL Editor → kjør `supabase/schema.sql`.
2. GitHub: nytt privat repo, push denne mappen.
3. Vercel: Import repo. Environment Variables:
   - `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` (Project Settings → API)
   - `NEXT_PUBLIC_SITE_URL` = https://varebilklar.no
   - `NEXT_PUBLIC_CONTACT_EMAIL` = adressen du faktisk leser
4. Domene: kjøp varebilklar.no (Domeneshop e.l.), legg til i Vercel → Domains.
5. Test: ta prøven, meld deg på, sjekk at radene dukker opp i Supabase.

## Sporing per Facebook-gruppe
Bruk egen lenke per gruppe:
- `https://varebilklar.no/?src=fb_gruppe1`
- `https://varebilklar.no/?src=fb_gruppe2`

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
