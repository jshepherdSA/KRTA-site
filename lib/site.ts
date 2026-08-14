/**
 * Site-wide constants: navigation, contact details and the facts KRTA repeats
 * across pages. Nav labels and URLs mirror krta.org exactly (see teardown.md).
 */

export const site = {
  name: "Kentucky Retired Teachers Association",
  shortName: "KRTA",
  tagline: "Serving Kentucky's retired educators since 1957",
  url: "https://krta.org",
  phone: "1-800-551-7979",
  email: "info@krta.org",
  address: {
    street: "7800 Leaders Lane",
    city: "Louisville",
    state: "KY",
    zip: "40291",
  },
  // One entry per set of hours, so every surface can lay them out as rows
  // rather than re-splitting a single string.
  hours: [
    { days: "Monday–Thursday", time: "8:30–4:00" },
    { days: "Friday", time: "8:30–2:00" },
  ],
  social: {
    facebook: "https://www.facebook.com/KentuckyRetiredTeachersAssociation/",
    twitter: "https://twitter.com/kyretiredteach",
  },
} as const;

export const addressLines = [
  site.address.street,
  `${site.address.city} ${site.address.state} ${site.address.zip}`,
];

/** PDFs hosted on the current krta.org — kept as absolute links to the live files. */
export const docs = {
  executiveCouncil:
    "https://krta.org/wp-content/uploads/2026/07/Officers-and-Executive-Council.pdf",
  districtPresidents:
    "https://krta.org/wp-content/uploads/2026/07/2026-2027-District-Presidents-1.pdf",
  committeeChairs:
    "https://krta.org/wp-content/uploads/2026/07/KRTA-COMMITTEE-CO-CHAIRS.pdf",
  standingCommittees:
    "https://krta.org/wp-content/uploads/2026/07/2026-2027-Standing-Committees-3.pdf",
  districtPresidentsContact:
    "https://krta.org/wp-content/uploads/2026/04/2025-2026-District-Presidents-2.pdf",
  fallWorkshopSchedule:
    "https://krta.org/wp-content/uploads/2026/06/2026-Fall-Workshop-Schedule-3.pdf",
  eventsCalendar:
    "https://krta.org/wp-content/uploads/2026/05/Tentative-Events-Calendar-2026-27-pdf.pdf",
  localOfficerForm:
    "https://krta.org/wp-content/uploads/2022/07/Local-Officer-Form.pdf",
  districtOfficerForm:
    "https://krta.org/wp-content/uploads/2022/01/DISTRICT-OFFICER-FORM.pdf",
  currentNewsletter:
    "https://krta.org/wp-content/uploads/2026/06/NEWS-JULY-26-.pdf",
  addCardPaper: "https://krta.org/wp-content/uploads/2026/05/ADD-CARD.pdf",
  cashForm:
    "https://krta.org/wp-content/uploads/2026/05/Cash-Form-No-Dues-Ending-Date-last-4-10-digit-dob-25.pdf",
  payOnline: "https://secure.krta.org/forms/renewal/index.asp",
  constitution:
    "https://krta.org/wp-content/uploads/2021/04/KRTA-Constitution-FINAL.pdf",
  bylaws: "https://krta.org/wp-content/uploads/2021/04/Final-042021.pdf",
  legislativePriorities:
    "https://krta.org/wp-content/uploads/2025/12/2026-Leg.-Priorities-PDF-1.pdf",
} as const;

export type NavChild = { label: string; href: string; external?: boolean };
export type NavItem = { label: string; href: string; children?: NavChild[] };

