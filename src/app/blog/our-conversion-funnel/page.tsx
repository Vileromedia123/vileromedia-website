import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "How We Find Roofing Companies That Need Us: Our Conversion Funnel | VileroMedia",
  description:
    "VileroMedia's conversion funnel for US residential roofing companies: where roofers find us, the conversion target at each stage, and the 5 keywords roofers search when they need help with Google Ads.",
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
    what: "Prices on the page, month-to-month, a sample report, the team with faces, and our first 30 days, step by step.",
    width: "70%",
  },
  {
    stage: "4. Request the free audit",
    where: "Audit form · email",
    what: "15 minutes, no credit card, no contract. The form asks “How did you hear about us?” so we know which channel works.",
    width: "52%",
  },
  {
    stage: "5. Audit call",
    where: "Video or phone call",
    what: "We show where their ad money goes in plain numbers. They keep the findings, even if they never hire us.",
    width: "38%",
  },
  {
    stage: "6. Client",
    where: "Month-to-month",
    what: "Starter ($600/mo) or Growth ($1,200/mo), plus ad spend paid to Google. Cancel anytime, 30 days' notice.",
    width: "26%",
  },
  {
    stage: "7. Referral",
    where: "Back into the Facebook groups",
    what: "Happy clients tell other owners. A client spotlight (with permission) and a referral offer close the loop.",
    width: "18%",
  },
];

const targets = [
  {
    step: "Social reach → site visit",
    benchmark: "Set in week 2 (no reliable benchmark for a new page)",
    ours: "120 visits to the audit page",
    source: "Group strategy, measured with UTM links",
  },
  {
    step: "Search → site visit",
    benchmark: "Depends on ranking",
    ours: "80 visits from Google and AI tools",
    source: "Our assumption for a brand-new site; checked after month 1",
  },
  {
    step: "Visit → audit request (social)",
    benchmark: "Visit → lead 1–3% · landing page 2–5%",
    ours: "≈ 7% → 8 requests",
    source: "Group SMART goal. Warm traffic from groups converts above the average",
  },
  {
    step: "Visit → audit request (search)",
    benchmark: "Visit → lead 1–3%",
    ours: "≈ 3% → 2 requests",
    source: "Top of the course benchmark, colder traffic",
  },
  {
    step: "Audit request → audit call held",
    benchmark: "Lead → MQL ≈ 30%",
    ours: "50% → 5 calls",
    source: "Group target: 4 calls from 8 requests. Requests are pre-qualified by the form",
  },
  {
    step: "Audit → client",
    benchmark: "No course benchmark",
    ours: "1 in 4 audits → 2 clients",
    source: "Group ROI assumption",
  },
];

const queries: { stage: string; tone: string; items: string[] }[] = [
  {
    stage: "Problem-aware",
    tone: "He knows something is wrong, not what to buy",
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
    why: "The question Mike actually asks between two jobs, before he even thinks about an agency. Widest audience, and the entry point for owners who have never hired one, our weakest group in testing.",
    page: "New article: “How small roofers get more calls outside storm season” (next on our list)",
  },
  {
    kw: "google ads for roofers",
    stage: "Solution-aware",
    why: "Names our first service exactly. Someone typing this already believes Google can work for him.",
    page: "Home page, Services section",
  },
  {
    kw: "how much should a roofer spend on google ads",
    stage: "Solution-aware",
    why: "A money question, the kind our persona asks first. Matches our “numbers, not jargon” promise.",
    page: "Our guide: How much should a roofer spend on Google Ads?",
  },
  {
    kw: "roofing marketing agency no contract",
    stage: "Ready to buy",
    why: "Owners burned by a yearly contract rated our site highest in testing. This query is that exact pain, typed into Google.",
    page: "Home page, Pricing and FAQ (“Is there a contract?”)",
  },
  {
    kw: "local services ads for roofers",
    stage: "Solution-aware → ready",
    why: "LSA is our Starter plan, and Google LSA news is the best-performing content we found in our competitor audit.",
    page: "Home page, Services and Starter plan",
  },
];

/* ---------- page ---------- */

