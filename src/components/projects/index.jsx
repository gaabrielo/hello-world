import { AnimatePresence, motion } from 'motion/react';
import { SectionHeader } from '../ui/section-header';
import { ActiveProjectCard, ProjectCard } from './project-card';
import { useState } from 'react';

export function ProjectsSection({ translation: t }) {
  const [activeCard, setActiveCard] = useState();

  return (
    <section className="px-16 not-md:px-8">
      <SectionHeader>{t.sections.projects.title}</SectionHeader>
      <div className="grid grid-cols-3 not-md:grid-cols-1 gap-6">
        {t.sections.projects.items.map((item) => (
          <ProjectCard
            key={item.slug}
            data={item}
            translation={t}
            setActiveCard={setActiveCard}
          />
        ))}
      </div>

      <AnimatePresence>
        {activeCard ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // transition={{ duration: 5 }}
            className="fixed top-0 bottom-0 left-0 right-0 z-20 w-full h-full bg-black/60 backdrop-blur-sm overflow-hidden! flex items-center justify-center"
          >
            <ActiveProjectCard
              key={`project-active-${activeCard?.slug}`}
              data={activeCard}
              translation={t}
              setActiveCard={setActiveCard}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
      {/* <AnimatePresence>
        {activeCard ? (
          <ActiveProjectCard
            key={`project-active-${activeCard?.slug}`}
            data={activeCard}
            translation={t}
            setActiveCard={setActiveCard}
          />
        ) : null}
      </AnimatePresence> */}
    </section>
  );
}