/** Primary navigation — label-for-label and URL-for-URL with krta.org. */
export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "2026-2027 KRTA Officers", href: "/krta-officers" },
      {
        label: "Executive Council",
        href: docs.executiveCouncil,
        external: true,
      },
      {
        label: "District Presidents",
        href: docs.districtPresidents,
        external: true,
      },
      { label: "Committee Chairs", href: docs.committeeChairs, external: true },
      {
        label: "Standing Committees",
        href: docs.standingCommittees,
        external: true,
      },
      { label: "Constitution and By Laws", href: "/constitution-and-by-laws" },
      { label: "KRTA Staff, Hours, & Location", href: "/krta-staff" },
      { label: "Fall Workshops", href: "/information-services/fall-workshops" },
      { label: "Community Service", href: "/join/volunteer-community-service" },
      { label: "Find Your Local/District", href: "/about/find-your-district" },
      { label: "Mission and History", href: "/about/mission-and-history" },
      { label: "What's in a Name?", href: "/about/whats-in-a-name" },
      {
        label: "Frequently Asked Questions",
        href: "/about/frequently-asked-questions",
      },
      { label: "KRTA Annual Convention", href: "/convention" },
    ],
  },
  { label: "Join/Renew", href: "/join/join-krta" },
  { label: "Member Benefits Login", href: "/members" },
  { label: "Newsletters", href: "/krta-news-archives" },
  { label: "Collette Travel", href: "/collettetravel" },
  { label: "Legislative", href: "/legislative" },
  { label: "Local/District Resources", href: "/links" },
  {
    label: "Contact",
    href: "/contact",
    children: [{ label: "Site Map", href: "/site-map" }],
  },
];

/** Footer columns. */
export const footerColumns: { title: string; links: NavChild[] }[] = [
  {
    title: "Membership",
    links: [
      { label: "Join / Renew", href: "/join/join-krta" },
      { label: "Automatic dues deduction", href: "/automatic-dues-deduction" },
      { label: "Member benefits login", href: "/members" },
      {
        label: "Frequently asked questions",
        href: "/about/frequently-asked-questions",
      },
      {
        label: "Find your local / district",
        href: "/about/find-your-district",
      },
      { label: "Collette Travel", href: "/collettetravel" },
    ],
  },
  {
    title: "The association",
    links: [
      { label: "About KRTA", href: "/about" },
      { label: "Mission and history", href: "/about/mission-and-history" },
      { label: "2026-2027 officers", href: "/krta-officers" },
      { label: "Staff, hours and location", href: "/krta-staff" },
      { label: "Annual convention", href: "/convention" },
      { label: "Constitution and by laws", href: "/constitution-and-by-laws" },
    ],
  },
  {
    title: "News and advocacy",
    links: [
      { label: "Newsletters", href: "/krta-news-archives" },
      { label: "Recent news", href: "/recent-news" },
      { label: "Upcoming events", href: "/krtaevents" },
      { label: "Legislative", href: "/legislative" },
      { label: "Local / district resources", href: "/links" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

/** News posts — `news_posts` on the live site, three entries. */
export const newsPosts = [
  {
    slug: "july-krta-news",
    title: "KRTA NEWS July Edition",
    date: "July 2026",
    excerpt: "The July KRTA News is out, please click here to view",
  },
  {
    slug: "wep-gpo-repealed",
    title: "WEP/GPO Repealed",
    date: "February 2026",
    excerpt:
      "Please visit ssa.gov for guidance and updates on the Social Security Fairness Act",
  },
  {
    slug: "https-krta-org-convention",
    title: "2026 KRTA State Convention Highlights",
    date: "April 2026",
    excerpt:
      "Please click here to view the information presented at the convention.",
  },
] as const;

/** Event posts — `events_posts` on the live site, three entries. */
export const eventPosts = [
  {
    slug: "2026-fall-workshop-schedule",
    title: "2026 Fall Workshop Schedule",
    date: "Fall 2026",
    excerpt: "Click here to view the 2026 Fall Workshop Schedule",
  },
  {
    slug: "2022-2023-tentative-events-calendar",
    title: "Meetings and Events Calendar",
    date: "2026-2027",
    excerpt: "Calendar of Events 2026-2027",
  },
  {
    slug: "new-officer-forms-for-2022-2023-year",
    title: "New Officer Forms for 2026-2027 Year",
    date: "By July 1",
    excerpt:
      "Please report your District and Local officers to KRTA by mail or email by July 1.",
  },
] as const;
