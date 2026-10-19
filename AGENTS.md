# AGENTS.md — VileroMedia website rules

Read this before changing anything on the site.

## Who we are
VileroMedia is a digital marketing agency for **residential roofing companies in the US** doing **$500K–$3M a year**.
We sell one thing first: **Google Ads + Local Services Ads**. Then Local SEO and landing pages.

Company mission: "We help small residential roofing companies in the US get more calls and booked inspections from Google, month-to-month and with clear pricing."

Target persona: Mike, 47, owns a 7-person roofing company in Dallas (~$900K/yr). Reads everything on his phone between jobs. Burned once by an agency (click reports, 12-month contract). His wife approves any spend above a few hundred dollars a month.

## Brand
| Token | Value | Use |
|---|---|---|
| Slate Navy | `#0F1B2D` | Backgrounds, text |
| Storm Orange | `#F26B1D` | Calls to action only |
| Signal Green | `#16A34A` | Numbers and results |
| Headings | Barlow Condensed (600/700, uppercase) | |
| Body | Inter | |

Tailwind tokens live in `src/app/globals.css` (`bg-navy`, `bg-orange`, `text-green`, `font-display`...). Do not hard-code other colors.

## Voice
Talk like you're talking to a roofer on a job site. Short sentences, real numbers, a bit of humour when it fits.
- Say: calls, leads, booked inspections, ad spend, cost per call, roofing jobs, service area, "Month-to-month. Cancel anytime."
- Never: synergy, conversion ecosystem, digital transformation, 360°, omnichannel, "unlock your growth potential", "10x your leads".

## Non-negotiable rules
1. **Prices visible on the page.** Our fee and the ad spend are always shown as two separate numbers.
2. **Month-to-month, no contract, no credit card for the audit.** Never contradict this anywhere.
3. **No fake testimonials, no invented results.** Client numbers only with written permission. Samples are labelled as samples.
4. **Main CTA = free 15-minute Google Ads audit.** Orange button, repeated in hero, pricing and contact.
5. **Mobile-first.** Test at 375px wide. Tap targets ≥ 44px. Phone/CTA reachable without scrolling far.
6. **Fast and accessible.** No heavy images or libraries without a reason. Labels on every form field, visible focus, alt text, contrast AA.

## Tech
- Next.js (App Router) + Tailwind CSS v4, deployed on Vercel (every merge to `main` = production).
- Contact form: server action in `src/app/actions.ts` → Supabase table `leads` (SQL in `supabase/leads.sql`, RLS: insert-only for the public key).
- Env vars come from the Vercel ↔ Supabase integration: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- Fonts are self-hosted via `@fontsource` (no external font requests).

## Workflow
One change per session → branch → `npm run build` must pass → pull request → check the Vercel preview on phone and laptop → merge.
