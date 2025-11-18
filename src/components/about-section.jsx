import { useState } from 'react';
import { cn } from '../utils/cn';
import { SectionHeader } from './section-header';

const linkStyle =
  'transition-opacity duration-300 not-md:underline underline-offset-4';

export function AboutSection({ translation: t }) {
  const [textDarkened, setTextDarkened] = useState('');
  const [currentLinkHovering, setCurrentLinkHovering] = useState(null);

  const darkenText = (e) => {
    setTextDarkened('opacity-35 transition-opacity duration-300');
    setCurrentLinkHovering(e.target.text);
  };

  const clarifyText = () => {
    setTextDarkened('');
    setCurrentLinkHovering(null);
  };

  return (
    // <section className="px-16 py-24 not-md:p-8 border-x border-[#FFFCF233] mx-16 not-md:mx-4 grow-2 flex flex-col justify-center">

    <section>
      <SectionHeader>{t.sections.about.title}</SectionHeader>

      <p
        className={`leading-7 transition-opacity duration-300 ${textDarkened}`}
      >
        {t.sections.about.bio1}
      </p>
      <p
        className={`py-4 leading-7 transition-opacity duration-300 ${textDarkened}`}
      >
        {t.sections.about.bio2}
      </p>
      <div className="inline">
        <span
          className={`leading-7 transition-opacity duration-300 ${textDarkened}`}
        >
          {t.sections.about.findMe}
        </span>{' '}
        <a
          href="https://www.linkedin.com/in/gaabrielo/"
          target="_blank"
          onMouseOver={darkenText}
          onMouseOut={clarifyText}
          className={cn(
            linkStyle,
            currentLinkHovering === 'LinkedIn' ? '' : textDarkened
          )}
        >
          LinkedIn
        </a>{' '}
        <span
          className={`leading-7 transition-opacity duration-300 ${textDarkened}`}
        >
          {t.sections.about.andCode}
        </span>{' '}
        <a
          href="https://github.com/gaabrielo"
          target="_blank"
          onMouseOver={darkenText}
          onMouseOut={clarifyText}
          className={cn(
            linkStyle,
            currentLinkHovering === 'GitHub' ? '' : textDarkened
          )}
        >
          GitHub
        </a>
        <span
          className={`leading-7 transition-opacity duration-300 ${textDarkened}`}
        >
          .
        </span>
      </div>
    </section>
  );
}
