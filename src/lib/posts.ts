export type Post = {
  href: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readTime: string;
  tag: string;
};

export const posts: Post[] = [
  {
    href: "/blog/how-to-get-more-qualified-roofing-leads",
    title: "How to get more qualified roofing leads (not just clicks)",
    excerpt:
      "Win local search, make it easy to say yes, use paid ads with limits and track every enquiry to a signed job. Plus what to avoid when hiring an agency.",
    date: "2026-10-27",
    readTime: "7 min read",
    tag: "Guide",
  },
  {
    href: "/blog/our-conversion-funnel",
    title: "From first search to booked inspection: how roofers find and hire us",
    excerpt:
      "Our funnel in the open: where roofing companies find us, the conversion rate we aim for at each step, the searches roofers type when they need help with Google, and what our website test changed.",
    date: "2026-10-20",
    readTime: "7 min read",
    tag: "How we work",
  },
  {
    href: "/guides/google-ads-budget-for-roofers",
    title: "How much should a roofer spend on Google Ads?",
    excerpt:
      "Start from the jobs you want, not from a number an agency gives you. A simple backwards calculation with a worked example.",
    date: "2026-10-20",
    readTime: "6 min read",
    tag: "Guide",
  },
];
