import { useState } from 'react';
import { cn } from './utils/cn';
import { translations } from './i18n';
import { AboutSection } from './components/about-section';
import { WritingsSection } from './components/writings-section';
import { Divider } from './components/ui/divider';
import { ProjectsSection } from './components/projects';
import { DockWidget } from './components/dock';
import { CreativeCommons } from './components/cc';
import { StackSection } from './components/stack-section';

function SectionContainer({ children, className }) {
  return (
    <section
      className={cn(
        'py-14 mx-16 not-md:mx-4 grow-2 border-x border-[#FFFCF233] flex flex-col gap-16 justify-center',
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
    <div className="text-lg w-100vw flex flex-col">
      <DockWidget />

      <header className="px-16 not-md:px-8 py-16 mx-16 not-md:mx-4 border-x border-[#FFFCF233] flex items-center justify-between grow">
        <div className="max-w-3/4">
          <p className="font-mondwest text-4xl! text-neutral-100">{t.name}</p>
          <p className="text-[#CCC5B9] leading-4 font-vend-sans">{t.role}</p>
        </div>

        {/* Language switcher */}
        <div className="text-sm space-x-4 not-md:space-x-2">
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

      <SectionContainer className="md:pt-28">
        <AboutSection translation={t} />
      </SectionContainer>

      <SectionContainer>
        <WritingsSection translation={t} />
      </SectionContainer>

      <SectionContainer>
        <ProjectsSection translation={t} />
      </SectionContainer>

      <SectionContainer className="md:pb-28">
        <StackSection translation={t} />
      </SectionContainer>

      <Divider />

      <footer className="mx-16 not-md:mx-4 border-x border-[#FFFCF233] grow overflow-clip">
        <div className="w-full max-w-48 aspect-3/1 mask-contain mask-no-repeat mask-exclude mask-[url(/sign.svg)] animate-sign mx-auto mt-8 mb-22"></div>
      </footer>
    </div>
  );
}

export default App;
