import type { Metadata } from "next";
import { ClosingPoster, PageHeader, SectionHeading } from "@/components/ds";
import { WithSectionNav } from "@/components/section-nav";

export const metadata: Metadata = {
  title: "Community Service",
  description:
    "Kentucky retirees reported more than 7,247 hours of volunteer time during the 2025-2026 year. Volunteer service, the N.O. Kimbler scholarships, the Grandparent of the Year essay contest and KET support.",
  alternates: { canonical: "/join/volunteer-community-service" },
};

const memberActions = [
  "Volunteer",
  "Encourage others to volunteer",
  "Keep an account of hours",
  "Give number of hours to designated person in your local",
  "Locals should report volunteer hours to KRTA office by March",
];

const volunteerOfTheYear = [
  "Recognition at Annual Convention",
  "Not based exclusively on number of hours",
  "Based on uniqueness of service",
  "Local RTA will submit name of candidate to district by February",
  "Each district will submit winning candidate's name to KRTA by March",
  "State winner announced in April at the State Convention",
];

export default function CommunityServicePage() {
  return (
    <>
      <PageHeader kicker="Get involved" title="Community Service" />

      <WithSectionNav>
        <SectionHeading title="Volunteer Service" id="volunteer-service" />
        <div className="prose prose-col">
          <p>
            Hours are reported to local rta&rsquo;s and then totaled the the
            state office. Kentucky retirees reported more than 7,247 hours of
            time during the 2025-2026 year. The volunteered time was valued at
            $20,301,485.32. In the past, Governors Patton and Fletcher have
            praised the Association for its work and signed a proclamation
            recognizing &ldquo;the importance of retired teachers.&rdquo; KRTA
            members are encourage to volunteer in their respective communities
            and report their hours.
          </p>
          <p>
            Examples of agencies/services included in the volunteers&rsquo;
            reports are: Literacy Program, Blood Drive, American Cancer Society
            &ldquo;Relay for Life&rdquo;, American Red Cross, Senior Citizen
            Programs, Local Bicentennial Celebration and Heritage Days,
            Salvation Army, Family Care Center, Tutoring, Tax Aid/Adult
            Education, hospitals, Historical Society, Head Start Career
            Development, Foster Grandparents.
          </p>
          <h3>What Should Members Do?</h3>
          <ul>
            {memberActions.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <h3>Frank R. Hatfield Volunteer of the Year</h3>
          <ul>
            {volunteerOfTheYear.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>

        <div className="panel panel-muted">
          <SectionHeading
            title="Sixteen $1,650 Scholarships"
            id="scholarships"
          />
          <div className="prose prose-col">
            <p>
              KRTA&rsquo;s scholarship fund bears the name of the founder of the
              Kentucky Teachers Retirement System, N.O. Kimbler. The N.O.
              Kimbler Memorial Scholarship Fund was established to encourage
              promising students in the field of education. A committee of five
              KRTA members assumed the responsibility of managing the Fund in
              1982. One scholarship is awarded in each of the sixteen community
              colleges in Kentucky. They are funded by interest earned on the
              investments (from individual and local RTA contributions) of the
              Fund. In addition, KRTA contributes one-half of the annual
              earnings from the Association&rsquo;s investments. If you are
              interested in applying for the N.O. Kimbler Scholarship please
              contact the financial aid office at your current college. To
              donate to this fund, please make checks payable to N.O. Kimbler
              Fund and mail to 7800 Leaders Lane Louisville, KY 40291.
            </p>
          </div>
        </div>

        <div className="panel">
          <SectionHeading
            title="“Kentucky Grandparent of the Year” Essay Contest for Fifth Graders"
            id="grandparent-essay"
          />
          <div className="prose prose-col">
            <p>
              In partnership with Kentucky AARP, local RTA association
              presidents are asked to coordinate the activity in their counties.
              AARP presents awards to the school, county and district winners.
              The winning student and his/her grandparent is honored at the
              Annual KRTA Convention in Louisville in April each year. Each
              district winner is presented with a $100 check and the state
              winner is presented with a $500 check. The winning student&rsquo;s
              teacher will receive a check for $500 towards school supplies.
            </p>
          </div>
        </div>

        <div className="panel panel-muted">
          <SectionHeading title="KET Support" id="ket" />
          <div className="prose prose-col">
            <p>
              The project Friends of KET originated with an appeal from KET for
              partnering in support of the best TV. Acceptance of the request
              does not cost anything; KRTA simply became a group supporter.
              Members are asked to contribute in the name of KRTA when they make
              their annual contributions to KET.
            </p>
          </div>
        </div>
      </WithSectionNav>

      <ClosingPoster />
    </>
  );
}
