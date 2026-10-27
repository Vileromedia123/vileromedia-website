import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { SITE_URL } from "@/lib/site";

const PATH = "/blog/how-to-get-more-qualified-roofing-leads";
const TITLE = "How to Get More Qualified Roofing Leads (Not Just Clicks)";
const DESCRIPTION =
  "How to get more qualified roofing leads: win local search, use paid ads with limits and track every enquiry to a signed job. Free 15-minute audit.";
const PUBLISHED = "2026-10-27";

export const metadata: Metadata = {
  title: `${TITLE} | VileroMedia`,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { type: "article", title: TITLE, description: DESCRIPTION, url: PATH },
};

/* ---------- small building blocks ---------- */

function H2({ id, part, children }: { id: string; part?: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24 pt-16">
      {part && <p className="font-display text-sm font-semibold uppercase tracking-widest text-orange">{part}</p>}
      <h2 className="mt-1 font-display text-4xl font-bold uppercase leading-none text-navy sm:text-5xl">{children}</h2>
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-lg leading-relaxed text-ink/85">{children}</p>;
}

function List({ children }: { children: React.ReactNode }) {
  return <ul className="mt-4 list-disc space-y-2 pl-6 text-lg text-ink/85">{children}</ul>;
}

function A({ href, children }: { href: string; children: React.ReactNode }) {
  const cls = "font-medium text-orange-dark underline underline-offset-2 hover:text-navy";
  return href.startsWith("http") ? (
    <a href={href} rel="noopener" className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/* ---------- data ---------- */

const GOOGLE_RANKING = "https://support.google.com/business/answer/7091?hl=en";
const GOOGLE_LSA = "https://support.google.com/localservices/answer/7195435?hl=en";
const ELEVARUS = "https://elevarus.com/google-local-services-ads-roofers/";

const toc = [
  ["#qualified", "What counts as a qualified roofing lead?"],
  ["#search", "Show up where homeowners search"],
  ["#convert", "Make it easy to say yes"],
  ["#paid", "Use paid search and Local Services Ads with limits"],
  ["#track", "Follow up fast and track every lead to a signed job"],
  ["#agency", "What to avoid when hiring a roofing marketing agency"],
  ["#faq", "Frequently asked questions"],
];

const tracking = [
  ["Enquiry", "Date, source (Google Maps, search ad, Local Services Ad, referral) and contact method", "Shows which channels send enquiries"],
  ["Qualified?", "Yes or no, and the reason (out of area, duplicate, small repair, just shopping)", "Separates real leads from noise"],
  ["Inspection", "Booked date, who attended, outcome", "Your real conversion point"],
  ["Estimate", "Amount and date sent", "Shows pipeline value"],
  ["Signed job", "Job value, date and original source", "Shows revenue per channel"],
];

const faqs = [
  {
    q: "What is a good lead for a roofing company?",
    a: "A good roofing lead is a homeowner inside your service area who needs a real repair or replacement, has a realistic budget, is ready to book an inspection and answers the phone. Duplicate enquiries, out-of-area contacts, people who are only shopping around and requests for jobs you do not offer are not good leads.",
  },
  {
    q: "How many roofing leads should I get per month?",
    a: "There is no single number, because it depends on your service area, the season and your budget. A better question is how many leads became booked inspections and signed jobs, and what each one cost.",
  },
  {
    q: "Are Google Local Services Ads worth it for roofers?",
    a: "They can be, because you pay for valid leads rather than clicks and Google may credit invalid or duplicate leads after review. They are only worth it if you track results to booked jobs and set your job types, service area and hours, since a lead is a contact and not a job.",
  },
  {
    q: "How can I get more roofing leads for free?",
    a: "Complete your Google Business Profile, ask every happy customer for a Google review and reply to the reviews you get. Post photos of finished jobs, and ask past customers for referrals. One roofing owner we spoke with said referrals are the source he trusts most, but that they arrive unevenly from month to month.",
  },
  {
    q: "Should I buy shared or exclusive roofing leads?",
    a: "Exclusive leads go only to you, while shared leads are sold to several contractors at once, so you compete on speed and price. Whichever you choose, check how many leads turn into booked inspections before you spend more.",
  },
  {
    q: "How long does local SEO take for a roofing company?",
    a: "Local SEO builds over months, not days, because reviews, profile details and website pages all take time to add up. Many roofers run paid ads or Local Services Ads while it builds.",
  },
];

/* ---------- page ---------- */

export default function QualifiedLeadsArticle() {
  const url = `${SITE_URL}${PATH}`;
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description: DESCRIPTION,
        datePublished: PUBLISHED,
        dateModified: PUBLISHED,
        author: { "@type": "Person", name: "Magnus Tveraaen" },
        publisher: { "@type": "Organization", name: "VileroMedia" },
        mainEntityOfPage: url,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <SiteHeader />

      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-3xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
          <Link href="/blog" className="text-sm text-white/70 hover:text-white">
            ← Blog
          </Link>
          <p className="mt-6 font-display text-lg font-semibold uppercase tracking-widest text-orange">Guide · 7 min read</p>
          <h1 className="mt-2 font-display text-5xl font-bold uppercase leading-[0.95] sm:text-6xl">
            How do you get more qualified roofing leads?
          </h1>
          <div className="mt-8 rounded-xl border-l-4 border-orange bg-white p-6 text-ink shadow-lg">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-orange-dark">Short answer</p>
            <p className="mt-2 text-lg leading-relaxed">
              To get more qualified roofing leads, show up where homeowners search when they need a roof: Google Search, Google Maps and your
              Google Business Profile. Then make it easy for the right homeowners to contact you, with a clear estimate request, a visible phone
              number and reviews that build trust. Finally, track every enquiry through to a booked inspection and a signed job, so you spend
              more on the sources that bring jobs and less on the ones that only bring clicks.
            </p>
          </div>
          <p className="mt-5 text-sm text-white/70">
            By Magnus Tveraaen, Founder and Local Services Ads specialist at VileroMedia · Published{" "}
            <time dateTime={PUBLISHED}>27 October 2026</time> · Last reviewed <time dateTime={PUBLISHED}>27 October 2026</time>
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        {/* Table of contents */}
        <nav aria-label="On this page" className="mt-12 rounded-xl border border-navy/10 bg-white p-6">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-orange">On this page</p>
          <ol className="mt-3 list-decimal space-y-1.5 pl-6 text-ink/85">
            {toc.map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-orange-dark hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <H2 id="qualified">What counts as a qualified roofing lead?</H2>
        <div className="mt-6 rounded-xl border border-orange/30 bg-orange/5 p-6 text-lg leading-relaxed text-ink/85">
          <strong className="text-orange-dark">A qualified roofing lead</strong> is a homeowner inside your service area who needs a real repair
          or replacement, has a realistic budget, is ready to book an inspection and will answer your call. Duplicate enquiries, out-of-area
          contacts, people only shopping around and requests for jobs you do not offer are not qualified leads.
        </div>
        <P>
          This definition comes from a conversation we had in October 2026 with a roofing company owner in Texas (anonymised). He described a
          good lead in almost exactly these terms, and listed the same things as a waste of his time. That is why we judge every lead source by
          qualified leads, not by raw enquiries.
        </P>

        <H2 id="search" part="Step 1">
          Show up where homeowners search
        </H2>
        <P>
          The same owner said Google is probably the most important platform for his business, because homeowners search there for roof repairs
          and replacements. According to <A href={GOOGLE_RANKING}>Google&apos;s own help page</A>, local results are ranked mainly on three
          factors: relevance, distance and prominence. Google also says more reviews and positive ratings can help your local ranking, and that
          there is no way to pay for a better local ranking.
        </P>
        <List>
          <li>
            <strong>Complete your Google Business Profile:</strong> services, service area, opening hours, phone number and photos of real jobs.
          </li>
          <li>
            <strong>Collect and answer reviews:</strong> ask every happy customer for a Google review and reply to each one.
          </li>
          <li>
            <strong>Build pages that match searches:</strong> one page per service and per area you cover, such as roof repair or roof
            replacement in your city. See our <A href="/#services">Local SEO service</A>.
          </li>
        </List>

        <H2 id="convert" part="Step 2">
          Make it easy to say yes
        </H2>
        <P>Traffic only helps if visitors contact you. Give each page one clear action: call or request an estimate.</P>
        <List>
          <li>Show a tap-to-call phone number at the top of every page on mobile.</li>
          <li>Keep the estimate form short: name, phone number, property address and what is wrong with the roof.</li>
          <li>State your service area, so out-of-area homeowners do not contact you.</li>
          <li>Show real project photos, reviews, and your licence and insurance details where your state requires them.</li>
        </List>
        <P>
          Our <A href="/#services">roofing website and landing page service</A> is built around this one-action approach.
        </P>

        <H2 id="paid" part="Step 3">
          Use paid search and Local Services Ads with limits
        </H2>
        <P>
          According to <A href={GOOGLE_LSA}>Google&apos;s Local Services Ads help</A>, advertisers are charged for valid leads, not for
          impressions or clicks. A lead can be a phone call, a message, a voicemail or, in the United States and Canada, a booking request. You
          set a weekly budget and a bidding mode, and Google may credit invalid, duplicate or low-quality leads after reviewing them.
        </P>
        <P>A paid lead is a contact, not a booked job. To keep spend under control:</P>
        <List>
          <li>Set the job types, service area and business hours you actually want.</li>
          <li>
            In Google Search ads, add negative keywords so that searches from job seekers or product shoppers do not cost you money.
          </li>
          <li>
            Measure cost per booked inspection and cost per signed job, not only cost per lead. An{" "}
            <A href={ELEVARUS}>industry analysis from July 2026</A> makes the same recommendation, by job type.
          </li>
        </List>
        <P>
          See how we run <A href="/#services">Google Ads for roofers</A>, and how much to spend in our{" "}
          <A href="/guides/google-ads-budget-for-roofers">Google Ads budget guide</A>.
        </P>

        <H2 id="track" part="Step 4">
          Follow up fast and track every lead to a signed job
        </H2>
        <P>
          A lead that waits is a lead that calls the next roofer. Answer calls quickly, return missed calls the same day, and record what happens
          to every enquiry:
        </P>
        <div className="mt-6 overflow-x-auto rounded-xl border border-navy/10 bg-white">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="bg-navy text-white">
              <tr>
                <th scope="col" className="p-3 font-display text-base uppercase tracking-wide">Stage</th>
                <th scope="col" className="p-3 font-display text-base uppercase tracking-wide">What to record</th>
                <th scope="col" className="p-3 font-display text-base uppercase tracking-wide">Why it matters</th>
              </tr>
            </thead>
            <tbody>
              {tracking.map(([stage, record, why]) => (
                <tr key={stage} className="border-t border-navy/10 align-top">
                  <th scope="row" className="p-3 font-semibold text-navy">{stage}</th>
                  <td className="p-3 text-ink/85">{record}</td>
                  <td className="p-3 text-muted">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P>
          Ask every caller how they heard about you and write the answer down. Use a separate tracked phone number or link for each source if
          you can.
        </P>

        <H2 id="agency">What to avoid when hiring a roofing marketing agency</H2>
        <P>
          The owner we spoke with had tried an agency before. It sent reports about clicks and website traffic, but not enough actual roofing
          jobs. He named three things that would be an instant no:
        </P>
        <List>
          <li>Guaranteeing hundreds of leads without understanding your business.</li>
          <li>Confusing contracts.</li>
          <li>Pressure to sign a long-term agreement before the agency has proven its value.</li>
        </List>
        <P>
          A simple test for any agency: ask how many of last month&apos;s enquiries became booked inspections. If the answer is a number of
          clicks, keep looking.
        </P>

        <H2 id="faq">Frequently asked questions</H2>
        <div className="mt-6 space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-lg border border-navy/10 bg-white p-5 open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-2xl font-bold uppercase text-navy">
                <h3>{f.q}</h3>
                <span aria-hidden="true" className="text-orange transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-lg leading-relaxed text-ink/85">{f.a}</p>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-xl bg-navy p-8 text-white">
          <h2 className="font-display text-3xl font-bold uppercase">See where your roofing leads go</h2>
          <p className="mt-3 text-white/80">
            Book a free 15-minute audit. We look at where your enquiries come from, how many are qualified and where you may be losing them. You
            keep the findings. No credit card, no contract, no pressure.
          </p>
          <Link
            href="/#contact"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-orange px-6 py-4 font-display text-xl font-bold uppercase tracking-wide text-white hover:bg-orange-dark"
          >
            Get my free 15-min audit
          </Link>
        </div>

        {/* Author */}
        <div className="mt-10 flex items-start gap-4 rounded-xl border border-navy/10 bg-white p-6">
          <div aria-hidden="true" className="grid size-12 flex-none place-items-center rounded-full bg-navy font-display text-xl font-bold text-white">
            M
          </div>
          <div className="text-ink/85">
            <p>
              <strong className="text-navy">Magnus Tveraaen</strong>, Founder and Local Services Ads specialist at VileroMedia
            </p>
            <p className="mt-2 text-sm text-muted">
              VileroMedia is a digital marketing agency for residential roofing companies in the United States. This guide was drafted with AI
              assistance, then checked against Google&apos;s help pages and a first-hand conversation with a roofing company owner.
            </p>
          </div>
        </div>

        {/* Sources */}
        <H2 id="sources">Sources</H2>
        <ul className="mt-4 space-y-3 text-sm text-muted">
          <li>
            <A href={GOOGLE_RANKING}>Google Business Profile Help: How to improve your local ranking on Google</A>. Local ranking is based mainly
            on relevance, distance and prominence; reviews help; you cannot pay for a better local ranking.
          </li>
          <li>
            <A href={GOOGLE_LSA}>Google Local Services Ads Help: How leads work</A>. Advertisers pay for valid leads, not clicks; lead types,
            budgets and credits for invalid or duplicate leads.
          </li>
          <li>
            <A href={ELEVARUS}>Elevarus: Google Local Services Ads for roofers (published 3 July 2026, updated 5 September 2026)</A>. Industry
            analysis recommending that roofers track cost per booked job by job type, not just cost per lead.
          </li>
          <li>
            First-hand: conversation with a roofing company owner in Texas, October 2026 (anonymised). Source of the qualified-lead definition,
            the agency red flags and the point about referrals.
          </li>
        </ul>
        <p className="mt-8 text-xs text-muted">This page is general information, not legal or financial advice.</p>
      </main>

      <SiteFooter />
    </>
  );
}
