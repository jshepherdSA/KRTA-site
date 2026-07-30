import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy krta.org URLs that resolved to a page we have consolidated or
      // that only ever forwarded somewhere else. Permanent so search engines
      // move the equity across.
      {
        source: "/upcoming-events",
        destination: "/krtaevents",
        permanent: true,
      },
      {
        source: "/2026-fall-workshop-schedule-5",
        destination: "/information-services/fall-workshops",
        permanent: true,
      },
      {
        source: "/2023-workshops-2",
        destination: "/information-services/fall-workshops",
        permanent: true,
      },
      {
        source: "/committee-chairs",
        destination: "/krta-officers",
        permanent: true,
      },
      {
        source: "/information-services/krta-annual-convention",
        destination: "/convention",
        permanent: true,
      },
      {
        source: "/newsletter-sign-up",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/krtanews",
        destination: "/krta-news-archives",
        permanent: true,
      },
      {
        source: "/https-secure-krta-org-forms-renewal-index-asp",
        destination: "/join/join-krta",
        permanent: true,
      },
      // A passthrough to TRS on the live site — send people to the source.
      {
        source: "/annuity-schedule",
        destination: "https://trs.ky.gov/retired-members/eft-dates/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
