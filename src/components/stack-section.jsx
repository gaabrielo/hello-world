import { useState } from 'react';
import { stack } from '../i18n';
import { SectionHeader } from './ui/section-header';
import { cn } from '../utils/cn';

function StackColumn({ data, translation: t }) {
  const [textDarkened, setTextDarkened] = useState('');
  const [currentLine, setCurrentLine] = useState(null);

  const darkenLine = (line) => {
    setTextDarkened('opacity-35 transition-opacity duration-200');
    setCurrentLine(line);
  };

  const clarifyLine = () => {
    setTextDarkened('');
    setCurrentLine(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col">
      <header className="flex justify-between items-baseline text-neutral-400 pb-1 mb-4 border-b border-[#FFFCF233] border-dashed">
        <span className="mr-2 font-bold! text-xs! uppercase font-mono!">
          Tech
        </span>
        <span className="ml-2 font-bold! text-xs! uppercase font-mono!">
          {t.sections.stack.years}
        </span>
      </header>

      {data.map((item) => (
        <div
          key={item.tech}
          className={cn(
            'flex items-baseline text-neutral-100 transition-opacity duration-200 pb-2',
            currentLine !== item.tech && textDarkened
          )}
          onMouseOver={() => darkenLine(item.tech)}
          onMouseOut={clarifyLine}
        >
          <span className="mr-3 font-mondwest text-lg!">{item.tech}</span>

          <div className="flex-1 border-b border-dashed border-[#FFFCF233]"></div>

          <span className="ml-2 font-mondwest text-lg!">
            {new Date().getFullYear() - new Date(item.year).getFullYear()}
          </span>
        </div>
      ))}
    </div>
  );
}

export function StackSection({ translation: t }) {
  return (
    <section className="px-16 not-md:px-8">
      <SectionHeader>{t.sections.stack.title}</SectionHeader>
      <StackColumn data={stack} translation={t} />
    </section>
  );
}
