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

-- RLS på, ingen policies: kun service role (server-ruten) kan lese/skrive.
alter table public.waitlist  enable row level security;
alter table public.quiz_runs enable row level security;

-- Nyttige spørringer
-- select src, count(*) from waitlist group by src order by 2 desc;
-- select rolle, count(*), sum(antall_biler) from waitlist group by rolle;
-- select src, count(*), round(avg(score),1) from quiz_runs group by src;
-- select unnest(wrong_ids) q, count(*) from quiz_runs group by q order by 2 desc;
