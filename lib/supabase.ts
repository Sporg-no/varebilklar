import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Publishable (anon) nøkkel. Tabellene er låst med RLS; nøkkelen kan bare kalle
// RPC-funksjonene join_waitlist og log_quiz_run. Se supabase/schema.sql.
let client: SupabaseClient | null = null;

export function serverSupabase(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return null;
  if (!client) {
    client = createClient(url, key, { auth: { persistSession: false } });
  }
  return client;
}

export function cleanSrc(v: unknown): string | null {
  if (typeof v !== "string") return null;
  const s = v.trim().toLowerCase().replace(/[^a-z0-9_\-]/g, "").slice(0, 40);
  return s || null;
}
