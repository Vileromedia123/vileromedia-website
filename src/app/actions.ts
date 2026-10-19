"use server";

import { getSupabase } from "@/lib/supabase";

export type LeadState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: FormDataEntryValue | null, max: number) {
  return String(value ?? "").trim().slice(0, max);
}

export async function submitLead(
  _prev: LeadState,
  formData: FormData,
): Promise<LeadState> {
  // Honeypot: bots fill hidden fields, humans don't.
  if (clean(formData.get("website"), 200)) {
    return { status: "success", message: "Thanks. We'll call you within 24 hours on weekdays." };
  }

  const name = clean(formData.get("name"), 120);
  const email = clean(formData.get("email"), 200);
  const message = clean(formData.get("message"), 2000);
  const company = clean(formData.get("company"), 160);
  const phone = clean(formData.get("phone"), 40);
  const source = clean(formData.get("source"), 80);

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in your name, email and a short message." };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "That email doesn't look right. Mind checking it?" };
  }

  const supabase = getSupabase();
  if (!supabase) {
    return {
      status: "error",
      message: "Our form isn't connected yet. Email us at hello@vileromedia.com and we'll get back to you.",
    };
  }

  const { error } = await supabase.from("leads").insert({
    name,
    email,
    message,
    company: company || null,
    phone: phone || null,
    source: source || null,
  });

  if (error) {
    console.error("Supabase insert failed:", error.message);
    return {
      status: "error",
      message: "Something went wrong on our side. Email us at hello@vileromedia.com.",
    };
  }

  return {
    status: "success",
    message: "Got it. We'll reach out within 24 hours on weekdays to book your 15-minute audit.",
  };
}
