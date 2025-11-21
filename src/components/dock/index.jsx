import React, { useState } from 'react';
import DockContainer from './dock-container';
import DockItem from './dock-item';

import {
  IconSquare,
  IconMailFilled,
  IconHomeFilled,
  IconBrandLinkedinFilled,
  IconBrandGithubFilled,
  IconFileCvFilled,
} from '@tabler/icons-react';

const ICONS = [
  IconBrandLinkedinFilled,
  IconBrandGithubFilled,
  IconHomeFilled,
  IconFileCvFilled,
  IconMailFilled,
];

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
        <DockItem tooltipLabel="LinkedIn">
          <IconBrandLinkedinFilled className="flex items-center justify-center w-full h-full p-2" />
        </DockItem>
        <DockItem tooltipLabel="GitHub">
          <IconBrandGithubFilled className="flex items-center justify-center w-full h-full p-2" />
        </DockItem>
        {/* <DockItem tooltipLabel="Blog">
          <IconHomeFilled className="flex items-center justify-center w-full h-full p-2" />
        </DockItem> */}
        <DockItem tooltipLabel="Download my CV">
          <IconFileCvFilled className="flex items-center justify-center w-full h-full p-2" />
        </DockItem>
        <DockItem tooltipLabel="Mail me">
          <IconMailFilled className="flex items-center justify-center w-full h-full p-2" />
        </DockItem>
      </DockContainer>
    </div>
  );

  // return (
  //   <motion.div
  //     ref={dockRef}
  //     onPointerMove={handlePointerMove}
  //     onPointerLeave={handlePointerLeave}
  //     onPointerDown={handlePointerDown}
  //     onPointerUp={handlePointerUp}
  //     className="glass-element fixed bottom-6 left-1/2 z-50 flex w-fit -translate-x-1/2 gap-0 rounded-full px-4 py-2 touch-none"
  //   >
  //     {ICONS.map((Icon, i) => (
  //       <DockIcon key={i} pointerX={pointerX}>
  //         <Icon size={36} color="#CCC5B9" />
  //       </DockIcon>
  //     ))}
  //   </motion.div>
  // );
}

// function DockIcon({ pointerX, children }) {
//   const iconRef = (useRef < HTMLAnchorElement) | (null > null);

//   // distância horizontal entre o centro do ícone e o ponteiro
//   const distance = useTransform(pointerX, (x) => {
//     const el = iconRef.current;
//     if (!el || x === Infinity) return Infinity;

//     const rect = el.getBoundingClientRect();
//     const centerX = rect.left + rect.width / 2;

//     return Math.abs(x - centerX);
//   });

//   // mapeia distância -> escala
//   // 0px   => MAX_SCALE
//   // MAX_DISTANCE => 1
//   const scale = useTransform(distance, [0, MAX_DISTANCE], [MAX_SCALE, 1]);

//   // suaviza a animação
//   const springScale = useSpring(scale, {
//     stiffness: 260,
//     damping: 20,
//     mass: 0.3,
//   });

//   // opcional: leve deslocamento pra cima ao aproximar
//   const translateY = useTransform(distance, [0, MAX_DISTANCE], [-10, 0]);

//   return (
//     <motion.a
//       ref={iconRef}
//       style={{ scale: springScale, y: translateY }}
//       className="bg-transparent grid place-content-center px-2 first-of-type:pl-0 last-of-type:pr-0"
//       href="#"
//     >
//       {children}
//     </motion.a>
//   );
// }
