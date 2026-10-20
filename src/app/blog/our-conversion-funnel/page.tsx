import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "From First Search to Booked Inspection: How Roofers Find and Hire Us | VileroMedia",
  description:
    "VileroMedia's funnel, in the open: where roofing companies find us, the conversion rate we aim for at each step, the 5 searches roofers type when they need help with Google, and what our pre-launch website test changed.",
  alternates: { canonical: "/blog/our-conversion-funnel" },
};

const heroPhoto =
  "https://images.unsplash.com/photo-1635424709845-3a85ad5e1f5e?auto=format&fit=crop&q=70"; // two people on a roof (Unsplash License)

/* ---------- small building blocks ---------- */

function H2({ id, part, children }: { id: string; part: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24 pt-16">
      <p className="font-display text-sm font-semibold uppercase tracking-widest text-orange">{part}</p>
      <h2 className="mt-1 font-display text-4xl font-bold uppercase leading-none text-navy sm:text-5xl">{children}</h2>
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-lg leading-relaxed text-ink/85">{children}</p>;
}

function Note({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-sm text-muted">{children}</p>;
}

/* ---------- data ---------- */

const funnel = [
  {
    stage: "1. Get seen",
    where: "Roofers' Facebook groups · our Facebook & Instagram",
    what: "We answer real questions in contractor groups (no links, no pitch) and post a weekly series, “Where Does Your Ad Money Go?”, plus short Reels.",
    width: "100%",
  },
  {
    stage: "2. Get found",
    where: "Google · ChatGPT and other AI assistants",
    what: "Owners who search for help with Google Ads land on our guides, like “How much should a roofer spend on Google Ads?”.",
    width: "86%",
  },
  {
    stage: "3. Visit the site",
    where: "vileromedia website",
    what: "Prices on the page, month-to-month terms, a sample report, the team, and our first 30 days, step by step.",
    width: "70%",
  },
  {
    stage: "4. Request the free audit",
    where: "Audit form · email",
    what: "15 minutes, no credit card, no contract. The form asks “How did you hear about us?”, so we know which channel works.",
    width: "52%",
  },
  {
    stage: "5. Audit call",
    where: "Video or phone call",
    what: "We show where the ad money goes, in plain numbers. The owner keeps the findings, even if he never hires us.",
    width: "38%",
  },
  {
    stage: "6. Client",
    where: "Month-to-month",
    what: "Starter ($600/mo) or Growth ($1,200/mo), plus ad spend paid directly to Google. Cancel anytime, 30 days' notice.",
    width: "26%",
  },
  {
    stage: "7. Referral",
    where: "Back into the Facebook groups",
    what: "Owners trust other owners. A client spotlight (with permission) and a referral offer close the loop.",
    width: "18%",
  },
];

const targets = [
  {
    step: "Visit → audit request, from social & groups",
    benchmark: "Visit → lead 1–3% · landing page 2–5%",
    ours: "7%",
    why: "Warm traffic: these owners already saw us answer a question in their group before they clicked.",
  },
  {
    step: "Visit → audit request, from search",
    benchmark: "Visit → lead 1–3%",
    ours: "3%",
    why: "Colder traffic, so we aim for the top of the normal range, helped by the guide and the free audit.",
  },
  {
    step: "Audit → follow-up call booked",
    benchmark: "Lead → qualified lead ≈ 30%",
    ours: "50%",
    why: "Requests are already qualified: the form asks for the service area and goal, and the audit shows real numbers.",
  },
  {
    step: "Audit → client",
    benchmark: "Varies widely by industry",
    ours: "25% (1 in 4)",
    why: "Month-to-month and visible prices remove the two biggest objections before the call starts.",
  },
];

const queries: { stage: string; tone: string; items: string[] }[] = [
  {
    stage: "Problem-aware",
    tone: "Something is wrong, he doesn't know what to buy yet",
    items: [
      "why is my phone not ringing roofing business",
      "how to get more roofing leads",
      "slow season roofing company what to do",
      "how to get roofing jobs without door knocking",
      "is angi worth it for roofers",
      "roofing leads cost too much",
      "how do roofers get customers",
    ],
  },
  {
    stage: "Solution-aware",
    tone: "He knows Google could be the answer",
    items: [
      "google ads for roofers",
      "how much should a roofer spend on google ads",
      "local services ads for roofers",
      "google guaranteed roofing contractor",
      "how to rank roofing company on google maps",
      "roofing google ads cost per lead",
      "is google ads worth it for a small roofing company",
    ],
  },
  {
    stage: "Ready to buy",
    tone: "He is comparing agencies",
    items: [
      "roofing marketing agency",
      "roofing marketing agency no contract",
      "google ads management for roofing companies",
      "roofing marketing agency pricing",
      "best marketing company for roofers",
      "free google ads audit roofing",
    ],
  },
];

const keywords = [
  {
    kw: "how to get more roofing leads",
    stage: "Problem-aware",
    why: "The question owners ask long before they think about an agency. The widest audience, and the way in for owners who have never hired one.",
    page: "Our next guide: getting more calls outside storm season",
  },
  {
    kw: "google ads for roofers",
    stage: "Solution-aware",
    why: "Names our first service exactly. Someone typing this already believes Google can work for him.",
    page: "Home page, Services",
  },
  {
    kw: "how much should a roofer spend on google ads",
    stage: "Solution-aware",
    why: "A money question, the one owners ask first. It matches our promise: numbers, not jargon.",
    page: "Guide: How much should a roofer spend on Google Ads?",
  },
  {
    kw: "roofing marketing agency no contract",
    stage: "Ready to buy",
    why: "Owners burned by a yearly contract are the ones our offer was built for. This search is that exact pain.",
    page: "Home page, Pricing and FAQ",
  },
  {
    kw: "local services ads for roofers",
    stage: "Solution-aware → ready",
    why: "LSA is our Starter plan, and Google LSA news is the content roofers engage with most.",
    page: "Home page, Services and Starter plan",
  },
];

const segments: [string, number, number, number][] = [
  // label, average score, n, would book
  ["Burned by a yearly contract", 5.2, 21, 6],
  ["Currently with an agency", 4.9, 8, 1],
  ["Never hired an agency", 4.8, 39, 5],
  ["Buys shared leads (Angi etc.)", 4.7, 7, 0],
  ["Burned by click-only reports", 4.5, 19, 3],
  ["Runs Google Ads himself", 4.3, 6, 1],
];

/* ---------- page ---------- */

export default function FunnelArticle() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "From first search to booked inspection: how roofers find and hire us",
    author: { "@type": "Organization", name: "VileroMedia" },
    publisher: { "@type": "Organization", name: "VileroMedia" },
    datePublished: "2026-10-20",
    keywords: keywords.map((k) => k.kw).join(", "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <Image src={heroPhoto} alt="Two roofers working on the roof of a house" fill priority sizes="100vw" className="object-cover opacity-35" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40" />
        <div className="relative mx-auto max-w-3xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
          <Link href="/blog" className="text-sm text-white/70 hover:text-white">
            ← Blog
          </Link>
          <p className="mt-6 font-display text-lg font-semibold uppercase tracking-widest text-orange">How we work · 7 min read</p>
          <h1 className="mt-2 font-display text-5xl font-bold uppercase leading-[0.95] sm:text-6xl">
            From first search to booked inspection
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-white/85">
            We tell roofers to measure every step between a click and a signed job. So here are our own steps, in the open: where roofing
            companies find us, the conversion rate we aim for at each stage, and the searches they type when they need help with Google.
          </p>
          <nav aria-label="In this article" className="mt-8 flex flex-wrap gap-2 text-sm">
            {[
              ["#funnel", "1. The funnel"],
              ["#targets", "2. Our numbers"],
              ["#keywords", "3. What roofers search"],
              ["#test", "4. Our website test"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="rounded-full border border-white/25 px-3 py-1 text-white/85 hover:border-orange hover:text-white">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <main className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        {/* Who */}
        <div className="pt-12">
          <div className="rounded-xl border border-navy/10 bg-white p-6">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-orange">The owner we build for</p>
            <p className="mt-2 text-lg text-ink/85">
              A residential roofing owner who still does the estimates, checks the crews and answers most calls himself. Most of his work comes
              from referrals, and Google brings maybe a quarter of it. He reads everything on his phone between two jobs and trusts other roofers
              more than any agency. Often he has been burned once already: a year of click reports and a 12-month contract. Any spend above a few
              hundred dollars a month gets decided with whoever runs the books.
            </p>
            <p className="mt-3 text-muted">
              Larger companies with several crews and markets hire us for the same reasons. The funnel below is the same for them.
            </p>
          </div>
        </div>

        {/* PART 1 */}
        <H2 id="funnel" part="Part 1">
          The funnel
        </H2>
        <P>
          Roofing owners don&apos;t trust agency ads, and they don&apos;t make business decisions on TikTok. So we don&apos;t start with paid ads. We go
          where they already are, roofers&apos; Facebook groups, and Google when they have a question, and we send everyone to one single action: a
          free 15-minute Google Ads audit.
        </P>

        <ol className="mt-8 space-y-3" aria-label="VileroMedia conversion funnel, 7 stages">
          {funnel.map((f, i) => (
            <li key={f.stage}>
              <div className="mx-auto" style={{ width: `max(${f.width}, 280px)`, maxWidth: "100%" }}>
                <div className={`rounded-lg p-4 text-white ${i === 3 ? "bg-orange" : i >= 5 ? "bg-green" : "bg-navy"}`}>
                  <p className="font-display text-xl font-bold uppercase">{f.stage}</p>
                  <p className="text-sm text-white/80">{f.where}</p>
                </div>
              </div>
              <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted">{f.what}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-navy p-6 text-white">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-orange">Path A · where roofers talk</p>
            <p className="mt-2 font-display text-2xl font-bold uppercase leading-tight">Facebook group → our page → website → audit → call</p>
            <p className="mt-3 text-white/75">Our main path. Trust first, earned in the groups. Selling happens only on our own page, and only when he clicks.</p>
          </div>
          <div className="rounded-xl bg-navy-2 p-6 text-white">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-orange">Path B · search</p>
            <p className="mt-2 font-display text-2xl font-bold uppercase leading-tight">Google or ChatGPT → guide → audit → call</p>
            <p className="mt-3 text-white/75">For owners with a question right now. That&apos;s why we write practical guides.</p>
          </div>
        </div>

        <h3 className="mt-10 font-display text-2xl font-bold uppercase text-navy">What we deliberately don&apos;t do</h3>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-lg text-ink/85">
          <li>
            <strong>No cold ads selling ourselves.</strong> One more agency ad won&apos;t convince an owner who already paid for clicks that never
            became calls.
          </li>
          <li>
            <strong>No TikTok for prospects.</strong> It&apos;s full of crews and job-site videos, not owners making business decisions.
          </li>
          <li>
            <strong>No LinkedIn prospecting.</strong> Roofing owners barely use it.
          </li>
          <li>
            <strong>No links in Facebook groups.</strong> Answers only. Nobody wants another agency spamming their group.
          </li>
        </ul>

        {/* PART 2 */}
        <H2 id="targets" part="Part 2">
          The numbers we aim for
        </H2>
        <P>
          Every stage has a target, set next to the usual benchmark for that step, so you can see where we expect to do better and why. We review
          them every month against real form data and the “How did you hear about us?” answers.
        </P>

        <div className="mt-6 overflow-x-auto rounded-xl border border-navy/10 bg-white">
          <table className="w-full min-w-[620px] text-left text-sm">
            <thead className="bg-navy text-white">
              <tr>
                <th scope="col" className="p-3 font-display text-base uppercase tracking-wide">Stage</th>
                <th scope="col" className="p-3 font-display text-base uppercase tracking-wide">Typical benchmark</th>
                <th scope="col" className="p-3 font-display text-base uppercase tracking-wide">Our target</th>
                <th scope="col" className="p-3 font-display text-base uppercase tracking-wide">Why</th>
              </tr>
            </thead>
            <tbody>
              {targets.map((t) => (
                <tr key={t.step} className="border-t border-navy/10 align-top">
                  <th scope="row" className="p-3 font-semibold text-navy">{t.step}</th>
                  <td className="p-3 text-muted">{t.benchmark}</td>
                  <td className="p-3 font-display text-xl font-bold text-green">{t.ours}</td>
                  <td className="p-3 text-muted">{t.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Note>Typical digital marketing benchmarks: visit → lead 1–3%, lead → qualified lead about 30%, landing page conversion 2–5%.</Note>

        <div className="mt-8 rounded-xl bg-navy p-6 text-white sm:p-8">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-white/60">
            Our first-quarter goal · 2 November 2026 to 31 January 2027
          </p>
          <p className="mt-3 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
            120 visits → <span className="text-orange">8 audit requests</span> → 4 follow-up calls → <span className="text-green-light">2 new clients</span>
          </p>
          <p className="mt-4 text-white/75">
            Measured from Facebook, Instagram and roofers&apos; groups, with UTM links and the “How did you hear about us?” question on the audit form.
            Search traffic from our guides comes on top: every 100 search visits should add about 3 audit requests.
          </p>
        </div>

        {/* PART 3 */}
        <H2 id="keywords" part="Part 3">
          What roofers type into Google
        </H2>
        <P>
          Path B starts with a search. We wrote down the 20 questions roofing owners actually ask when the phone is too quiet, from “why
          isn&apos;t my phone ringing” to “roofing marketing agency no contract”, and sorted them by how close the owner is to hiring someone.
        </P>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {queries.map((q) => (
            <div key={q.stage} className="rounded-xl border border-navy/10 bg-white p-5">
              <p className="font-display text-xl font-bold uppercase text-navy">{q.stage}</p>
              <p className="text-sm text-muted">{q.tone}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-ink/85">
                {q.items.map((i) => (
                  <li key={i} className={keywords.some((k) => k.kw === i) ? "font-semibold text-orange-dark" : ""}>
                    “{i}”
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Note>Highlighted: the 5 we build our pages around.</Note>

        <P>We focus on 5 of them, at least one per stage, each answered by a specific page:</P>
        <ol className="mt-6 space-y-4">
          {keywords.map((k, i) => (
            <li key={k.kw} className="rounded-xl border border-navy/10 bg-white p-5">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-display text-3xl font-bold text-orange">{i + 1}</span>
                <span className="font-display text-2xl font-bold uppercase text-navy">“{k.kw}”</span>
                <span className="rounded bg-navy px-2 py-0.5 font-display text-xs font-semibold uppercase tracking-wider text-white">{k.stage}</span>
              </div>
              <p className="mt-2 text-ink/85">{k.why}</p>
              <p className="mt-2 text-sm text-muted">
                <strong className="text-navy">Page that answers it:</strong> {k.page}
              </p>
            </li>
          ))}
        </ol>
        <P>
          For each keyword we track search volume, the visits it brings and how many audit requests follow, and we swap any keyword that brings
          traffic but no audits.
        </P>

        {/* PART 4 */}
        <H2 id="test" part="Part 4">
          We tested our own website first
        </H2>
        <P>
          Before sending anyone to the site, we had it reviewed by 100 simulated roofing-owner profiles: different cities, company sizes, types of
          work, past agency experience, phone or laptop, patient or not. Each profile read the site and scored how likely they were to book the
          audit. We ran it twice, before and after our changes. They are simulations, not real customers, so the numbers tell us what to fix,
          not how many people will book.
        </P>

        <div className="mt-6 overflow-x-auto rounded-xl border border-navy/10 bg-white">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-navy text-white">
              <tr>
                <th scope="col" className="p-3 font-display text-base uppercase tracking-wide">100 profiles</th>
                <th scope="col" className="p-3 font-display text-base uppercase tracking-wide">First version</th>
                <th scope="col" className="p-3 font-display text-base uppercase tracking-wide">Current site</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Would book the audit (7–10)", "11%", "16%"],
                ["Maybe later (5–6)", "28%", "41%"],
                ["Not interested (1–4)", "61%", "43%"],
                ["Average score", "4.0 / 10", "4.8 / 10"],
              ].map(([k, a, b]) => (
                <tr key={k} className="border-t border-navy/10">
                  <th scope="row" className="p-3 font-semibold text-navy">{k}</th>
                  <td className="p-3 text-muted">{a}</td>
                  <td className="p-3 font-display text-xl font-bold text-green">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Note>The second run also included larger companies ($3M+) and new-construction subcontractors, so the two runs are close but not identical.</Note>

        <div className="mt-6 rounded-xl border border-navy/10 bg-white p-6">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-orange">Current site · average score by past agency experience</p>
          <ul className="mt-4 space-y-3">
            {segments.map(([label, score, n, book]) => (
              <li key={label}>
                <div className="flex justify-between gap-4 text-sm">
                  <span className="text-navy">{label}</span>
                  <span className="shrink-0 font-semibold text-navy">
                    {score} <span className="font-normal text-muted">(n={n}, {book} would book)</span>
                  </span>
                </div>
                <div className="mt-1 h-3 rounded bg-paper" aria-hidden="true">
                  <div className={`h-3 rounded ${score >= 5 ? "bg-orange" : "bg-navy/40"}`} style={{ width: `${(score / 10) * 100}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-navy p-6 text-white">
            <h3 className="font-display text-2xl font-bold uppercase">What works</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>✓ Month-to-month terms, liked by 37 profiles</li>
              <li>✓ Prices on the page (31)</li>
              <li>✓ “You own your Google Ads account” (30)</li>
              <li>✓ The budget guide: 22 of the 33 profiles who opened the blog</li>
              <li>✓ “Your first 30 days” (18). Owners who had never hired an agency went from 0 to 5 bookings</li>
              <li>✓ Storm and insurance roofers: 8 would book, the most of any type of work</li>
            </ul>
          </div>
          <div className="rounded-xl border border-navy/10 bg-white p-6">
            <h3 className="font-display text-2xl font-bold uppercase text-navy">What we changed or are working on</h3>
            <ul className="mt-3 space-y-2 text-ink/85">
              <li>→ Real client results (63 asked). We only publish them with written permission, so they come with our first clients.</li>
              <li>→ A direct phone line and a company email domain (30 and 36). Coming; email replies stay under 24 hours meanwhile.</li>
              <li>→ Larger companies felt it wasn&apos;t for them. We now cover several markets and crews with a custom plan.</li>
              <li>→ Commercial and new construction: we now say clearly what we do and don&apos;t do.</li>
              <li>→ A smaller budget example in our guide for companies starting out.</li>
            </ul>
          </div>
        </div>

        {/* Wrap-up */}
        <div className="mt-16 rounded-xl bg-navy p-8 text-white">
          <h2 className="font-display text-3xl font-bold uppercase">The short version</h2>
          <ul className="mt-4 space-y-2 text-white/85">
            <li>✓ Two ways in, roofers&apos; Facebook groups and search, and one next step: the free 15-minute audit.</li>
            <li>✓ A target at every stage, and a first-quarter goal: 8 audit requests and 2 new clients.</li>
            <li>✓ 5 searches we build pages around, from “how to get more roofing leads” to “roofing marketing agency no contract”.</li>
            <li>✓ We tested the site before launch and fixed what held owners back.</li>
          </ul>
          <p className="mt-6 text-white/80">If you&apos;re a roofer reading this, you&apos;re at stage 3. Here&apos;s stage 4:</p>
          <Link
            href="/#contact"
            className="mt-4 inline-flex items-center justify-center rounded-md bg-orange px-6 py-4 font-display text-xl font-bold uppercase tracking-wide text-white hover:bg-orange-dark"
          >
            Get my free 15-min audit
          </Link>
        </div>

        <p className="mt-8 text-xs text-muted">
          Sources: our review of 3 roofing marketing agencies (websites and social accounts, October 2026), an interview with a residential
          roofing owner in Texas (shared with permission), typical digital marketing conversion benchmarks, and a simulated review of this
          website by 100 roofing-owner profiles (October 2026). Photo: Unsplash.
        </p>
      </main>

      <SiteFooter />
    </>
  );
}
