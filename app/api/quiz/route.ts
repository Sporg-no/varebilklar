import { NextResponse } from "next/server";
import { cleanSrc, serverSupabase } from "@/lib/supabase";
import { questions } from "@/lib/questions";

const IDS = new Set(questions.map((q) => q.id));

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const score = Number(body.score);
  if (!Number.isInteger(score) || score < 0 || score > questions.length) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const wrong_ids = Array.isArray(body.wrong_ids)
    ? body.wrong_ids.filter((i): i is string => typeof i === "string" && IDS.has(i))
    : [];

  const sb = serverSupabase();
  if (!sb) return NextResponse.json({ ok: true, stored: false });

  const { error } = await sb.rpc("log_quiz_run", {
    p_score: score,
    p_wrong_ids: wrong_ids,
    p_src: cleanSrc(body.src),
  });
  if (error) console.error("quiz insert", error);
  return NextResponse.json({ ok: true });
}
