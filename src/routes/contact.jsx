import { createFileRoute } from '@tanstack/react-router';
import { useLanguage } from '../hooks/use-language';
import { translations } from '../i18n';
// import { FeaturesSection } from '../components/sections/features-section';
import { ParallaxCard } from '../components/parallax-card';
import { IconCalendar } from '@tabler/icons-react';
import { IconCalendarEvent } from '@tabler/icons-react';
import { FeaturesSection } from '../components/sections/features-section';
import { DrawnArrow } from '../utils/icons';
import { Divider } from '../components/ui/divider';
import { SectionHeader } from '../components/ui/section-header';
import { IconBrandLinkedin, IconBrandGithub, IconBrandDribbble, IconMail } from '@tabler/icons-react';
import { IconArrowUpRight } from '@tabler/icons-react';


const LINKS = [
  {
    label: "Email",
    url: "mailto:contact@gabrielo.xyz",
    icon: IconMail
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/gaabrielo",
    icon: IconBrandLinkedin
  },
  {
    label: "GitHub",
    url: "https://github.com/gaabrielo",
    icon: IconBrandGithub
  },
  {
    label: "Dribbble",
    url: "https://dribbble.com/gaabrielo",
    icon: IconBrandDribbble
  }
]

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
});

function RouteComponent() {
  const [language] = useLanguage();
  const t = translations[language];

  return (
    <>
      <div className="w-full flex flex-col items-start min-h-screen p-8 text-[#121212]">
        {/* <div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-2">
          <div className="col-span-1 bg-[#E0E0E0] rounded-[2.5rem] flex flex-col items-start justify-between p-10 not-sm:aspect-square!">
            <p className="font-mondwest uppercase text-3xl! leading-9 lg:text-7xl! lg:leading-15">
              stop wasting money on AI that doesn’t understand your business
            </p>
            <button className="bg-[#FF6800] text-lg sm:text-xl! text-white px-5 py-3.5 rounded-full flex items-center gap-3.5 w-full sm:w-fit justify-center mt-10 sm:mt-0">
              <IconCalendarEvent size={24} />
              Book a Strategy Call
            </button>
          </div> */}

        <div className="w-full h-full">
          <ParallaxCard
            globalTrigger={true}
            className="not-sm:h-full! not-sm:aspect-square!"
          />
        </div>
        {/* </div> */}

        {/* <div className="flex justify-between mt-20 items-end w-full">
          <DrawnArrow className="not-sm:absolute not-sm:top-[80vh] not-sm:z-40" />
          <p className="font-mondwest uppercase text-3xl! leading-9 lg:text-5xl! text-right lg:leading-12 max-w-5xl text-zinc-300 mt-8 sm:mt-0">
            I build robust, scalable web applications designed to convert. No
            ghosting. No spaghetti code. Just results.
          </p>
        </div>

        <FeaturesSection /> */}

        <div className="max-w-4xl w-full mx-auto py-16 space-y-6">
          {/* <SectionHeader>Contact me</SectionHeader> */}
          <h1 className="font-mondwest text-6xl! text-[#CCC5B9] leading-none select-none whitespace-nowrap">
            {t.sections.contact.title}
          </h1>

          <div className="flex gap-2">
            {LINKS.map(l => {
              const Icon = l.icon;
              return (
                <a href={l.url} target="_blank" className="py-2 px-3 border border-neutral-700 rounded-lg flex items-center space-y-0! text-gray-50 transition-all hover:border-gray-100 group leading-0">
                  <Icon size={20} className="text-neutral-500 group-hover:text-gray-100 transition-colors mr-2" />
                  {l.label}
                  <span className="w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 ease-out overflow-hidden flex items-center">
                    <IconArrowUpRight size={16} className="text-neutral-500 group-hover:text-gray-100 transition-colors flex-shrink-0" />
                  </span>
                </a>
              )
            })}
          </div>

        </div>
      </div>
      <Divider />
    </>
  );
}
