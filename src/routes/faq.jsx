import { createFileRoute } from '@tanstack/react-router';
import { Breadcrumbs } from '../components/ui/breadcrumbs';
import { Divider } from '../components/ui/divider';
import { IconPlus } from '@tabler/icons-react';

export const Route = createFileRoute('/faq')({
  component: RouteComponent,
});

const faqList = [
  // [
  //   'How does it work?',
  //   'We talk, I get the information about what you need for your dream website. That can be guidelines of your brand, the target audience, and the goals of your project.',
  // ],
  // [
  //   'Do I own my website?',
  //   'Absolutely, you own your website! You can transfer the code after is done to anywhere you want, if that is your goal. But I will do the deployment and maintenance for you.',
  // ],
  [
    'What information do you need from me to get started?',
    '1. Your marketing copy for the page/site. 2. Business assets (logo, brand guide if you have one, business images and/or graphics you want to include (optional). 3. Your design and functionality requirements. 4. Any additional information that you feel will help me create exactly what you need.',
  ],
  [
    'Do you provide domain and hosting?',
    'Domain and hosting in Vercel with an extension "your-business.vercel.app" is completely free. Custom domains like ".com" are your ip, and you need to purchase from a supplier with your own name/details.',
  ],
  [
    'Will the landing page/website be responsive on different devices?',
    'For sure! Everything will look perfect on desktops, laptops, tablets, and mobile devices, so your users can enjoy your content across all devices.',
  ],
  [
    'Can you integrate Mailchimp, Calendly, or other 3rd party tools?',
    'Yes, I can integrate forms, newsletter subscriptions, booking tools, and other interactive tools to enhance the functionality of your landing page/website. Please message me to check if integration with your preferred tool is available.',
  ],
  [
    'Do you offer revisions?',
    'Yes! Your satisfaction is my priority, and I offer revisions to ensure the final product meets your vision and needs.',
  ],
  [
    'What kind of support do you offer after the landing page is delivered?',
    "To ensure you're 100% satisfied with your project, I can offer you 5 additional days of free post-delivery support to help you with any questions you may have.",
  ],
];

const pathToPage = [
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact' },
  { name: 'FAQ', path: '/faq' },
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
        <div className="p-4 md:p-8">
          <Breadcrumbs pathList={pathToPage} />
          <h1 className="text-5xl! font-mondwest mt-6">FAQ</h1>
        </div>

        <Divider />

        {faqList.map((faq, index) => (
          <div
            key={index}
            className="border-b last-of-type:border-0 border-zinc-400/40 py-6 gap-2 flex flex-col px-4 md:px-8"
          >
            <div className="flex items-center gap-3.5">
              <IconPlus size={20} className="text-amber-600" />
              <p className="text-xl!">{faq[0]}</p>
            </div>
            <span className="text-zinc-300 ml-9">{faq[1]}</span>
          </div>
        ))}
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
