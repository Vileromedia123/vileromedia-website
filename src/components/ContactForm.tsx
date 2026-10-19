"use client";

import { useActionState } from "react";
import { submitLead, type LeadState } from "@/app/actions";

const initial: LeadState = { status: "idle", message: "" };

const field =
  "w-full rounded-md border border-navy/20 bg-white px-4 py-3 text-base text-navy placeholder:text-muted/70 focus:border-orange";

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitLead, initial);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border-2 border-green bg-white p-8 text-navy"
      >
        <p className="font-display text-3xl font-bold uppercase text-green">
          Request received
        </p>
        <p className="mt-3 text-lg">{state.message}</p>
        <p className="mt-2 text-muted">No credit card. No contract. 15 minutes.</p>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-4 rounded-lg bg-white p-6 shadow-sm sm:p-8" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-semibold">
            Your name <span className="text-orange">*</span>
          </label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-semibold">
            Email <span className="text-orange">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor="company" className="mb-1 block text-sm font-semibold">
            Roofing company
          </label>
          <input id="company" name="company" autoComplete="organization" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-semibold">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-semibold">
          Your service area and what you want from Google <span className="text-orange">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="e.g. Dallas–Fort Worth, about $900K a year, want more re-roof calls outside hail season."
          className={field}
        />
      </div>

      <div>
        <label htmlFor="source" className="mb-1 block text-sm font-semibold">
          How did you hear about us?
        </label>
        <select id="source" name="source" defaultValue="" className={field}>
          <option value="">Pick one</option>
          <option value="facebook-group">A roofers&apos; Facebook group</option>
          <option value="facebook-page">Our Facebook page</option>
          <option value="instagram">Instagram</option>
          <option value="podcast-youtube">A podcast or YouTube</option>
          <option value="google">Google</option>
          <option value="referral">Another roofer told me</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Honeypot, hidden from people and screen readers */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" && (
        <p role="alert" className="rounded-md bg-orange/10 px-4 py-3 text-sm font-medium text-orange-dark">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 inline-flex items-center justify-center rounded-md bg-orange px-6 py-4 font-display text-xl font-bold uppercase tracking-wide text-white transition hover:bg-orange-dark disabled:opacity-60"
      >
        {pending ? "Sending…" : "Book my free 15-minute audit"}
      </button>
      <p className="text-center text-sm text-muted">
        No credit card. No contract. We reply within 24 hours on weekdays.
      </p>
    </form>
  );
}
