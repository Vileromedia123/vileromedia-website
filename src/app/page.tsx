import Image from "next/image";
import ContactForm from "@/components/ContactForm";

// Free Unsplash photos (Unsplash License). Swap for our own crew photos when we have them.
const photo = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=70`;
const photos = {
  hero: photo("photo-1643225523483-e2c434191bba"), // person carrying shingles across a residential roof
  ads: photo("photo-1632759145351-1d592919f522"), // man standing on the roof of a house
  seo: photo("photo-1779941373840-a93f6e0d5db0"), // grey metal roof, white siding, dormer window
  pages: photo("photo-1633759593085-1eaeb724fc88"), // removing shingles from a residential roof
  about: photo("photo-1635424709961-f3a150459ad4"), // two men working on the roof of a house
};

const nav = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About us" },
];

const services = [
  {
    tag: "Start here",
    title: "Google Ads + Local Services Ads",
    img: photos.ads,
    alt: "Roofer standing on the roof of a house",
    body: "We set up and run your Google Ads and LSA so you show up when a homeowner in your service area searches “roof repair near me”. We cut keywords that bring clicks but no calls.",
    points: ["Call tracking on every ad", "Negative keywords from day one", "LSA profile, reviews and disputes handled"],
  },
  {
    tag: "Month 2+",
    title: "Local SEO",
    img: photos.seo,
    alt: "Metal roof and dormer window on a family house",
    body: "Your Google Business Profile, reviews and service-area pages, so you climb in Google Maps and stop paying for every single call.",
    points: ["Google Business Profile cleanup", "Review request system", "One page per city you serve"],
  },
  {
    tag: "When needed",
    title: "Landing pages that get calls",
    img: photos.pages,
    alt: "Roofer removing old shingles from a residential roof",
    body: "Ads only work if the page they land on makes a homeowner pick up the phone. We build or fix that page: fast on mobile, phone number one tap away.",
    points: ["Loads in under 2 seconds on 4G", "Tap-to-call and short form", "Photos of your real crews"],
  },
];

const plans = [
  {
    name: "Starter",
    fee: "$600",
    for: "One service area, getting Google going",
    items: [
      "Local Services Ads setup and management",
      "Google Business Profile cleanup",
      "Call tracking",
      "One-page monthly report",
    ],
    featured: false,
  },
  {
    name: "Growth",
    fee: "$1,200",
    for: "Up to 3 service areas, steady calls all year",
    items: [
      "Everything in Starter",
      "Google Ads (Search) management",
      "Landing page fixes included",
      "Monthly 20-minute call with your account lead",
    ],
    featured: true,
  },
];

const work = [
  {
    kind: "Sample report",
    title: "The one-page monthly report",
    body: "Calls, booked inspections, cost per call, ad spend. Four numbers you can show your spouse or your bookkeeper. Nothing about impressions.",
    rows: [
      ["Calls from Google", "—"],
      ["Booked inspections", "—"],
      ["Ad spend", "—"],
      ["Cost per call", "—"],
    ],
  },
  {
    kind: "Sample landing page",
    title: "Storm-season roof inspection page",
    body: "Built for hail season: big phone button, insurance-claim FAQ, crew photos, short form. Made to turn a stressed homeowner into a booked inspection.",
    rows: [
      ["Load time on 4G", "< 2 s"],
      ["Tap-to-call above the fold", "Yes"],
      ["Form fields", "3"],
      ["Stock photos", "0"],
    ],
  },
  {
    kind: "Sample audit",
    title: "Where your ad money goes",
    body: "What we show in the free 15-minute audit: your search terms, which ones brought calls, which ones only burned budget, and what we would cut first.",
    rows: [
      ["Duration", "15 min"],
      ["Credit card", "No"],
      ["Contract", "No"],
      ["Jargon", "None"],
    ],
  },
];

const team: { name: string; role: string; initials: string; photo?: string }[] = [
  { name: "Carl Fleury", role: "Client strategy", initials: "CF", photo: "/team/carl-fleury.jpg" },
  { name: "Laura Jankowiak", role: "Google Ads", initials: "LJ", photo: "/team/laura-jankowiak.jpg" },
  { name: "Magnus Monstad Tveraaen", role: "Local Services Ads", initials: "MT", photo: "/team/magnus-monstad-tveraaen.jpg" },
  { name: "Natasha Pauls", role: "Local SEO", initials: "NP", photo: "/team/natasha-pauls.jpg" },
  { name: "Ricardo Tannous", role: "Landing pages", initials: "RT" },
  { name: "Sami Hakkou", role: "Tracking & reporting", initials: "SH", photo: "/team/sami-hakkou.jpg" },
];

const faqs = [
  {
    q: "Is there a contract?",
    a: "No. Month-to-month. Cancel anytime with 30 days’ notice. If the calls stop making sense for you, you leave.",
  },
  {
    q: "Is ad spend included in the fee?",
    a: "No, and that’s on purpose. You pay Google directly for your ads, from your own account. Our fee is our fee. You always see both numbers separately.",
  },
  {
    q: "Who owns the Google Ads account?",
    a: "You do. If you leave, the account, the data and the history stay with you.",
  },
  {
    q: "Do you promise a number of leads?",
    a: "No. Anyone who promises “10x your leads” before seeing your market is guessing. In the audit we look at your area and tell you what’s realistic.",
  },
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2" aria-label="VileroMedia, back to top">
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="6" fill="#F26B1D" />
        <path d="M6 18 16 9l10 9" fill="none" stroke="#0F1B2D" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M10 18v6h12v-6" fill="none" stroke="#0F1B2D" strokeWidth="3" strokeLinejoin="round" />
      </svg>
      <span className="font-display text-2xl font-bold uppercase tracking-wide text-white">
        Vilero<span className="text-orange">Media</span>
      </span>
    </a>
  );
}

function Check() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-green" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
    </svg>
  );
}

function SectionTitle({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className="max-w-2xl">
      <p className="font-display text-lg font-semibold uppercase tracking-widest text-orange">{eyebrow}</p>
      <h2 className={`mt-2 font-display text-4xl font-bold uppercase leading-none sm:text-5xl ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "VileroMedia",
    url: "https://vileromedia.com",
    description:
      "Google Ads, Local Services Ads and Local SEO for small residential roofing companies in the US.",
    areaServed: "US",
    priceRange: "$600–$1,200 per month",
    email: "hello@vileromedia.com",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">
        Skip to content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Logo />
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex gap-8">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm font-medium text-white/80 hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#contact"
            className="rounded-md bg-orange px-4 py-2 font-display text-lg font-bold uppercase tracking-wide text-white hover:bg-orange-dark"
          >
            Free audit
          </a>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="relative overflow-hidden bg-navy text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, #fff 0 2px, transparent 2px 28px)",
            }}
          />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.1fr_1fr] md:items-center md:py-20">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-orange/40 bg-orange/10 px-3 py-1 text-sm font-medium text-orange">
                <span aria-hidden="true">●</span> Digital marketing agency for US roofing companies
              </p>
              <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
                We get roofing companies
                <span className="block text-orange">more calls from Google.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/85">
                VileroMedia is a marketing agency that only works with <strong className="text-white">residential roofers in the US</strong> doing
                $500K–$3M a year. We run your Google Ads and Local Services Ads, then your Local SEO, and we build the pages that turn
                that traffic into booked inspections.
              </p>
              <p className="mt-4 font-display text-2xl font-bold uppercase text-white/90">
                Clicks don&apos;t pay the crew. <span className="text-orange">Booked inspections do.</span>
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md bg-orange px-6 py-4 font-display text-xl font-bold uppercase tracking-wide text-white hover:bg-orange-dark"
                >
                  Get a free 15-min Google Ads audit
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-md border-2 border-white/30 px-6 py-4 font-display text-xl font-bold uppercase tracking-wide text-white hover:border-white"
                >
                  Who we are
                </a>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
                <li>✓ Prices on the page</li>
                <li>✓ Month-to-month, no contract</li>
                <li>✓ You own your ad account</li>
              </ul>
            </div>

            {/* Photo + money card */}
            <div className="relative pb-24 sm:pb-20">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 shadow-2xl md:aspect-[4/5]">
                <Image
                  src={photos.hero}
                  alt="Roofer carrying a bundle of shingles across the roof of a family house"
                  fill
                  priority
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              </div>
              <div className="absolute inset-x-4 bottom-0 rounded-xl border border-white/10 bg-navy-2/95 p-5 shadow-2xl backdrop-blur sm:inset-x-8">
                <p className="font-display text-base font-semibold uppercase tracking-widest text-white/60">What one call really costs</p>
                <div className="mt-3 flex items-end justify-between gap-4 text-sm text-white/70">
                  <p>
                    $50 per click × 20% of clicks that call
                    <span className="block text-xs text-white/50">Example from sector figures. The audit gives you yours.</span>
                  </p>
                  <p className="font-display text-5xl font-bold leading-none text-green-light">$250</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section aria-labelledby="mission-title" className="border-b border-navy/10 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <p id="mission-title" className="font-display text-lg font-semibold uppercase tracking-widest text-orange">Our mission</p>
              <blockquote className="mt-3 font-display text-3xl font-bold uppercase leading-tight text-navy sm:text-4xl">
                “We help small residential roofing companies in the US get more calls and booked inspections from Google, month-to-month and
                with clear pricing.”
              </blockquote>
            </div>
            <dl className="grid grid-cols-3 gap-4 text-center">
              {[
                ["1", "niche: residential roofing"],
                ["0", "long contracts"],
                ["15 min", "free audit, no card"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-lg bg-paper p-4">
                  <dt className="sr-only">{l}</dt>
                  <dd className="font-display text-4xl font-bold text-green">{n}</dd>
                  <dd className="mt-1 text-sm text-muted">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionTitle eyebrow="Services" title="One job first: more calls from Google" />
          <p className="mt-4 max-w-2xl text-lg text-muted">
            We don&apos;t sell ten services. We start with the one that brings calls fastest, then add the rest when it makes sense for your numbers.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <article key={s.title} className="flex flex-col overflow-hidden rounded-lg border border-navy/10 bg-white">
                <div className="relative aspect-[16/10]">
                  <Image src={s.img} alt={s.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                <span className="self-start rounded bg-navy px-2 py-1 font-display text-sm font-semibold uppercase tracking-wider text-white">
                  {s.tag}
                </span>
                <h3 className="mt-4 font-display text-3xl font-bold uppercase leading-tight text-navy">{s.title}</h3>
                <p className="mt-3 text-muted">{s.body}</p>
                <ul className="mt-5 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2 text-navy">
                      <Check />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="bg-navy py-20 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle eyebrow="Pricing" title="Our fee. Your ad spend. Two separate numbers." light />
            <p className="mt-4 max-w-2xl text-lg text-white/70">
              You pay Google directly for your ads, from your own account. You pay us a flat monthly fee to run them. No percentage of ad spend, no setup fee, no contract.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {plans.map((p) => (
                <article
                  key={p.name}
                  className={`relative flex flex-col rounded-lg p-6 sm:p-8 ${
                    p.featured ? "bg-white text-navy ring-4 ring-orange" : "bg-navy-2 text-white"
                  }`}
                >
                  {p.featured && (
                    <span className="absolute -top-3 left-6 rounded bg-orange px-2 py-1 font-display text-sm font-bold uppercase tracking-wider text-white">
                      Most roofers pick this
                    </span>
                  )}
                  <h3 className="font-display text-3xl font-bold uppercase">{p.name}</h3>
                  <p className={`mt-1 ${p.featured ? "text-muted" : "text-white/60"}`}>{p.for}</p>
                  <p className="mt-6">
                    <span className="font-display text-6xl font-bold">{p.fee}</span>
                    <span className={p.featured ? "text-muted" : "text-white/60"}> /month</span>
                  </p>
                  <p className={`text-sm ${p.featured ? "text-muted" : "text-white/60"}`}>+ your ad spend, paid to Google</p>
                  <ul className="mt-6 space-y-2">
                    {p.items.map((i) => (
                      <li key={i} className="flex gap-2">
                        <Check />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`mt-8 inline-flex items-center justify-center rounded-md px-5 py-3 font-display text-lg font-bold uppercase tracking-wide ${
                      p.featured ? "bg-orange text-white hover:bg-orange-dark" : "border-2 border-white/30 hover:border-white"
                    }`}
                  >
                    Start with a free audit
                  </a>
                </article>
              ))}
              <article className="flex flex-col rounded-lg border-2 border-dashed border-white/20 p-6 sm:p-8">
                <h3 className="font-display text-3xl font-bold uppercase">Add-on: Local SEO</h3>
                <p className="mt-1 text-white/60">When Maps should start bringing free calls</p>
                <p className="mt-6">
                  <span className="font-display text-6xl font-bold">+$400</span>
                  <span className="text-white/60"> /month</span>
                </p>
                <ul className="mt-6 space-y-2">
                  {["Google Business Profile posts and photos", "Review request system", "Service-area pages"].map((i) => (
                    <li key={i} className="flex gap-2">
                      <Check />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-6 text-sm text-white/60">
                  How much should you spend on ads? We&apos;ll give you a number for your area in the audit, before you sign anything.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Work / Portfolio */}
        <section id="work" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionTitle eyebrow="Our work" title="What you actually get" />
          <p className="mt-4 max-w-2xl text-lg text-muted">
            We&apos;re a new agency, so we won&apos;t show you made-up client results. Here is exactly what we deliver. Real case studies go here, with our clients&apos; permission, as soon as we have them.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {work.map((w) => (
              <article key={w.title} className="flex flex-col overflow-hidden rounded-lg border border-navy/10 bg-white">
                <div className="bg-navy p-5 text-white">
                  <p className="font-display text-sm font-semibold uppercase tracking-widest text-orange">{w.kind}</p>
                  <dl className="mt-4 space-y-2">
                    {w.rows.map(([k, v]) => (
                      <div key={k} className="flex justify-between border-b border-white/10 pb-2 text-sm">
                        <dt className="text-white/70">{k}</dt>
                        <dd className="font-display text-lg font-bold text-green-light">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold uppercase text-navy">{w.title}</h3>
                  <p className="mt-2 text-muted">{w.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About us */}
        <section id="about" className="border-y border-navy/10 bg-white py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <SectionTitle eyebrow="About us" title="Why we started VileroMedia" />
                <div className="mt-6 space-y-4 text-lg text-muted">
                  <p>
                    We looked at the agencies that sell marketing to roofers. Most of them chase companies doing $1M to $15M a year. Most hide
                    their prices behind a “book a call” button. The one that shows its prices wants a yearly contract. And their reports talk
                    about clicks and impressions.
                  </p>
                  <p>
                    Then we asked a roofing owner in Texas about his last agency. He paid every month for a year, got reports full of clicks, and
                    never found out how many roofs it actually brought in. He was stuck in a 12-month contract and just waited for it to end.
                  </p>
                  <p className="font-semibold text-navy">
                    Nobody was building for the smaller roofer, the owner who still does the estimates himself and answers the phone between two
                    jobs. So we built the agency we would want to hire.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={photos.about}
                  alt="Two roofers working on the roof of a house"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Transparency", "Prices and terms out in the open, before you talk to anyone."],
                ["Honesty", "If something isn't working, we tell you, and we say what we'll change."],
                ["Simplicity", "One-page reports. Four numbers. No jargon."],
                ["Results", "We count calls and booked inspections, not likes."],
              ].map(([t, d]) => (
                <li key={t} className="rounded-lg border border-navy/10 bg-paper p-5">
                  <p className="font-display text-2xl font-bold uppercase text-navy">{t}</p>
                  <p className="mt-1 text-muted">{d}</p>
                </li>
              ))}
            </ul>

            <h3 className="mt-16 font-display text-3xl font-bold uppercase text-navy">The team</h3>
            <p className="mt-2 max-w-2xl text-muted">
              Six people, one niche: residential roofing in the US. Your account lead answers within 24 hours on weekdays.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {team.map((m) => (
                <li key={m.name} className="text-center">
                  {m.photo ? (
                    <div className="relative mx-auto aspect-square w-full max-w-36 overflow-hidden rounded-lg bg-navy">
                      <Image src={m.photo} alt={`Portrait of ${m.name}`} fill sizes="144px" className="object-cover" />
                    </div>
                  ) : (
                    <div
                      aria-hidden="true"
                      className="mx-auto flex aspect-square w-full max-w-36 items-center justify-center rounded-lg bg-navy font-display text-4xl font-bold text-orange"
                    >
                      {m.initials}
                    </div>
                  )}
                  <p className="mt-3 font-semibold text-navy">{m.name}</p>
                  <p className="text-sm text-muted">{m.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionTitle eyebrow="Straight answers" title="Questions roofers ask us" />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-lg border border-navy/10 bg-white p-5 open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-2xl font-bold uppercase text-navy">
                  {f.q}
                  <span aria-hidden="true" className="text-orange transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-navy-3 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[1fr_1.3fr]">
            <div className="text-white">
              <SectionTitle eyebrow="Free audit" title="15 minutes. Where your ad money goes." light />
              <p className="mt-4 text-lg text-white/80">
                We look at your Google Ads (or your market, if you&apos;re not running ads yet) and show you, in plain numbers, what&apos;s bringing calls and what&apos;s burning budget.
              </p>
              <ul className="mt-8 space-y-3 text-white/90">
                {["No credit card", "No contract to sign", "No “10x your leads” pitch", "You keep the findings, even if you never hire us"].map((i) => (
                  <li key={i} className="flex gap-2">
                    <Check />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="bg-navy py-10 text-white/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <Logo />
          <p>Google Ads, LSA and Local SEO for US residential roofers. Month-to-month. Cancel anytime.</p>
          <p>
            <a href="mailto:hello@vileromedia.com" className="hover:text-white">hello@vileromedia.com</a>
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-6xl px-4 text-xs text-white/40 sm:px-6">
          © {new Date().getFullYear()} VileroMedia. Student project, TBS Education.
        </p>
      </footer>
    </>
  );
}
