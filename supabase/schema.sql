-- Varebilklar: venteliste + quiz-statistikk
-- Kjør i Supabase → SQL Editor

create table if not exists public.waitlist (
  id           bigint generated always as identity primary key,
  created_at   timestamptz not null default now(),
  email        text not null unique check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  rolle        text not null check (rolle in ('sjafor_enk','transportleder','firma','annet')),
  antall_biler int  check (antall_biler between 0 and 10000),
  interesse    text[] not null default '{}',
  quiz_score   smallint check (quiz_score between 0 and 10),
  src          text,
  samtykke     boolean not null default false
);

create table if not exists public.quiz_runs (
  id         bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  score      smallint not null check (score between 0 and 10),
  wrong_ids  text[] not null default '{}',
  src        text
);

-- RLS på, ingen policies: anon/publishable-nøkkelen kan verken lese eller skrive tabellene direkte.
alter table public.waitlist  enable row level security;
alter table public.quiz_runs enable row level security;

-- Eneste inngang for nettsiden: to SECURITY DEFINER-funksjoner.
create or replace function public.join_waitlist(
  p_email text, p_rolle text, p_antall_biler int, p_interesse text[],
  p_quiz_score smallint, p_src text, p_samtykke boolean
) returns void language plpgsql security definer set search_path = '' as $$
begin
  if p_samtykke is not true then raise exception 'samtykke mangler'; end if;
  insert into public.waitlist (email, rolle, antall_biler, interesse, quiz_score, src, samtykke)
  values (lower(trim(p_email)), p_rolle, p_antall_biler,
    coalesce((select array_agg(i) from unnest(p_interesse) i
              where i in ('loyveeksamen','kjore_hviletid','kalkulator','firmalisens')), '{}'),
    p_quiz_score, left(p_src, 40), true)
  on conflict (email) do nothing;
end; $$;

create or replace function public.log_quiz_run(p_score smallint, p_wrong_ids text[], p_src text)
returns void language plpgsql security definer set search_path = '' as $$
begin
  insert into public.quiz_runs (score, wrong_ids, src)
  values (p_score,
    coalesce((select array_agg(i) from unnest(p_wrong_ids) i where i ~ '^q([1-9]|10)$'), '{}'),
    left(p_src, 40));
end; $$;

revoke all on function public.join_waitlist(text,text,int,text[],smallint,text,boolean) from public, authenticated;
revoke all on function public.log_quiz_run(smallint,text[],text) from public, authenticated;
grant execute on function public.join_waitlist(text,text,int,text[],smallint,text,boolean) to anon;
grant execute on function public.log_quiz_run(smallint,text[],text) to anon;

-- Nyttige spørringer
-- select src, count(*) from waitlist group by src order by 2 desc;
-- select rolle, count(*), sum(antall_biler) from waitlist group by rolle;
-- select src, count(*), round(avg(score),1) from quiz_runs group by src;
-- select unnest(wrong_ids) q, count(*) from quiz_runs group by q order by 2 desc;
