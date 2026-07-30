import type { MetadataRoute } from "next";
import { eventPostBodies, newsPostBodies } from "@/lib/posts";
import { site } from "@/lib/site";

const staticRoutes = [
  "/",
  "/about",
  "/about/mission-and-history",
  "/about/whats-in-a-name",
  "/about/find-your-district",
  "/about/frequently-asked-questions",
  "/krta-officers",
  "/krta-staff",
  "/constitution-and-by-laws",
  "/information-services",
  "/information-services/fall-workshops",
  "/convention",
  "/join/join-krta",
  "/join/volunteer-community-service",
  "/automatic-dues-deduction",
  "/members",
  "/membership-workshop",
  "/krta-news-archives",
  "/collettetravel",
  "/legislative",
  "/links",
  "/contact",
  "/recent-news",
  "/krtaevents",
  "/site-map",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...newsPostBodies.map((p) => `/news/${p.slug}`),
    ...eventPostBodies.map((p) => `/events/${p.slug}`),
  ];

  return routes.map((route) => ({
    url: `${site.url}${route === "/" ? "" : route}`,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
