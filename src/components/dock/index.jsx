import React, { useState } from 'react';
import DockContainer from './dock-container';
import DockItem from './dock-item';

import {
  IconMailFilled,
  IconHomeFilled,
  IconBrandLinkedinFilled,
  IconBrandGithubFilled,
  IconFileCvFilled,
} from '@tabler/icons-react';

export function DockWidget() {
  const [size, setSize] = useState(40);
  const [magnification, setMagnification] = useState(30);
  const [scale, setScale] = useState(18);

  return (
    // <div className="not-prose flex flex-col gap-8 p-8 justify-center items-center relative min-h-80 rounded-lg z-[2] my-10">
    <div className="fixed bottom-6 left-1/2 z-50 flex w-fit -translate-x-1/2">
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
          tooltipLabel="Home"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <IconHomeFilled className="flex items-center justify-center w-full h-full p-2" />
        </DockItem>
        <DockItem tooltipLabel="Download my CV">
          <IconFileCvFilled className="flex items-center justify-center w-full h-full p-2" />
        </DockItem>
        <DockItem
          tooltipLabel="Mail me"
          onClick={() => window.location.assign('mailto:contact@gabrielo.xyz')}
        >
          <IconMailFilled className="flex items-center justify-center w-full h-full p-2" />
        </DockItem>
      </DockContainer>
    </div>
  );
}
