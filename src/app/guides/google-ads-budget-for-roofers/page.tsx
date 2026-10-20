import type { Metadata } from "next";
import Link from "next/link";
import { EMAIL, HOURS } from "@/lib/site";

export const metadata: Metadata = {
  title: "How Much Should a Roofer Spend on Google Ads? | VileroMedia",
  description:
    "A simple way for small residential roofing companies to set a Google Ads budget: start from the jobs you want, not from a number an agency gives you. With the math.",
  alternates: { canonical: "/guides/google-ads-budget-for-roofers" },
};

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <p className="font-display text-sm font-semibold uppercase tracking-widest text-orange">Step {n}</p>
      <h2 className="mt-1 font-display text-3xl font-bold uppercase leading-tight text-navy sm:text-4xl">{title}</h2>
      <div className="mt-4 space-y-4 text-lg leading-relaxed text-ink/85">{children}</div>
    </section>
  );
}

function MathRow({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className={`flex items-baseline justify-between gap-4 border-b border-white/10 py-3 ${strong ? "text-white" : "text-white/75"}`}>
      <dt>{label}</dt>
      <dd className={`font-display font-bold ${strong ? "text-4xl text-green-light" : "text-2xl"}`}>{value}</dd>
    </div>
  );
}

export default function Guide() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How much should a roofer spend on Google Ads?",
    author: { "@type": "Organization", name: "VileroMedia" },
    publisher: { "@type": "Organization", name: "VileroMedia" },
    datePublished: "2026-10-20",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="font-display text-2xl font-bold uppercase tracking-wide text-white">
            Vilero<span className="text-orange">Media</span>
          </Link>
          <Link
            href="/#contact"
            className="rounded-md bg-orange px-4 py-2 font-display text-lg font-bold uppercase tracking-wide text-white hover:bg-orange-dark"
          >
            Free audit
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 pb-20 pt-12 sm:px-6">
        <Link href="/" className="text-sm text-muted hover:text-navy">
          ← Back to VileroMedia
        </Link>
        <p className="mt-8 font-display text-lg font-semibold uppercase tracking-widest text-orange">Guide · 6 min read</p>
        <h1 className="mt-2 font-display text-5xl font-bold uppercase leading-[0.95] text-navy sm:text-6xl">
          How much should a roofer spend on Google Ads?
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-muted">
          Most agencies answer with a number before they know anything about your company. Here is a better way: start from the jobs you
          want, use your own numbers, and work backwards. You need a pen, your phone and five minutes.
        </p>

        <Step n={1} title="Start from jobs, not from a budget">
          <p>
            “Spend $2,000 a month” means nothing on its own. The real question is: how many extra roofing jobs do you want from Google each
            month, outside referrals and storm work? Pick a number you can actually handle with your crews. For a small company, 2 to 5
            extra jobs a month is a lot.
          </p>
        </Step>

        <Step n={2} title="Write down three of your own numbers">
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Booking rate:</strong> out of 10 people who call you, how many book an inspection?
            </li>
            <li>
              <strong>Close rate:</strong> out of 10 inspections, how many sign?
            </li>
            <li>
              <strong>Average job value:</strong> what a typical signed job is worth to you.
            </li>
          </ul>
          <p>If you don&apos;t know them exactly, a rough guess from last year is fine. You&apos;ll replace them with real numbers after a month of call tracking.</p>
        </Step>

        <Step n={3} title="Do the math backwards">
          <p>Jobs you want ÷ close rate ÷ booking rate = calls you need. Calls you need × cost per call = monthly ad budget.</p>
          <div className="rounded-xl bg-navy p-6 text-white">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-white/60">Worked example · illustrative, use your own numbers</p>
            <dl className="mt-3">
              <MathRow label="Jobs you want from Google" value="4" />
              <MathRow label="Close rate (inspections that sign)" value="40%" />
              <MathRow label="Booking rate (calls that book)" value="60%" />
              <MathRow label="Calls needed: 4 ÷ 0.4 ÷ 0.6" value="≈ 17" />
              <MathRow label="Cost per call: $50 a click × 20% of clicks that call" value="$250" />
              <MathRow label="Monthly ad budget: 17 × $250" value="≈ $4,250" strong />
            </dl>
            <p className="mt-4 text-xs text-white/50">
              Cost-per-click and click-to-call figures from CinchLocal, “The Cost of Invisibility”. Real costs depend a lot on your city and
              season.
            </p>
          </div>
          <p>
            Now compare that budget with what 4 jobs bring you. If 4 jobs are worth many times the ad spend, Google is worth testing. If they
            barely cover it, fix your booking or close rate first. More ads won&apos;t solve that.
          </p>
        </Step>

        <Step n={4} title="Lower your cost per call before raising the budget">
          <p>The cheapest call is the one you stop wasting money on. Three things change your cost per call more than any budget:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Negative keywords.</strong> Block searches like “roofing jobs”, “roofing salary” or “DIY shingle repair”. They click,
              they never hire.
            </li>
            <li>
              <strong>Service area.</strong> Only show ads where your crews actually go. A call 90 minutes away is a wasted call.
            </li>
            <li>
              <strong>The page after the click.</strong> Phone number one tap away, real crew photos, a 3-field form. A slow, generic page
              turns paid clicks into nothing.
            </li>
          </ul>
        </Step>

        <Step n={5} title="Plan for the seasons">
          <p>
            Demand for roof work moves with the weather. Winter is slower in most of the US, storms bring spikes. Don&apos;t keep the same
            budget all year: spend more when homeowners search, less when they don&apos;t, and use the quiet months to fix your pages and
            reviews.
          </p>
        </Step>

        <Step n={6} title="Test for 60 to 90 days, then decide">
          <p>
            One month is too short to judge, especially with inspections that sign weeks later. Run a fixed test budget for 60 to 90 days, track
            every call, then compare cost per signed job with your job value. Keep, cut or grow based on that, not on clicks.
          </p>
        </Step>

        <section className="mt-12 rounded-xl border border-navy/10 bg-white p-6">
          <h2 className="font-display text-2xl font-bold uppercase text-navy">Red flags when an agency gives you a budget</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-lg text-ink/85">
            <li>They promise a number of leads before looking at your market.</li>
            <li>Their fee is a percentage of your ad spend, so they earn more when you spend more.</li>
            <li>They report clicks and impressions, not calls and booked inspections.</li>
            <li>The Google Ads account is in their name, not yours.</li>
            <li>You need a 12-month contract to start.</li>
          </ul>
        </section>

        <section className="mt-12 rounded-xl bg-navy p-8 text-white">
          <h2 className="font-display text-3xl font-bold uppercase">Want us to run your numbers?</h2>
          <p className="mt-3 text-white/80">
            In the free 15-minute audit we do this math with your real numbers and your service area. No credit card, no contract. We answer{" "}
            {HOURS}.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-md bg-orange px-6 py-4 font-display text-xl font-bold uppercase tracking-wide text-white hover:bg-orange-dark"
            >
              Get my free audit
            </Link>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center rounded-md border-2 border-white/30 px-6 py-4 font-display text-xl font-bold uppercase tracking-wide hover:border-white"
            >
              Email us
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-navy py-8 text-sm text-white/50">
        <p className="mx-auto max-w-3xl px-4 sm:px-6">© {new Date().getFullYear()} VileroMedia. All rights reserved.</p>
      </footer>
    </>
  );
}
