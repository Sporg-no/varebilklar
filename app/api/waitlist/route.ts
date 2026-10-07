import { NextResponse } from "next/server";
import { cleanSrc, serverSupabase } from "@/lib/supabase";

const ROLLER = new Set(["sjafor_enk", "transportleder", "firma", "annet"]);
const INTERESSER = new Set(["loyveeksamen", "kjore_hviletid", "kalkulator", "firmalisens"]);
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Ugyldig forespørsel." }, { status: 400 });
  }

  // Honeypot: bots fyller ut skjulte felt. Svar ok, lagre ingenting.
  if (typeof body.firmanettside === "string" && body.firmanettside.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const email = String(body.email ?? "").trim().toLowerCase().slice(0, 254);
  const rolle = String(body.rolle ?? "");
  const samtykke = body.samtykke === true;

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Sjekk e-postadressen." }, { status: 400 });
  }
  if (!ROLLER.has(rolle)) {
    return NextResponse.json({ ok: false, error: "Velg hva som passer deg." }, { status: 400 });
  }
  if (!samtykke) {
    return NextResponse.json({ ok: false, error: "Du må godta at vi lagrer e-posten." }, { status: 400 });
  }

  const antallRaw = Number(body.antall_biler);
  const antall_biler =
    body.antall_biler !== null && Number.isFinite(antallRaw) && antallRaw >= 0 && antallRaw <= 10000 ? Math.round(antallRaw) : null;

  const interesse = Array.isArray(body.interesse)
    ? body.interesse.filter((i): i is string => typeof i === "string" && INTERESSER.has(i))
    : [];

  const scoreRaw = Number(body.quiz_score);
  const quiz_score =
    body.quiz_score !== null && Number.isInteger(scoreRaw) && scoreRaw >= 0 && scoreRaw <= 10 ? scoreRaw : null;

  const sb = serverSupabase();
  if (!sb) {
    return NextResponse.json(
      { ok: false, error: "Ventelisten er ikke koblet til ennå. Prøv igjen senere." },
      { status: 503 }
    );
  }

  // Duplikat-e-post ignoreres i databasen (on conflict do nothing), så svaret er likt.
  const { error } = await sb.rpc("join_waitlist", {
    p_email: email,
    p_rolle: rolle,
    p_antall_biler: antall_biler,
    p_interesse: interesse,
    p_quiz_score: quiz_score,
    p_src: cleanSrc(body.src),
    p_samtykke: samtykke,
  });

  if (error) {
    console.error("waitlist insert", error);
    return NextResponse.json({ ok: false, error: "Noe gikk galt. Prøv igjen." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
