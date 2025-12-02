import React, { useState, useEffect } from 'react';
import DockContainer from './dock-container';
import DockItem from './dock-item';

import {
  IconMailFilled,
  IconBrandLinkedinFilled,
  IconBrandGithubFilled,
  IconFileCvFilled,
  IconArrowUp,
} from '@tabler/icons-react';
import { AnimatePresence, useScroll, motion } from 'motion/react';

export function DockWidget() {
  const [size, setSize] = useState(40);
  const [magnification, setMagnification] = useState(30);
  const [scale, setScale] = useState(18);

  const [isScrollToTopVisible, setIsScrollToTopVisible] = useState(false);

  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latestPos) => {
      setIsScrollToTopVisible(latestPos > 100);
    });

    return () => unsubscribe();
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // <div className="not-prose flex flex-col gap-8 p-8 justify-center items-center relative min-h-80 rounded-lg z-[2] my-10">
    <div className="fixed bottom-6 left-1/2 z-11 flex w-fit -translate-x-1/2">
      <div className="absolute inset-0 bg-grid-slate-700 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255, 1))] [mask-image:linear-gradient(0deg,rgba(255,255,255,0.3),rgba(255,255,255,0.5))]"></div>
      <DockContainer
        className="relative w-fit translate-x-0 translate-y-0 left-0 bottom-0"
        config={{
          size,
          magnification,
          scale,
        }}
      >
        <DockItem
          tooltipLabel="LinkedIn"
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/gaabrielo/',
              '_blank',
              'noopener,noreferrer'
            )
          }
        >
          <IconBrandLinkedinFilled className="flex items-center justify-center w-full h-full p-2" />
        </DockItem>
        <DockItem
          tooltipLabel="GitHub"
          onClick={() =>
            window.open(
              'https://github.com/gaabrielo',
              '_blank',
              'noopener,noreferrer'
            )
          }
        >
          <IconBrandGithubFilled className="flex items-center justify-center w-full h-full p-2" />
        </DockItem>

        <DockItem
          tooltipLabel="Mail me"
          onClick={() => window.location.assign('mailto:contact@gabrielo.xyz')}
        >
          <IconMailFilled className="flex items-center justify-center w-full h-full p-2" />
        </DockItem>
        <DockItem tooltipLabel="Download my CV">
          <IconFileCvFilled className="flex items-center justify-center w-full h-full p-2" />
        </DockItem>
        <AnimatePresence mode="popLayout">
          {isScrollToTopVisible && (
            <>
              <motion.div
                layout
                className="w-px h-[80%] bg-neutral-400 ml-1 rounded-px self-center"
                initial={{
                  width: 0,
                  opacity: 0,
                  filter: 'blur(5px)',
                  scale: 0.3,
                }}
                animate={{
                  width: '1px',
                  opacity: 1,
                  filter: 'blur(0px)',
                  scale: 1,
                }}
                exit={{ width: 0, opacity: 0, filter: 'blur(5px)', scale: 0.3 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              ></motion.div>
              <motion.div
                layout
                initial={{
                  width: 0,
                  opacity: 0,
                  filter: 'blur(3px)',
                  scale: 0.8,
                }}
                animate={{
                  width: 'auto',
                  opacity: 1,
                  filter: 'blur(0px)',
                  scale: 1,
                }}
                exit={{ width: 0, opacity: 0, filter: 'blur(5px)', scale: 0.8 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <DockItem tooltipLabel="Go to top" onClick={scrollToTop}>
                  <IconArrowUp className="flex items-center justify-center w-full h-full p-2" />
                </DockItem>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </DockContainer>
    </div>
  );
}
