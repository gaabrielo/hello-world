import { useContext, useEffect } from 'react';
import { motion } from 'motion/react';
import { projectImagePath } from '../../i18n';
import { cn } from '../../utils/cn';
import { useClickAway } from '@uidotdev/usehooks';
import { ProjectExternalButton } from './project-external-button';
import { IconArrowRight } from '@tabler/icons-react';
import { IconX } from '@tabler/icons-react';

function ProjectCard({ data, setActiveCard, translation: t, ...rest }) {
  return (
    <motion.div
      layoutId={`project-card-${data.slug}`}
      className="group"
      whileTap={{ scale: 0.98 }}
      onClick={() => setActiveCard(data)}
      // style={{ borderRadius: 20 }}
      {...rest}
    >
      <button
        onClick={() => setActiveCard(data)}
        className="w-full bg-neutral-900 aspect-video rounded-4xl not-md:rounded-3xl col-span-1 overflow-hidden group border border-[#FFFCF233] relative"
      >
        {/* shiny effect */}
        <div className="absolute top-0 left-0 w-full h-full animate-gradient z-1"></div>
        {/* status of development badge */}
        <ProjectDevelopmentStatus
          status={data.inDevelopment}
          label={
            data.inDevelopment
              ? t.sections.projects.status.inDevelopment
              : t.sections.projects.status.live
          }
        />
        <motion.img
          layoutId={`project-cover-${data.slug}`}
          src={projectImagePath[data.slug]?.path}
          alt={data.title}
          className={cn(
            'aspect-video object-cover w-full h-full transition-all duration-300 group-hover:scale-110 object-top',
            projectImagePath[data.slug]?.className
          )}
        />
      </button>
    </motion.div>
  );
}

function ActiveProjectCard({ data, translation: t, setActiveCard, ...rest }) {
  const ref = useClickAway(() => setActiveCard(null));

  useEffect(() => {
    // Save current scroll position
    const scrollY = window.scrollY;

    // Block scroll
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    return () => {
      // Restore scroll
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';

      // Restore scroll position
      window.scrollTo(0, scrollY);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      layoutId={`project-card-${data.slug}`}
      // onClick={() => setActiveCard(data)}
      className="relative top-0 bottom-0 md:top-auto md:bottom-auto left-0 right-0 max-w-lg mx-auto z-21 bg-[#312F2F] overflow-clip md:rounded-xl not-md:h-screen flex flex-col"
      {...rest}
    >
      <motion.img
        layoutId={`project-cover-${data.slug}`}
        src={projectImagePath[data.slug]?.path}
        alt={data.title}
        className={cn(
          'aspect-video object-cover w-full object-top',
          projectImagePath[data.slug]?.className
        )}
      />
      <motion.button
        onClick={() => setActiveCard(null)}
        className="absolute z-22 top-2 right-2 p-1.5 text-neutral-200 backdrop-blur-md bg-black/50 shadow-md ring-1 ring-white/10 rounded-full"
      >
        <IconX size={20} />
      </motion.button>
      <motion.div
        layoutId={`project-description-${data.slug}`}
        className="p-6 self-stretch"
      >
        {/* <span className="text-xs! font-bold! uppercase font-mono! font-vend-sans text-neutral-400">
          TITLE
        </span> */}
        <h1 className="font-mondwest text-3xl! leading-6">{data.title}</h1>

        <span className="text-xs! font-bold! mt-6 inline-block uppercase font-mono! font-vend-sans text-neutral-400">
          STACK
        </span>
        <div className="max-w-60 text-neutral-300">{data.stack.join(', ')}</div>

        <div className="w-full border border-[#FFFCF233] border-b-0 flex content-stretch gap-6 mt-6 px-6">
          <Icon slug={data.slug} className="w-20 h-20 self-center my-6" />
          <div className="w-px bg-[#FFFCF233]"></div>
          <p className="flex-2 self-center py-6">{data.description}</p>
        </div>

        <div className="flex flex-col md:flex-row">
          {Object.keys(data.links).map((externalKey, index) => {
            const externalUrl = data.links[externalKey];
            return (
              <ProjectExternalButton
                key={externalKey}
                className={cn(
                  'flex-1 justify-center p-4 border border-[#FFFCF233] hover:bg-neutral-700/40 transition-all group',
                  index % 2 !== 0 && 'md:border-l-0'
                )}
                onClick={() => window.open(externalUrl, '_blank')}
              >
                <ProjectExternalButton.Text>
                  {externalKey}
                </ProjectExternalButton.Text>
                <IconArrowRight
                  size={20}
                  className="group-hover:-rotate-45 transition-all ease-out text-[#CCC5B9] group-hover:text-neutral-100"
                />
              </ProjectExternalButton>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Icon({ slug, className = '' }) {
  const IconComponent = projectImagePath[slug]?.icon;
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
}

function ProjectDevelopmentStatus({ status, label }) {
  function getBadge() {
    switch (status) {
      case false:
        return (
          <>
            <div className="relative h-2 w-2">
              <div className="absolute -inset-0.5 rounded-full bg-green-500/60 animate-ping"></div>
              <div className="relative h-2 w-2 rounded-full bg-green-500" />
            </div>
            <span className="text-xs! font-vend-sans! drop-shadow-[0_0_4px_rgba(0,0,0,0.9)]">
              {label}
            </span>
          </>
        );
      default:
        return (
          <>
            <div className="relative h-2 w-2">
              <div className="relative h-2 w-2 rounded-full bg-neutral-400" />
            </div>
            <span className="text-xs! font-vend-sans! drop-shadow-[0_0_4px_rgba(0,0,0,0.9)]">
              {label}
            </span>
          </>
        );
    }
  }

  return (
    <div className="absolute z-2 bottom-2 right-2 flex items-center gap-2 px-3 py-1 text-neutral-200 backdrop-blur-md bg-black/50 shadow-md ring-1 ring-white/10 rounded-full">
      {getBadge()}
    </div>
  );
}

export { ProjectCard, ActiveProjectCard };
