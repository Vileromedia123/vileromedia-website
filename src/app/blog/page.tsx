import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog | VileroMedia",
  description: "Straight talk about Google Ads, Local Services Ads and local SEO for residential roofing companies in the US.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 pb-20 pt-12 sm:px-6">
        <p className="font-display text-lg font-semibold uppercase tracking-widest text-orange">Blog</p>
        <h1 className="mt-2 font-display text-5xl font-bold uppercase leading-none text-navy sm:text-6xl">Straight talk for roofers</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">Google Ads, Local Services Ads and local SEO, in numbers, not jargon.</p>
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className="group flex h-full flex-col rounded-xl border border-navy/10 bg-white p-6 transition hover:border-orange hover:shadow-md"
              >
                <p className="font-display text-sm font-semibold uppercase tracking-widest text-orange">
                  {p.tag} · {p.readTime}
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold uppercase leading-tight text-navy group-hover:text-orange-dark">{p.title}</h2>
                <p className="mt-3 flex-1 text-muted">{p.excerpt}</p>
                <p className="mt-4 font-display text-lg font-bold uppercase text-navy">Read →</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
