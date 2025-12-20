import { createFileRoute } from '@tanstack/react-router';
import { Divider } from '../components/ui/divider';
import { Breadcrumbs } from '../components/ui/breadcrumbs';

export const Route = createFileRoute('/privacy-policy')({
  component: RouteComponent,
});

const purpose = [
  [
    'Project Assessment & Communication: To respond to your inquiries, schedule meetings, and draft project proposals.',
    'Legitimate Interest (Responding to direct inquiries) and Contract (Steps prior to entering a contract).',
  ],
  [
    'Service Delivery: To manage and deliver the services contracted by you.',
    'Contract (Necessary for the performance of a contract).',
  ],
  [
    'Website Improvement: To understand user behavior and improve website performance and user experience.',
    'Legitimate Interest (Ensuring the functionality of the website).',
  ],
];

const pathToPage = [
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
];

function RouteComponent() {
  return (
    <main className="self-stretch border-[#514F4C] flex justify-center items-start border-x border-b-0 mx-4 md:mx-16">
      <div className="w-4 sm:w-6 md:w-8 lg:w-16 self-stretch relative overflow-hidden">
        {/* Left decorative pattern */}
        <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
          {Array.from({ length: 120 }).map((_, i) => (
            <div
              key={i}
              className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[#514F4C] outline-offset-[-0.25px]"
            />
          ))}
        </div>
      </div>

      <div className="border-x border-[#514F4C] min-h-screen">
        <div className="p-4 md:py-8 md:px-16">
          <Breadcrumbs pathList={pathToPage} />
          <h1 className="text-5xl! font-mondwest mt-6">Privacy Policy</h1>
        </div>

        <Divider className="mb-4" />

        <div className="p-4 md:py-8 md:px-16">
          <p>
            This Privacy Policy describes how I collects, uses, and discloses
            personal information You provide through this website, particularly
            via the contact forms. As a developer, I am committed to upholding
            the principles of the General Data Protection Regulation (GDPR).
          </p>
          <br />
          <p>
            I only collect information that is strictly necessary to understand
            your project and initiate a professional relationship. The data I
            collect typically includes:
          </p>
          <br />
          <ul className="ml-9 list-disc">
            <li>
              <b>Contact Information:</b> Your name, email address, and
              optionally your phone number or company name.
            </li>
            <br />
            <li>
              <b>Project Information:</b> Details about your project, budget,
              timeline, required technologies, and any other data provided in
              the guided contact form or direct email.
            </li>
            <br />
            <li>
              <b>Technical Data (Website Analytics):</b> Non-personally
              identifiable information such as IP addresses (anonymized),
              browser type, and pages visited, collected via analytics tools
              (e.g., Vercel Analytics).
            </li>
          </ul>
          <br />
          <p>
            The personal data collected is used exclusively for the following
            purposes and under the following legal bases:
          </p>
          <br />
          <table className="border border-[#514F4C]">
            <thead>
              <tr className="border-b border-[#514F4C]">
                <th className="text-left border-r border-[#514F4C] p-2">
                  Purpose of Processing
                </th>
                <th className="text-left p-2">Legal Basis (GDPR Article 6)</th>
              </tr>
            </thead>
            <tbody>
              {purpose.map((item, index) => (
                <tr key={index} className="border-b border-[#514F4C]">
                  <td className="border-r border-[#514F4C] p-2">{item[0]}</td>
                  <td className="p-2">{item[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <p className="font-bold">
            I will never use your contact information for marketing or
            promotional purposes without your explicit consent.
          </p>
          <br />
          <ul className="ml-9 list-disc">
            <li>
              <b>Confidentiality:</b> All details and documents concerning your
              project, including the information provided in the initial contact
              form, are treated as strictly confidential. This information is
              only reviewed by me and is not shared with any third party,
              service provider, or affiliate.
            </li>
            <br />
            <li>
              <b>Data Security:</b> I implement reasonable technical and
              organizational measures (e.g., strong passwords, secure hosting,
              data encryption in transit via SSL/TLS) to protect the personal
              information provided against unauthorized access, disclosure,
              alteration, or destruction.
            </li>
          </ul>
          <br />
          <p>
            I retain personal data only for as long as necessary to fulfill the
            purposes for which it was collected:
          </p>
          <br />
          <ul className="ml-9 list-disc">
            <li>
              <b>Unconverted Leads:</b> Information related to inquiries that do
              not result in a contract will be retained for a maximum of 6
              months to allow for follow-up and internal record-keeping, and
              then securely deleted.
            </li>
            <br />
            <li>
              <b>Contracted Clients:</b> Information necessary for invoicing,
              tax compliance, and legal records will be kept for the duration of
              the contract plus a period required by local tax or legal
              regulations.
            </li>
          </ul>
          <br />
          <p>
            As a consumer of my services, you have the following rights
            regarding your personal data:
          </p>
          <br />
          <ul className="ml-9 list-disc">
            <li>
              <b>Right of Access:</b> The right to request copies of your
              personal data.
            </li>
            <br />
            <li>
              <b>Right to Rectification:</b> The right to request that I correct
              any information you believe is inaccurate or incomplete.
            </li>
            <br />
            <li>
              <b>Right to Erasure ('Right to be Forgotten'):</b> The right to
              request that I erase your personal data under certain conditions.
            </li>
            <br />
            <li>
              <b>Right to Restrict Processing:</b> The right to request that I
              restrict the processing of your personal data, under certain
              conditions.
            </li>
            <br />
            <li>
              <b>Right to Data Portability:</b> The right to request that I
              transfer the data that I have collected to another organization,
              or directly to you, under certain conditions.
            </li>
          </ul>
          <br />
          <p>
            To exercise any of these rights, please contact me directly at{' '}
            <a href="mailto:contact@gabrielo.xyz">contact@gabrielo.xyz</a>.
          </p>
          <br />
          <h2 className="font-bold">Contact Information</h2>
          <br />
          <p>
            If you have any questions about this Policy or my data processing
            practices, please contact me:
          </p>
          <br />
          <a href="mailto:contact@gabrielo.xyz">contact@gabrielo.xyz</a>
          <p>Curitiba, Brazil</p>
        </div>
      </div>

      <div className="w-4 sm:w-6 md:w-8 lg:w-16 self-stretch relative overflow-hidden">
        {/* Right decorative pattern */}
        <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
          {Array.from({ length: 120 }).map((_, i) => (
            <div
              key={i}
              className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[#514F4C] outline-offset-[-0.25px]"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
