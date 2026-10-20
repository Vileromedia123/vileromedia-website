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
    href: "/blog/our-conversion-funnel",
    title: "How we find roofing companies that need us: our conversion funnel",
    excerpt:
      "From a question in a roofers' Facebook group to a month-to-month client: every stage of our funnel, the conversion targets we set, and the 5 keywords roofers type when they look for help with Google.",
    date: "2026-10-20",
    readTime: "8 min read",
    tag: "Behind the scenes",
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
