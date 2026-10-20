import Link from "next/link";
import Socials from "@/components/Socials";
import { EMAIL } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="font-display text-2xl font-bold uppercase tracking-wide text-white">
          Vilero<span className="text-orange">Media</span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-5">
          <Link href="/blog" className="hidden text-sm font-medium text-white/80 hover:text-white sm:inline">
            Blog
          </Link>
          <Link
            href="/#contact"
            className="rounded-md bg-orange px-4 py-2 font-display text-lg font-bold uppercase tracking-wide text-white hover:bg-orange-dark"
          >
            Free audit
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy py-10 text-sm text-white/60">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <Link href="/" className="font-display text-xl font-bold uppercase tracking-wide text-white">
            Vilero<span className="text-orange">Media</span>
          </Link>
          <p className="mt-2">
            <a href={`mailto:${EMAIL}`} className="hover:text-white">
              {EMAIL}
            </a>
          </p>
          <p className="mt-2 text-xs text-white/40">© {new Date().getFullYear()} VileroMedia. All rights reserved.</p>
        </div>
        <Socials />
      </div>
    </footer>
  );
}
