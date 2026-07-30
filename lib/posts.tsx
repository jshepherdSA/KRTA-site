/**
 * The `news_posts` and `events_posts` bodies from krta.org, kept verbatim.
 * Slugs match the live site so inbound links keep resolving, even where the slug
 * is stale (the "2022-2023" event slugs hold the 2026-2027 material).
 */
import type { ReactNode } from "react";
import { docs } from "./site";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: ReactNode;
};

export const newsPostBodies: Post[] = [
  {
    slug: "july-krta-news",
    title: "KRTA NEWS July Edition",
    date: "July 2026",
    excerpt: "The July KRTA News is out, please click here to view",
    body: (
      <p>
        The July KRTA News is out, please{" "}
        <a href={docs.currentNewsletter} target="_blank" rel="noreferrer">
          click here to view
        </a>
      </p>
    ),
  },
  {
    slug: "wep-gpo-repealed",
    title: "WEP/GPO Repealed",
    date: "February 2026",
    excerpt:
      "Please visit ssa.gov for guidance and updates on the Social Security Fairness Act",
    body: (
      <p>
        Please visit{" "}
        <a href="https://www.ssa.gov/" target="_blank" rel="noreferrer">
          ssa.gov
        </a>{" "}
        for guidance and updates on the Social Security Fairness Act
      </p>
    ),
  },
  {
    slug: "https-krta-org-convention",
    title: "2026 KRTA State Convention Highlights",
    date: "April 2026",
    excerpt:
      "Please click here to view the information presented at the convention.",
    body: (
      <p>
        Please click <a href="/convention">here</a> to view the information
        presented at the convention.
      </p>
    ),
  },
];

export const eventPostBodies: Post[] = [
  {
    slug: "2026-fall-workshop-schedule",
    title: "2026 Fall Workshop Schedule",
    date: "Fall 2026",
    excerpt: "Click here to view the 2026 Fall Workshop Schedule",
    body: (
      <p>
        <a href={docs.fallWorkshopSchedule} target="_blank" rel="noreferrer">
          Click here to view the 2026 Fall Workshop Schedule
        </a>
      </p>
    ),
  },
  {
    slug: "2022-2023-tentative-events-calendar",
    title: "Meetings and Events Calendar",
    date: "2026-2027",
    excerpt: "Calendar of Events 2026-2027",
    body: (
      <p>
        <a href={docs.eventsCalendar} target="_blank" rel="noreferrer">
          Calendar of Events 2026-2027
        </a>
      </p>
    ),
  },
  {
    slug: "new-officer-forms-for-2022-2023-year",
    title: "New Officer Forms for 2026-2027 Year",
    date: "By July 1",
    excerpt:
      "Please report your District and Local officers to KRTA by mail or email by July 1.",
    body: (
      <>
        <p>
          Please report your District and Local officers to KRTA by mail or
          email by July 1.
        </p>
        <p>
          <a href={docs.localOfficerForm} target="_blank" rel="noreferrer">
            Click here for the Local Officer Form
          </a>
        </p>
        <p>
          <a href={docs.districtOfficerForm} target="_blank" rel="noreferrer">
            Click here for the District Officer Form
          </a>
        </p>
      </>
    ),
  },
];
