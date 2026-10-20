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

/** When we answer, in US time. */
export const HOURS = "Mon–Fri, 9am–6pm ET";

export const EMAIL = "vileromedia@gmail.com";
