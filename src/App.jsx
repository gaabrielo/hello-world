import { useState } from 'react';
import { cn } from './utils/cn';
import { translations } from './i18n';
import { AboutSection } from './components/about-section';
import { WritingsSection } from './components/writings-section';
import { Divider } from './components/ui/divider';
import { ProjectsSection } from './components/projects-section';
import { DockWidget } from './components/dock';
import { CreativeCommons } from './components/cc';
import { StackSection } from './components/stack-section';

function SectionContainer({ children, className }) {
  return (
    <>
      <section
        className={cn(
          'py-16 not-md:py-16 border-x border-[#FFFCF233] mx-16 not-md:mx-4 grow-2 flex flex-col gap-16 justify-center',
          className
        )}
      >
        {children}
      </section>
      {/* <Divider /> */}
    </>
  );
}

function App() {
  const [language, setLanguage] = useState('en'); // "en" ou "pt"
  const t = translations[language];

  return (
    <div className="text-lg w-full min-h-screen flex flex-col">
      <DockWidget />

      <header className="px-16 not-md:px-8 py-16 mx-16 not-md:mx-4 border-x border-[#FFFCF233] flex items-center justify-between grow">
        <div className="max-w-3/4">
          <p className="font-bold! font-vend-sans">{t.name}</p>
          <p className="text-[#CCC5B9] leading-4 font-vend-sans">{t.role}</p>
        </div>

        {/* Language switcher */}
        <div className="text-sm space-x-4 not-md:space-x-2">
          <button
            onClick={() => setLanguage('en')}
            className={cn(
              'bg-transparent! text-sm!',
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
              'bg-transparent! text-sm!',
              language === 'pt'
                ? 'underline underline-offset-4'
                : 'text-[#CCC5B9]'
            )}
          >
            PT
          </button>
        </div>
      </header>

      {/* <section className="px-16 py-16 not-md:px-8 not-md:py-16 border-x border-[#FFFCF233] mx-16 not-md:mx-4 grow-2 flex flex-col gap-16 justify-center"> */}
      <Divider />
      <SectionContainer className="pt-28">
        <AboutSection translation={t} />
      </SectionContainer>

      <SectionContainer>
        <WritingsSection translation={t} />
      </SectionContainer>

      <SectionContainer className="pb-28">
        <ProjectsSection translation={t} />
      </SectionContainer>

      {/* <SectionContainer>
        <StackSection translation={t} />
      </SectionContainer> */}

      <Divider />

      {/* <footer className="px-16 not-md:px-8 py-8 pb-24! mx-16 not-md:mx-4 flex flex-col gap-10 border-x border-[#FFFCF233] grow"> */}
      <footer className="mx-16 not-md:mx-4 border-x border-[#FFFCF233] grow overflow-clip">
        <div className="w-full max-w-60 aspect-3/1 mask-contain mask-no-repeat mask-exclude mask-[url(/sign.svg)] animate-sign mx-auto mt-8 mb-22"></div>
      </footer>
    </div>
  );
}

export default App;
