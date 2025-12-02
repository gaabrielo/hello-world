import { useEffect, useRef } from 'react';
import DockProvider, { useDockContext } from './context';
import { cn } from '../../utils/cn';
import { motion } from 'motion/react';
import useMeasure from 'react-use-measure';
import { mergeRefs } from 'react-merge-refs';

function Dock({ children, className }) {
  const dockRef = useRef(null);
  const { setDockWidth, setIsDockHovered } = useDockContext();

  const [ref, dockBounds] = useMeasure();

  useEffect(() => {
    setDockWidth(dockRef?.current?.clientWidth);
  }, [setDockWidth]);

  return (
    <motion.footer
      className={cn(
        'fixed bottom-[-14px] z-10 flex w-auto justify-center left-1/2 h-16 px-3 rounded-full shadow-lg translate-y-[-50%] translate-x-[-50%] glass-element',
        className
      )}
      layout
      transition={{
        duration: 0,
        ease: 'linear',
      }}
      animate={{
        width: dockBounds.width + 28,
      }}
    >
      <nav
        ref={mergeRefs([dockRef, ref])}
        className="flex gap-0 items-end justify-center py-3"
        onMouseOver={() => setIsDockHovered(true)}
        onMouseOut={() => setIsDockHovered(false)}
      >
        {children}
      </nav>
    </motion.footer>
  );
}

export default function DockContainer({ children, config, className }) {
  return (
    <DockProvider config={config}>
      <Dock className={className}>{children}</Dock>
    </DockProvider>
  );
}
