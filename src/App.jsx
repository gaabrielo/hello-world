import { useState } from 'react';
import { cn } from './utils/cn';
import { translations } from './i18n';

function App() {
  const [language, setLanguage] = useState('en'); // "en" ou "pt"
  const t = translations[language];

  const [textDarkened, setTextDarkened] = useState('');
  const [currentLinkHovering, setCurrentLinkHovering] = useState(null);
  console.log(currentLinkHovering);

  const darkenText = (e) => {
    setTextDarkened('opacity-35 transition-opacity duration-300');
    setCurrentLinkHovering(e.target.text);
  };

  const clarifyText = () => {
    setTextDarkened('');
    setCurrentLinkHovering(null);
  };

  return (
    <div className="text-[#FFFCF2] text-lg w-full min-h-screen flex flex-col">
      <section className="px-16 py-8 not-md:p-8 border-x-[1px] border-[#FFFCF233] mx-16 not-md:mx-8 flex items-center justify-between grow-1">
        <div className="max-w-2/3">
          <p className="font-bold">{t.name}</p>
          <p className="text-[#CCC5B9]">{t.role}</p>
        </div>

        {/* Idioma switcher */}
        <div className="text-sm space-x-4 not-md:space-x-2">
          <button
            onClick={() => setLanguage('en')}
            className={cn(
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
              language === 'pt'
                ? 'underline underline-offset-4'
                : 'text-[#CCC5B9]'
            )}
          >
            PT
          </button>
        </div>
      </section>

      <div className="w-full h-[1px] bg-[#FFFCF233]"></div>

      <section className="px-16 not-md:px-8 py-24 not-md:py-8 border-x-[1px] border-[#FFFCF233] mx-16 not-md:mx-8 grow-2 flex flex-col justify-center">
        <p
          className={`leading-8 transition-opacity duration-300 ${textDarkened}`}
        >
          {t.bio1}
        </p>
        <p
          className={`py-4 leading-8 transition-opacity duration-300 ${textDarkened}`}
        >
          {t.bio2}
        </p>
        <div className="inline">
          <span
            className={`leading-8 transition-opacity duration-300 ${textDarkened}`}
          >
            {t.findMe}
          </span>{' '}
          <a
            href="https://www.linkedin.com/in/gaabrielo/"
            target="_blank"
            onMouseOver={darkenText}
            onMouseOut={clarifyText}
            className={cn(
              'transition-opacity duration-300 not-md:underline',
              currentLinkHovering === 'LinkedIn' ? '' : textDarkened
            )}
          >
            LinkedIn
          </a>{' '}
          <span
            className={`leading-8 transition-opacity duration-300 ${textDarkened}`}
          >
            {t.andCode}
          </span>{' '}
          <a
            href="https://github.com/gaabrielo"
            target="_blank"
            onMouseOver={darkenText}
            onMouseOut={clarifyText}
            className={cn(
              'transition-opacity duration-300 not-md:underline',
              currentLinkHovering === 'GitHub' ? '' : textDarkened
            )}
          >
            GitHub
          </a>
          <span
            className={`leading-8 transition-opacity duration-300 ${textDarkened}`}
          >
            .
          </span>
        </div>
      </section>

      <div className="w-full h-[1px] bg-[#FFFCF233]"></div>

      <section className="border-x-[1px] border-[#FFFCF233] mx-16 not-md:mx-8 grow-1 flex justify-center items-center">
        <img
          src="/sign.svg"
          alt="Gabriel Dias Mendonça sign"
          className="w-40 py-8"
        />
      </section>
    </div>
  );
}

export default App;
