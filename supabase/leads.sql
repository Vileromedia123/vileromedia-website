-- VileroMedia: leads table for the contact / free audit form
-- Run once in Supabase -> SQL Editor -> Run

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 1 and 120),
  email text not null check (char_length(email) between 3 and 200),
  message text not null check (char_length(message) between 1 and 2000),
  company text,
  phone text,
  source text
);

-- Row-level security: the public site can only INSERT. Nobody can read leads
-- with the public (anon) key. You read them in Supabase -> Table Editor -> leads.
alter table public.leads enable row level security;

drop policy if exists "Public can submit leads" on public.leads;
create policy "Public can submit leads"
  on public.leads
  for insert
  to anon, authenticated
  with check (true);
