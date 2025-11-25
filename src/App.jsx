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

function SectionContainer({ children }) {
  return (
    <>
      <section className="py-16 not-md:py-16 border-x border-[#FFFCF233] mx-16 not-md:mx-4 grow-2 flex flex-col gap-16 justify-center">
        {children}
      </section>
      <Divider />
    </>
  );
}

function App() {
  const [language, setLanguage] = useState('en'); // "en" ou "pt"
  const t = translations[language];

  return (
    <div className="text-lg w-full min-h-screen flex flex-col">
      <DockWidget />

      <header className="px-16 py-8 not-md:p-8 border-x border-[#FFFCF233] mx-16 not-md:mx-4 flex items-center justify-between grow">
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
      <SectionContainer>
        <AboutSection translation={t} />
      </SectionContainer>

      <SectionContainer>
        <WritingsSection translation={t} />
      </SectionContainer>

      <SectionContainer>
        <ProjectsSection translation={t} />
      </SectionContainer>

      {/* <SectionContainer>
        <StackSection translation={t} />
      </SectionContainer> */}

      <footer className="px-16 py-8 not-md:p-8 border-x border-[#FFFCF233] mx-16 not-md:mx-4 flex flex-col gap-10 grow">
        <div className="w-full max-w-40 aspect-3/1 mask-contain mask-no-repeat mask-exclude mask-[url(/sign.svg)] animate-sign mx-auto"></div>
        <CreativeCommons className="mr-0 ml-auto" />
      </footer>
    </div>
  );
}

export default App;
