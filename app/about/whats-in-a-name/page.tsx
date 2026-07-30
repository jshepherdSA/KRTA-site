import type { Metadata } from "next";
import { ClosingPoster, PageHeader, SectionHeading } from "@/components/ds";
import { WithSectionNav } from "@/components/section-nav";

export const metadata: Metadata = {
  title: "What's in a Name?",
  description:
    "The difference between KRTA, the Kentucky Retired Teachers Association, and TRS of KY, the Teachers' Retirement System of the State of Kentucky.",
  alternates: { canonical: "/about/whats-in-a-name" },
};

export default function WhatsInANamePage() {
  return (
    <>
      <PageHeader
        kicker="The association"
        title="What's in a Name?"
        lede="Two organisations, often confused: the association that represents retired educators, and the system that pays their pensions."
      />

      <WithSectionNav>
        <SectionHeading title="KRTA" id="krta" />
        <div className="prose prose-col">
          <p>
            Established in 1957, the KENTUCKY RETIRED TEACHERS ASSOCIATION is
            &ldquo;the only organization in the state that has as its main
            purpose to look out for the welfare of retired educators.&rdquo;
            From 1957 to 1985 KRTA was affiliated with KEA. In 1985 NEA passed a
            resolution requiring KRTA members to become members of NEA-R. Both
            KEA and KRTA opposed the unified dues resolution and ties were
            broken in 1991.
          </p>
          <p>
            KRTA is not affiliated with any other organization, political or
            otherwise. The strength of the state association is evident in 14
            districts and 118 local associations. The Louisville office is
            staffed by three full-time and two part-time people. The Membership,
            Legislative, and Insurance Committees are comprised of volunteers
            who continually work on the concerns of retirees. KRTA&rsquo;s
            notable rapport with the TRS of KY and its staff is recognized in
            the legislative ranks in Frankfort. Numerous other benefits of
            interest are available to KRTA members. Annual dues are $25.
            Membership today exceeds 32,000 retired teachers!
          </p>
        </div>

        <div style={{ marginTop: "var(--space-10)" }}>
          <SectionHeading title="TRS of KY (Frankfort)" id="trs" />
          <div className="prose prose-col">
            <p>
              Established by law in 1938, TRS legally known as
              &ldquo;Teachers&rsquo; Retirement System of the State of
              Kentucky&rdquo; (TRS of KY) became operational on July 1, 1940.
              TRS of KY is classified as an &ldquo;actuarial reserve, joint
              contributory&rdquo; system, meaning that contributions of the
              members and employers and the earnings from TRS of KY investments
              are placed in reserve to pay for the System&rsquo;s annuity
              obligation.
            </p>
            <p>
              TRS of KY membership is mandatory for all persons in eligible
              agencies occupying full-time and part-time positions which require
              either certification by the Department of Education or graduation
              from a four (4) year college or university as a condition of
              employment. Agencies eligible for participation in TRS of KY
              include public elementary and secondary schools, Eastern Kentucky
              University, Kentucky State University, Morehead State University,
              Murray State University, Western Kentucky University, the School
              for the Deaf, the School for the Blind, the state area vocational
              schools, the Department of Education and other agencies as
              specified by law.
            </p>
          </div>
        </div>
      </WithSectionNav>

      <ClosingPoster />
    </>
  );
}
