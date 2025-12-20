'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  DrawnPortrait,
  DrawnProgress,
  DrawnRectangle,
} from '../../utils/icons';

function PortraitAnimation() {
  const [scale, setScale] = useState(0.75);

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => (prev === 0.75 ? 1 : 0.75));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        className="font-mondwest text-6xl! md:text-8xl! text-foreground"
        animate={{ scale }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <DrawnPortrait />
      </motion.div>
    </div>
  );
}

function LayoutAnimation() {
  const [layout, setLayout] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLayout((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const layouts = [
    'grid-cols-2 grid-rows-2 max-w-[140px] mt-4',
    'grid-cols-3 grid-rows-1 max-w-[280px] mt-12',
    'grid-cols-1 grid-rows-3 max-w-[140px]',
  ];

  return (
    <div className="h-full p-4 flex items-center justify-center">
      <motion.div className={`grid ${layouts[layout]} gap-2 w-full`} layout>
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="h-[30px]"
            layout
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <DrawnRectangle initialFrame={i} className="w-full h-full" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function CardLabel({ title, subtitle }) {
  return (
    <div className="mt-auto mb-0">
      <h3 className="font-mondwest-bold uppercase text-2xl!">
        {/* Business-First Architecture */}
        {title}
      </h3>
      <p className="text-muted-foreground text-sm text-zinc-600">
        {/* Not just code, but strategy. */}
        {subtitle}
      </p>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="bg-background py-20 w-full">
      {/* <div className="max-w-6xl mx-auto"> */}
      <motion.p
        className="text-[#E0E0E0] text-sm uppercase tracking-widest mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Features
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Typography Card */}
        <motion.div
          className="bg-[#E0E0E0] rounded-xl p-8 h-[280px] flex flex-col relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 0.98 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.2 }}
          data-clickable
        >
          <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2">
            <LayoutAnimation />
          </div>
          <CardLabel
            title={'Business-First Architecture'}
            subtitle={'Not just code, but strategy.'}
          />
        </motion.div>

        {/* Layouts Card */}
        <motion.div
          className="bg-[#E0E0E0] rounded-xl p-8 h-[280px] flex flex-col relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 0.98 }}
          whileTap={{ scale: 0.96 }}
          data-clickable
        >
          <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2">
            <PortraitAnimation />
          </div>
          <CardLabel
            title={'Direct Developer Access'}
            subtitle={'No middle-man.'}
          />
        </motion.div>

        {/* Speed Card */}
        <motion.div
          className="bg-[#E0E0E0] rounded-xl p-8 h-[280px] flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 0.98 }}
          whileTap={{ scale: 0.96 }}
          data-clickable
        >
          <div className="flex-1 flex flex-col items-center mt-2 md:mt-8">
            {/* <SpeedIndicator /> */}
            <DrawnProgress />
          </div>
          <CardLabel
            title={'Production-Ready Code'}
            subtitle={'Secure, fast and scalable.'}
          />
        </motion.div>
      </div>
      {/* </div> */}
    </section>
  );
}
