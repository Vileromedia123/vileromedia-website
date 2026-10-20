// Site-wide settings. Edit here, not in the page.

/**
 * Public URL of the site. On Vercel it is filled in automatically from the production domain,
 * so link previews (WhatsApp, Slack, LinkedIn) point to the real site, not a domain we don't own.
 */
export const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

/**
 * Phone number shown as tap-to-call in the header, hero and contact section.
 * Leave empty until we have a real line (a team member's number or a free call-forwarding line).
 * Format: display text + E.164 number, e.g. { display: "(512) 555-0142", tel: "+15125550142" }.
 */
export const PHONE: { display: string; tel: string } | null = null;

/** When we answer, in US time. */
export const HOURS = "Mon–Fri, 9am–6pm ET";

export const EMAIL = "hello@vileromedia.com";