export default function FunnelArticle() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How we find roofing companies that need us: our conversion funnel",
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
          <p className="mt-6 font-display text-lg font-semibold uppercase tracking-widest text-orange">Behind the scenes · 8 min read</p>
          <h1 className="mt-2 font-display text-5xl font-bold uppercase leading-[0.95] sm:text-6xl">
            How we find roofing companies that need us
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-white/85">
            Our conversion funnel, the number we expect at every stage, and the 5 keywords roofing owners type when they look for help with
            Google. We publish it because we tell clients to measure everything. We should show our own numbers too.
          </p>
          <nav aria-label="In this article" className="mt-8 flex flex-wrap gap-2 text-sm">
            {[
              ["#funnel", "1. The funnel"],
              ["#targets", "2. Targets per stage"],
              ["#keywords", "3. The 5 keywords"],
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
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-orange">Who we are looking for</p>
            <p className="mt-2 text-lg text-ink/85">
              <strong className="text-navy">Mike</strong>, our persona: 47, owns a 7-person residential roofing company in Dallas. Most of his work
              comes from referrals, Google brings maybe a quarter. He reads everything on his phone between two jobs, trusts other roofers more
              than agencies, and was burned once: a year of click reports and a 12-month contract. His wife signs off on anything above a few
              hundred dollars a month.
            </p>
          </div>
        </div>

        {/* PART 1 */}
        <H2 id="funnel" part="Part 1">
          The funnel
        </H2>
        <P>
          Mike doesn&apos;t trust agency ads, and he doesn&apos;t make business decisions on TikTok. So we don&apos;t start with paid ads. We go where
          he already is (roofers&apos; Facebook groups, and Google when he has a question) and send everyone to one single action: a free
          15-minute Google Ads audit.
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
            <p className="mt-2 font-display text-2xl font-bold uppercase leading-tight">
              Facebook group → our page → website → audit → call
            </p>
            <p className="mt-3 text-white/75">Our main path. Earned trust first, selling only on our own page, only when he clicks.</p>
          </div>
          <div className="rounded-xl bg-navy-2 p-6 text-white">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-orange">Path B · search</p>
            <p className="mt-2 font-display text-2xl font-bold uppercase leading-tight">Google or ChatGPT → article → audit → call</p>
            <p className="mt-3 text-white/75">For owners with a question right now. This is why we write guides like this one.</p>
          </div>
        </div>

        <h3 className="mt-10 font-display text-2xl font-bold uppercase text-navy">What we chose not to do</h3>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-lg text-ink/85">
          <li>
            <strong>No cold paid ads at launch.</strong> We have no case studies yet, and one more agency ad won&apos;t convince someone who already
            paid for clicks that never became calls.
          </li>
          <li>
            <strong>No TikTok.</strong> One competitor posts there every day and has 5 followers.
          </li>
          <li>
            <strong>No LinkedIn for prospects.</strong> Small roofers barely use it. We keep it for our own credibility.
          </li>
          <li>
            <strong>No links in Facebook groups.</strong> Answers only. “Another agency spamming my group” is the fastest way to lose them.
          </li>
        </ul>

        {/* PART 2 */}
        <H2 id="targets" part="Part 2">
          Realistic targets at each stage
        </H2>
        <P>
          We set targets for our first quarter, 2 November 2026 to 31 January 2027. That&apos;s the slow season between storms, when owners have time
          to plan next year&apos;s marketing. Each number below sits next to the course benchmark it&apos;s based on, so you can see where we are more
          or less optimistic.
        </P>

        <div className="mt-6 overflow-x-auto rounded-xl border border-navy/10 bg-white">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-navy text-white">
              <tr>
                <th scope="col" className="p-3 font-display text-base uppercase tracking-wide">Stage</th>
                <th scope="col" className="p-3 font-display text-base uppercase tracking-wide">Typical benchmark</th>
                <th scope="col" className="p-3 font-display text-base uppercase tracking-wide">Our target (13 weeks)</th>
                <th scope="col" className="p-3 font-display text-base uppercase tracking-wide">Where it comes from</th>
              </tr>
            </thead>
            <tbody>
              {targets.map((t) => (
                <tr key={t.step} className="border-t border-navy/10 align-top">
                  <th scope="row" className="p-3 font-semibold text-navy">{t.step}</th>
                  <td className="p-3 text-muted">{t.benchmark}</td>
                  <td className="p-3 font-display text-lg font-bold text-green">{t.ours}</td>
                  <td className="p-3 text-muted">{t.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Note>Course benchmarks: visit → lead 1–3%, lead → MQL about 30%, landing page conversion 2–5%, cold email reply 1–5%.</Note>

        <div className="mt-8 rounded-xl bg-navy p-6 text-white sm:p-8">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-white/60">The quarter in one line</p>
          <p className="mt-3 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
            200 visits → <span className="text-orange">10 audit requests</span> → 5 audit calls → <span className="text-green-light">2 clients</span>
          </p>
          <dl className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ["$14,400", "revenue: 2 clients × $1,200 × 6 months average stay"],
              ["$2,225", "cost of our social plan for the quarter (time, tools, one sponsored podcast slot)"],
              ["≈ 5.5x", "return on the social plan alone. Search visits are a bonus on top"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-4xl font-bold text-green-light">{n}</dt>
                <dd className="mt-1 text-sm text-white/70">{l}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-xs text-white/50">
            Fee, average stay and close rate are assumptions from our group plan. Main risk: our fee. If clients only accept the $600 Starter plan,
            2 clients bring $7,200 over 6 months, a return of about 2.2x. Still positive.
          </p>
        </div>

        <h3 className="mt-12 font-display text-2xl font-bold uppercase text-navy">Stress test: 100 simulated roofing owners</h3>
        <P>
          Before launch, we ran our website past 100 AI-simulated roofing owners matching our target (city, company size, how they get work,
          past agency experience). They are simulated, not real people, so the numbers show which problems hit the most kinds of owner, not a
          real conversion rate.
        </P>
        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
          {[
            ["11%", "would book the audit", "bg-green text-white"],
            ["28%", "maybe later", "bg-navy-2 text-white"],
            ["61%", "not interested", "bg-white text-navy border border-navy/10"],
          ].map(([n, l, cls]) => (
            <div key={l} className={`rounded-xl p-4 ${cls}`}>
              <p className="font-display text-4xl font-bold">{n}</p>
              <p className="mt-1 text-sm opacity-80">{l}</p>
            </div>
          ))}
        </div>
        <Note>Average score 4.0 out of 10. A score of 7 or more means the owner would book the audit.</Note>

        <div className="mt-6 rounded-xl border border-navy/10 bg-white p-6">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-orange">Average score by past agency experience</p>
          <ul className="mt-4 space-y-3">
            {[
              ["Burned by a yearly contract", 5.1, 19, true],
              ["Burned by click-only reports", 4.6, 20, true],
              ["Ran Google Ads himself", 4.6, 5, false],
              ["Buys shared leads (Angi etc.)", 3.5, 13, false],
              ["Currently with an agency", 3.3, 9, false],
              ["Never hired an agency", 3.2, 34, false],
            ].map(([label, score, n, hi]) => (
              <li key={label as string}>
                <div className="flex justify-between text-sm">
                  <span className="text-navy">{label as string}</span>
                  <span className="font-semibold text-navy">
                    {score as number} <span className="font-normal text-muted">(n={n as number})</span>
                  </span>
                </div>
                <div className="mt-1 h-3 rounded bg-paper" aria-hidden="true">
                  <div className={`h-3 rounded ${hi ? "bg-orange" : "bg-navy/40"}`} style={{ width: `${((score as number) / 10) * 100}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <P>Two things changed our funnel:</P>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-lg text-ink/85">
          <li>
            <strong>Our message hits the right people.</strong> 9 of the 11 owners who would book had been burned by a yearly contract or by
            click-only reports. That&apos;s exactly who our real interview described.
          </li>
          <li>
            <strong>Owners who never hired an agency didn&apos;t convert at all</strong> (0 of 34, the biggest group). Nothing told them why they
            would need one. So we added “Your first 30 days” and an FAQ answer, “Do I even need an agency?”, and we are planning a problem-aware
            article for them (see keyword 1 below).
          </li>
        </ul>
        <P>
          We also fixed the trust gaps the test found: real example numbers in our sample report (labelled as an example), a source for every
          figure, faces on the team, and “Cancel anytime, 30 days&apos; notice” up front. That&apos;s why we use about 7% for warm social traffic, below
          the 11% simulated intent but above the 1–3% average for cold visits.
        </P>

        {/* PART 3 */}
        <H2 id="keywords" part="Part 3">
          The 5 keywords roofers type
        </H2>
        <P>
          Path B starts with a search. To find the right words, we asked an AI to think like our persona: “Act as Mike, owner of a 7-person
          residential roofing company in Dallas. What would you type into Google, or ask an AI, when looking for help getting more calls from
          Google? Give me 20 queries, from problem-aware to ready-to-buy.” Here are the 20 it gave us:
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
        <Note>Highlighted: the 5 we kept.</Note>

        <P>We kept 5, at least one per stage of the funnel, each tied to a page that answers it:</P>
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
          Next step: check monthly search volume and difficulty for these 5 in Ubersuggest and Semrush, and swap any keyword nobody searches for
          a close variant that people do search. Then we track, for each one, how many visits it brings and how many audit requests follow.
        </P>

        {/* Wrap-up */}
        <div className="mt-16 rounded-xl bg-navy p-8 text-white">
          <h2 className="font-display text-3xl font-bold uppercase">The short version</h2>
          <ul className="mt-4 space-y-2 text-white/85">
            <li>✓ Two entry paths, Facebook groups and search, one action: the free 15-minute audit.</li>
            <li>✓ Our quarter target: 10 audit requests and 2 clients, with every number next to its benchmark.</li>
            <li>✓ 5 keywords that cover the funnel, from “how to get more roofing leads” to “roofing marketing agency no contract”.</li>
          </ul>
          <p className="mt-6 text-white/80">Are you a roofer reading this? Then the funnel works. Here&apos;s the next step:</p>
          <Link
            href="/#contact"
            className="mt-4 inline-flex items-center justify-center rounded-md bg-orange px-6 py-4 font-display text-xl font-bold uppercase tracking-wide text-white hover:bg-orange-dark"
          >
            Get my free 15-min audit
          </Link>
        </div>

        <p className="mt-8 text-xs text-muted">
          Sources: our group social media strategy (persona, competitor audit of 3 agencies checked on 13 October 2026, interview with a Texas
          roofing owner, SMART goal and ROI), course conversion benchmarks, and a simulated review of our website by 100 AI-generated roofing
          owners (20 October 2026). Photo: Unsplash.
        </p>
      </main>

      <SiteFooter />
    </>
  );
}
