import { useState } from 'react';
import { cn } from './utils/cn';

function App() {
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
      <section className="p-16 not-md:p-8 border-x-[1px] border-[#FFFCF233] mx-16 not-md:mx-8">
        <p className="font-bold">Gabriel Dias Mendonca</p>
        <p className="text-[#CCC5B9]">Full-Stack Software Developer</p>
      </section>

      <div className="w-full h-[1px] bg-[#FFFCF233]"></div>

      <section
        className={`px-16 not-md:px-8 py-32 not-md:py-8 border-x-[1px] border-[#FFFCF233] mx-16 not-md:mx-8`}
      >
        <p
          className={`leading-8 transition-opacity duration-300 ${textDarkened}`}
        >
          23yo, Bachelor’s in Computer Science at UFPR. I’m a Full Stack
          Developer focused on building modern web products with smooth UX.
          Recently worked on platforms for edtech and agribusiness, including a
          gamified app for farmers and a web IDE for programming education.
        </p>
        <p
          className={`py-4 leading-8 transition-opacity duration-300 ${textDarkened}`}
        >
          I love crafting interfaces that not only look great, but feel fast and
          intuitive — using tools like React, TypeScript, TailwindCSS and Framer
          Motion. Currently building tools with AI (OpenAI API) and diving
          deeper into design systems and dev productivity.
        </p>
        <div className="inline">
          <span
            className={`leading-8 transition-opacity duration-300 ${textDarkened}`}
          >
            You’ll find more about my work on
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
            and more of my code on
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

      <section className="border-x-[1px] border-[#FFFCF233] mx-16 not-md:mx-8 grow-1"></section>
    </div>
  );
}

export default App;
