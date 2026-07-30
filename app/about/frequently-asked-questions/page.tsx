import type { Metadata } from "next";
import { ClosingPoster, PageHeader } from "@/components/ds";
import { Faq } from "@/components/faq";
import { WithSectionNav } from "@/components/section-nav";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "The difference between KRTA and TRS of KY, who to contact about health, dental and vision, what to do when you retire, and how to reach your legislator.",
  alternates: { canonical: "/about/frequently-asked-questions" },
};

const items = [
  {
    question: "What is the difference between KRTA and TRS of KY?",
    answer: (
      <>
        <h4>KRTA</h4>
        <p>
          Established in 1957, the KENTUCKY RETIRED TEACHERS ASSOCIATION is
          &ldquo;the only organization in the state that has as its main purpose
          to look out for the welfare of retired educators.&rdquo; From 1957 to
          1985 KRTA was affiliated with KEA. In 1985 NEA passed a resolution
          requiring KRTA members to become members of NEA-R. Both KEA and KRTA
          opposed the unified dues resolution and ties were broken in 1991.
        </p>
        <p>
          KRTA is not affiliated with any other organization, political or
          otherwise. The strength of the state association is evident in 14
          districts and 118 local associations. The Louisville office is staffed
          by two full-time and four part-time people. The Membership,
          Legislative, and Insurance Committees are comprised of volunteers who
          continually work on the concerns of retirees. KRTA&rsquo;s notable
          rapport with the TRS of KY and its staff is recognized in the
          legislative ranks in Frankfort. Numerous other benefits of interest to
          all retirees are described in the KRTA&rsquo;s Retirement Packet.
          Annual dues are $25. Membership today exceeds 30,000 retired teachers!
        </p>
        <h4>TRS of KY (Frankfort)</h4>
        <p>
          Established by law in 1938, KTRS legally known as
          &ldquo;Teachers&rsquo; Retirement System of the State of
          Kentucky&rdquo; (TRS of KY) became operational on July 1, 1940. TRS of
          KY is classified as an &ldquo;actuarial reserve, joint
          contributory&rdquo; system, meaning that contributions of the members
          and employers and the earnings from TRS of KY investments are placed
          in reserve to pay for the System&rsquo;s annuity obligation.
        </p>
        <p>
          TRS of KY membership is mandatory for all persons in eligible agencies
          occupying full-time and part-time positions which require either
          certification by the Department of Education or graduation from a four
          (4) year college or university as a condition of employment. Agencies
          eligible for participation in TRS of KY include public elementary and
          secondary schools, Eastern Kentucky University, Kentucky State
          University, Morehead State University, Murray State University,
          Western Kentucky University, the School for the Deaf, the School for
          the Blind, the state area vocational schools, the Department of
          Education and other agencies as specified by law.
        </p>
        <p>
          TRS of KY currently serves over 72,700 active members and 39,300
          annuitants.
        </p>
      </>
    ),
  },
  {
    question: "I am thinking of retiring, what should I do?",
    answer: (
      <p>
        Contact TRS of KY and let them know at{" "}
        <a href="tel:1-800-618-1687">1-800-618-1687</a>
      </p>
    ),
  },
  {
    question: "Why should I join KRTA?",
    answer: (
      <p>
        Joining the KRTA today is the best way a retired teacher can help ensure
        the benefits provided to retired teachers in Kentucky are protected.
        Join KRTA today to begin receiving the outstanding benefits of
        membership including representation of your interest in Frankfort.
      </p>
    ),
  },
  {
    question: "Who do I contact regarding my Health, Dental and/or Vision?",
    answer: (
      <>
        <p>
          <strong>Health (Age 65 and over):</strong>{" "}
          <a
            href="https://trs.ky.gov/retired-members/age-65-over/"
            target="_blank"
            rel="noreferrer"
          >
            Click Here
          </a>
        </p>
        <p>
          <strong>Health (Age under 65):</strong>{" "}
          <a
            href="https://trs.ky.gov/retired-members/under-age-65/"
            target="_blank"
            rel="noreferrer"
          >
            Click Here
          </a>
        </p>
        <p>
          <strong>Vision:</strong>{" "}
          <a href="http://www.avesis.com/" target="_blank" rel="noreferrer">
            http://www.avesis.com
          </a>{" "}
          or call 1-800-828-9341 (Avesis is purchased separately)
        </p>
        <p>
          <strong>Dental:</strong>{" "}
          <a
            href="https://www.deltadentalky.com/KRTA"
            target="_blank"
            rel="noreferrer"
          >
            https://www.deltadentalky.com
          </a>{" "}
          (Delta Dental is purchased seperately) 1-800-955-2030
        </p>
      </>
    ),
  },
  {
    question: "In which KRTA district am I located?",
    answer: (
      <p>
        <a href="/about/find-your-district">
          Click here to view the map of the state divided into districts
        </a>
      </p>
    ),
  },
  {
    question:
      "Who do I notify in case of a life changing event, e.g. marriage, death, divorce or adoption?",
    answer: (
      <p>
        Call TRS of KY at <a href="tel:1-800-618-1687">1-800-618-1687</a>
      </p>
    ),
  },
  {
    question:
      "I would like to submit something to print in the KRTA NEWS or on the Facebook page, Who do I contact?",
    answer: (
      <p>
        Please contact us at info@krta.org with your request. Click here to{" "}
        <a href="mailto:info@krta.org">E-mail info@krta.org</a> or call{" "}
        <a href="tel:1-800-551-7979">1-800-551-7979</a>
      </p>
    ),
  },
  {
    question: "Who is my Legislator?",
    answer: (
      <p>
        <a
          href="https://apps.legislature.ky.gov/findyourlegislator/findyourlegislator.html"
          target="_blank"
          rel="noreferrer"
        >
          Click here to determine your legislator
        </a>
      </p>
    ),
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHeader
        kicker="Answers"
        title="Frequently Asked Questions"
        lede="Select a question to expand it."
      />

      <WithSectionNav>
        <Faq items={items} />
      </WithSectionNav>

      <ClosingPoster />
    </>
  );
}
