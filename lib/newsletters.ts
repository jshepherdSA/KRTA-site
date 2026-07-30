/**
 * KRTA NEWS archive, 2006 to 2026, extracted from krta.org/krta-news-archives/.
 * Every link on the live page is preserved. The 2016 row is malformed in the
 * source HTML ("New"+"s" split across tags, and a duplicate November entry
 * pointing at a broken href); the two real issues are repaired and the broken
 * duplicate dropped.
 */
export type NewsletterYear = {
  year: string;
  items: { label: string; href: string }[];
};

export const newsletterArchive: NewsletterYear[] = [
  {
    year: "2006",
    items: [
      {
        label: "March Part 1",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2006/March_2006_Part1.pdf",
      },
      {
        label: "March Part 2",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2006/March_2006_Part2.pdf",
      },
      {
        label: "March Part 3",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2006/March_2006_Part3.pdf",
      },
      {
        label: "June",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2006/NEWS%20JUNE%2006.pdf",
      },
      {
        label: "September",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2006/NEWS%20SEPT%2006.pdf",
      },
      {
        label: "December",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2006/DECEMBER%20NEWS%2006.pdf",
      },
    ],
  },
  {
    year: "2007",
    items: [
      {
        label: "March",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2007/MAR2007.pdf",
      },
      {
        label: "June",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2007/June07.pdf",
      },
      {
        label: "September",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2007/Sept07.pdf",
      },
      {
        label: "December",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2007/December2007.pdf",
      },
    ],
  },
  {
    year: "2008",
    items: [
      {
        label: "March",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2008/KRTA%20NEW%20MAR%2008.pdf",
      },
      {
        label: "June",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2008/KRTA%20NEWS%20JUNE%2008.pdf",
      },
      {
        label: "September",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2008/September2008.pdf",
      },
      {
        label: "December",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2008/KRTA%20NEWS%20DEC%2008.pdf",
      },
    ],
  },
  {
    year: "2009",
    items: [
      {
        label: "March",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2009/NEWS_MAR_09.pdf",
      },
      {
        label: "June",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2009/NEWS%20JUNE%2009.pdf",
      },
      {
        label: "September",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2009/NEWS%20SEPT%2009.pdf",
      },
      {
        label: "December",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2009/NEWS%20DEC%2009.pdf",
      },
    ],
  },
  {
    year: "2010",
    items: [
      {
        label: "March",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2010/NEWS%20MAR%2010.pdf",
      },
      {
        label: "June",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2010/KRTA%20NEWS%20JUN%2010%20FOR%20WEB.pdf",
      },
      {
        label: "September",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2010/KRTA%20NEWS%20SEPT%2010.pdf",
      },
      {
        label: "December",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2010/KRTA%20NEWS%20Dec10.pdf",
      },
    ],
  },
  {
    year: "2011",
    items: [
      {
        label: "March",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2011/KRTA%20NEWS%20March2011.pdf",
      },
      {
        label: "June",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2011/KRTA%20NEWS%20June%202011.pdf",
      },
      {
        label: "September",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2011/KRTA%20NEWS%20SEPT11.pdf",
      },
      {
        label: "December",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2011/NEWS%20DEC%2011.pdf",
      },
    ],
  },
  {
    year: "2012",
    items: [
      {
        label: "March",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2012/NEWS%20MAR%2012%20for%20web.pdf",
      },
      {
        label: "June",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2012/NEWS%20JUN12.pdf",
      },
      {
        label: "September",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2012/NEWS%20SEPT2012.pdf",
      },
      {
        label: "December",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2012/NEWS%20DEC%2012%20WEB%20PRESS.pdf",
      },
    ],
  },
  {
    year: "2013",
    items: [
      {
        label: "March",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2013/NEWS%20MAR%2013.pdf",
      },
      {
        label: "June",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2013/2TESTNEWS%20JUN13.pdf",
      },
      {
        label: "September",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2013/NEWSSEPT%2013.pdf",
      },
      {
        label: "December",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2013/NEWSDEC%2013.pdf",
      },
    ],
  },
  {
    year: "2014",
    items: [
      {
        label: "March",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2014/NEWS%20MAR%2014.pdf",
      },
      {
        label: "June",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2014/NEWS%20JUN%2014.pdf",
      },
      {
        label: "September",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2014/NEWS%20SEPT%2014%20PDF.pdf",
      },
      {
        label: "December",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2014/2NEWS%20DEC%2014.pdf",
      },
    ],
  },
  {
    year: "2015",
    items: [
      {
        label: "March",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2015/NEWS%20MAR%2015.pdf",
      },
      {
        label: "June",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2015/NEWS%20JUN%2015.indd.pdf",
      },
      {
        label: "September",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2015/NEWS%20SEPT%2015.pdf",
      },
      {
        label: "December",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2015/NEWS%20DEC%2015.pdf",
      },
    ],
  },
  {
    year: "2016 (Express Est. 2016)",
    items: [
      {
        label: "March \u2013 News",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2016/NEWS%20MAR%2016.pdf",
      },
      {
        label: "May \u2013 Express",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2016/KRTA-%20Express%20May%202016%20Updated.pdf",
      },
      {
        label: "June \u2013 Express",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2016/KRTA%20EXPRESS%20JUNE%202016.pdf",
      },
      {
        label: "July \u2013 News",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2016/NEWS%20JULY%2016.pdf",
      },
      {
        label: "September \u2013 Express",
        href: "https://krta.org/wp-content/uploads/2019/01/KRTA-EXPRESS-SEP-2016.pdf",
      },
      {
        label: "November \u2013 News",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2016/NEWS%20NOV%2016.pdf",
      },
    ],
  },
  {
    year: "2017",
    items: [
      {
        label: "January \u2013 Express",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2017/KRTA%20EXPRESS%20JAN%202017.pdf",
      },
      {
        label: "March \u2013 News",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2017/NEWS%20MAR%2017.pdf",
      },
      {
        label: "May \u2013 Express",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2017/KRTA-%20Express%20May%202017.pdf",
      },
      {
        label: "June \u2013 Express",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2017/June%202017%20Express%20PDF.pdf",
      },
      {
        label: "July \u2013 News",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2017/NEWS%20JULY%2017.pdf",
      },
      {
        label: "September \u2013 Express",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2017/SEPT%202017%20EXPRESS.pdf",
      },
      {
        label: "November \u2013  News",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2017/NOV%20NEWS%20FOR%202017.pdf",
      },
    ],
  },
  {
    year: "2018",
    items: [
      {
        label: "January \u2013 Express",
        href: "https://krta.org/wp-content/uploads/newsletterarchive/2018/KRTA%20EXPRESS%20JAN%202018.pdf",
      },
      {
        label: "March- News",
        href: "https://krta.org/wp-content/uploads/2019/01/NEWS-MAR-2018.pdf",
      },
      {
        label: "May- Express",
        href: "https://krta.org/wp-content/uploads/2019/01/KRTA-Express-May-2018.pdf",
      },
      {
        label: "June \u2013 Express",
        href: "https://krta.org/wp-content/uploads/2019/01/June-Express-PDF.pdf",
      },
      {
        label: "July \u2013 News",
        href: "https://krta.org/wp-content/uploads/2018/05/PROOFREAD-COPY-NEWS-JULY-18.pdf",
      },
      {
        label: "September \u2013 Express",
        href: "https://krta.org/wp-content/uploads/2018/09/SEPT-2018-EXPRESS.pdf",
      },
      {
        label: "November \u2013 News",
        href: "https://krta.org/wp-content/uploads/2018/10/NEWS-NOV-18-for-Web.pdf",
      },
    ],
  },
  {
    year: "2019",
    items: [
      {
        label: "March \u2013 News",
        href: "https://krta.org/wp-content/uploads/2019/03/PROOF-NEWS-MAR-19.pdf",
      },
      {
        label: "July \u2013 News",
        href: "https://krta.org/wp-content/uploads/2019/09/NEWS-JULY-19.pdf",
      },
      {
        label: "September \u2013 Express",
        href: "https://krta.org/wp-content/uploads/2019/09/EXPRESS-SEP-19.pdf",
      },
      {
        label: "November \u2013 News",
        href: "https://krta.org/wp-content/uploads/2019/11/NEWS-NOV-19.indd_.pdf",
      },
    ],
  },
  {
    year: "2020",
    items: [
      {
        label: "March \u2013 News",
        href: "https://krta.org/wp-content/uploads/2020/03/NEWS-MAR-20-for-Web.pdf",
      },
      {
        label: "July  \u2013 News",
        href: "https://krta.org/wp-content/uploads/2020/07/NEWS-JULY-20.indd_-1.pdf",
      },
      {
        label: "September \u2013 Express",
        href: "https://krta.org/wp-content/uploads/2020/09/EXPRESS-SEP-20.pdf",
      },
      {
        label: "November \u2013 News",
        href: "https://krta.org/wp-content/uploads/2021/07/NEWS-NOV-20.pdf",
      },
    ],
  },
  {
    year: "2021",
    items: [
      {
        label: "March \u2013 News",
        href: "https://krta.org/wp-content/uploads/2021/02/NEWS-MAR-21.pdf",
      },
      {
        label: "May \u2013 Express",
        href: "https://krta.org/wp-content/uploads/2021/04/EXPRESS-MAY-21.pdf",
      },
      {
        label: "July  \u2013 News",
        href: "https://krta.org/wp-content/uploads/2021/07/NEWS-JULY-21.indd_.pdf",
      },
      {
        label: "September \u2013 Express",
        href: "https://krta.org/wp-content/uploads/2021/09/express-sept-2021.pdf",
      },
      {
        label: "November \u2013 News",
        href: "https://krta.org/wp-content/uploads/2021/10/NEWS-NOV-21.indd_.pdf",
      },
    ],
  },
  {
    year: "2022",
    items: [
      {
        label: "March- News",
        href: "https://krta.org/wp-content/uploads/2022/02/NEWS-MAR-22.indd_.pdf",
      },
      {
        label: "May-Express",
        href: "https://krta.org/wp-content/uploads/2022/05/EXPRESS-MAY-22.pdf",
      },
      {
        label: "July \u2013 News",
        href: "https://krta.org/wp-content/uploads/2022/06/NEWS-JULY-22.indd_.pdf",
      },
      {
        label: "September \u2013 Express",
        href: "https://krta.org/wp-content/uploads/2022/09/EXPRESS-SEP-22-1.pdf",
      },
      {
        label: "November -News",
        href: "https://krta.org/wp-content/uploads/2022/10/NEWS-NOV-22.indd_.pdf",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        label: "March-News",
        href: "https://krta.org/wp-content/uploads/2023/03/NEWS-MAR-23-FINAL.pdf",
      },
      {
        label: "July-News",
        href: "https://krta.org/wp-content/uploads/2023/07/NEWS-JULY-23-.pdf",
      },
      {
        label: "September \u2013 Express",
        href: "https://krta.org/wp-content/uploads/2023/09/EXPRESS-SEP-23-1.pdf",
      },
      {
        label: "November \u2013 News",
        href: "https://krta.org/wp-content/uploads/2023/11/NEWS-NOV-23-.pdf",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        label: "March- News",
        href: "https://krta.org/wp-content/uploads/2024/02/NEWS-MAR-24-.pdf",
      },
      {
        label: "May \u2013 Express",
        href: "https://krta.org/wp-content/uploads/2024/05/EXPRESS-MAY-24.pdf",
      },
      {
        label: "July- News",
        href: "https://krta.org/wp-content/uploads/2024/07/NEW-JULY-2024.pdf",
      },
      {
        label: "September \u2013 Express",
        href: "https://krta.org/wp-content/uploads/2024/09/EXPRESS-SEP-24.pdf",
      },
      {
        label: "November \u2013 News",
        href: "https://krta.org/wp-content/uploads/2024/10/NEWS-NOV-24-.pdf",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        label: "March- News",
        href: "https://krta.org/wp-content/uploads/2025/03/NEWS-MAR-25.pdf",
      },
      {
        label: "May- Express",
        href: "https://krta.org/wp-content/uploads/2025/05/EXPRESS-MAY-25.pdf",
      },
      {
        label: "July-News",
        href: "https://krta.org/wp-content/uploads/2025/06/NEWS-JULY-25.indd_.pdf",
      },
      {
        label: "September-Express",
        href: "https://krta.org/wp-content/uploads/2025/09/EXPRESS-SEP-25.pdf",
      },
      {
        label: "November \u2013 News",
        href: "https://krta.org/wp-content/uploads/2025/12/NOV-25-paper-2.pdf",
      },
    ],
  },
  {
    year: "2026",
    items: [
      {
        label: "March-News",
        href: "https://krta.org/wp-content/uploads/2026/02/NEWS-MAR-26-.pdf",
      },
      {
        label: "May-Express",
        href: "https://krta.org/wp-content/uploads/2026/05/EXPRESS-MAY-26.pdf",
      },
      {
        label: "July-News",
        href: "https://krta.org/wp-content/uploads/2026/06/NEWS-JULY-26-.pdf",
      },
      {
        label: "Executive Council",
        href: "https://krta.org/wp-content/uploads/2026/07/Officers-and-Executive-Council.pdf",
      },
      {
        label: "District Presidents",
        href: "https://krta.org/wp-content/uploads/2026/07/2026-2027-District-Presidents-1.pdf",
      },
      {
        label: "Committee Chairs",
        href: "https://krta.org/wp-content/uploads/2026/07/KRTA-COMMITTEE-CO-CHAIRS.pdf",
      },
      {
        label: "Standing Committees",
        href: "https://krta.org/wp-content/uploads/2026/07/2026-2027-Standing-Committees-3.pdf",
      },
    ],
  },
];
