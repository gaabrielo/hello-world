import { useState } from 'react';
import { cn } from './utils/cn';
import { translations } from './i18n';
import { AboutSection } from './components/about-section';
import { WritingsSection } from './components/writings-section';
import { Divider } from './components/ui/divider';
import { ProjectsSection } from './components/projects';
import { DockWidget } from './components/dock';
import { StackSection } from './components/stack-section';
import { HeroMockups } from './components/hero-mockups';
// import { CvFooter } from './components/cv-footer';
// import { CreativeCommons } from './components/cc';
import { IconCornerDownRight } from '@tabler/icons-react';
import { ProjectBoard } from './components/project-board';

function SectionContainer({ children, className }) {
  return (
    <section
      className={cn(
        'pt-16 sm:py-14! mx-16 not-md:mx-4 grow-2 border-x border-[#FFFCF233] flex flex-col gap-16 justify-center',
        className
      )}
    >
      {children}
    </section>
  );
}

function App() {
  const [language, setLanguage] = useState('en'); // "en" ou "pt"
  const t = translations[language];

  return (
    <div className="text-lg w-100vw flex flex-col relative">
      <DockWidget />

      <header className="px-16 not-md:px-8 py-16 mx-16 not-md:mx-4 border-x border-[#FFFCF233] flex items-center justify-between grow -mt-1/2">
        <div className="max-w-3/4">
          <p className="font-mondwest text-4xl! text-neutral-100 leading-8">
            {t.name}
          </p>
          <p className="text-[#CCC5B9] leading-4 font-vend-sans mt-1">
            {t.role}
          </p>
        </div>

        {/* Language switcher */}
        <div className="text-sm space-x-6 md:space-x-4 not-md:space-x-2">
          <button
            onClick={() => setLanguage('en')}
            className={cn(
              'bg-transparent! text-sm! font-vend-sans',
              language === 'en'
                ? 'underline underline-offset-4'
                : 'text-[#CCC5B9]'
            )}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('pt')}
            className={cn(
              'bg-transparent! text-sm! font-vend-sans',
              language === 'pt'
                ? 'underline underline-offset-4'
                : 'text-[#CCC5B9]'
            )}
          >
            PT
          </button>
        </div>
      </header>

      <Divider />

      <SectionContainer className="pt-16 md:pt-28">
        <AboutSection translation={t} />
      </SectionContainer>

      <SectionContainer>
        {/* <ProjectsSection translation={t} /> */}
        <ProjectBoard />
      </SectionContainer>

      {/* <SectionContainer>
        </SectionContainer>

        <SectionContainer className="pb-16 md:pb-28 z-2 bg-[#252422]">
        </SectionContainer> */}
      <SectionContainer className="z-2 bg-[#252422]">
        <div className="flex flex-col-reverse sm:flex-row">
          <div className="flex-1 my-16 sm:mt-0">
            <StackSection translation={t} />
          </div>
          <div className="flex-1">
            <WritingsSection translation={t} />
          </div>
        </div>
      </SectionContainer>

      <Divider className="z-2" />

      <HeroMockups className="bg-neutral-950 pt-16" />
      <div className="bg-neutral-950 w-full relative pb-46">
        <button
          onClick={() => window.location.assign('mailto:contact@gabrielo.xyz')}
          className="whitespace-nowrap bg-lime-600 px-4 py-3 rounded-full absolute translate-y-[-12%] sm:translate-y-[-20%] z-10 left-1/2 translate-x-[-50%] flex items-center gap-2 cursor-pointer! hover:brightness-110 transition-all"
        >
          <IconCornerDownRight size={20} /> Let's work together
        </button>

        {/* <CvFooter className="mt-28" /> */}
      </div>

      {/* <Divider /> */}

      {/* <footer className="mx-16 not-md:mx-4 border-x border-[#FFFCF233] grow overflow-clip">
        <div className="w-full max-w-48 aspect-3/1 mask-contain mask-no-repeat mask-exclude mask-[url(/sign.svg)] animate-sign mx-auto mt-8 mb-24"></div>
      </footer> */}
    </div>
  );
}

export default App;
