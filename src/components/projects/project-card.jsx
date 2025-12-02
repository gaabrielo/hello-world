import { useState, useEffect } from 'react';
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
      layoutId={`card-${data.slug}`}
      className="w-full bg-neutral-900 aspect-video col-span-1 overflow-hidden group border border-[#FFFCF233] relative cursor-pointer"
      whileTap={{ scale: 0.98 }}
      onClick={() => setActiveCard(data)}
      style={{ borderRadius: 28 }}
      {...rest}
    >
      {/* shiny effect */}
      <motion.div
        layoutId={`shiny-${data.slug}`}
        className="absolute w-full h-full opacity-0! inset-0 z-1"
        // style={{ opacity: 0 }}
      ></motion.div>
      {/* status of development badge */}
      <ProjectDevelopmentStatus
        slug={data.slug}
        status={data.inDevelopment}
        label={
          data.inDevelopment
            ? t.sections.projects.status.inDevelopment
            : t.sections.projects.status.live
        }
      />
      <motion.img
        layoutId={`cover-${data.slug}`}
        src={projectImagePath[data.slug]?.path}
        alt={data.title}
        className={cn(
          'object-cover absolute w-full h-full inset-0 object-top',
          projectImagePath[data.slug]?.className
        )}
      />
      <motion.button
        aria-hidden
        tabIndex={-1}
        layoutId={`close-card-${data.slug}`}
        onClick={() => setActiveCard(null)}
        className="absolute z-22 top-2 right-2 p-1.5 text-neutral-200 backdrop-blur-md bg-black/50 shadow-md ring-1 ring-white/10 rounded-full"
        style={{ position: 'absolute', top: '100%', opacity: 0 }}
      >
        <IconX size={20} />
      </motion.button>
      <motion.div
        layoutId={`project-description-${data.slug}`}
        className="p-6 self-stretch"
        style={{ position: 'absolute', top: '100%', opacity: 0 }}
      >
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
                className="flex-1 justify-center p-4 border border-[#FFFCF233] hover:bg-neutral-700/40 transition-all group"
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

function ActiveProjectCard({ data, translation: t, setActiveCard, ...rest }) {
  const [isMobile, setIsMobile] = useState();
  const ref = useClickAway(() => setActiveCard(null));

  useEffect(() => {
    const scrollY = window.scrollY;
    const screenWidth = window.innerWidth;

    setIsMobile(screenWidth <= 768);

    // Block the scroll
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);
    };
  }, []);

  return (
    <motion.div
      layoutId={`card-${data.slug}`}
      ref={ref}
      className="fixed top-[50vh] -translate-y-1/2 left-1/2 -translate-x-1/2 max-w-lg z-21 bg-[#312F2F] overflow-clip not-md:overflow-y-auto flex flex-col not-md:w-full not-md:h-full"
      style={{ borderRadius: isMobile ? 0 : 28 }}
      {...rest}
    >
      <div className="relative">
        {/* shiny effect */}
        <motion.div
          layoutId={`shiny-${data.slug}`}
          className="absolute w-full h-full inset-0 animate-sign opacity-50! z-1"
          // style={{ opacity: 50 }}
        ></motion.div>

        <ProjectDevelopmentStatus
          slug={data.slug}
          status={data.inDevelopment}
          label={
            data.inDevelopment
              ? t.sections.projects.status.inDevelopment
              : t.sections.projects.status.live
          }
        />
        <motion.img
          layoutId={`cover-${data.slug}`}
          src={projectImagePath[data.slug]?.path}
          alt={data.title}
          className={cn(
            'aspect-video object-cover w-full object-top',
            projectImagePath[data.slug]?.className
          )}
        />
        <motion.button
          layoutId={`close-card-${data.slug}`}
          onClick={() => setActiveCard(null)}
          className="absolute z-22 top-2 right-2 p-1.5 text-neutral-200 backdrop-blur-md bg-black/50 shadow-md ring-1 ring-white/10 rounded-full"
        >
          <IconX size={20} />
        </motion.button>
      </div>
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
                  index % 2 !== 0 && 'md:border-l-0 not-md:border-t-0'
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

function ProjectDevelopmentStatus({ status, label, slug }) {
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
    <motion.div
      layoutId={`project-status-${slug}`}
      className="absolute z-2 bottom-2 right-2 flex items-center gap-2 px-3 py-1 text-neutral-200 backdrop-blur-md bg-black/50 shadow-md ring-1 ring-white/10 rounded-full"
    >
      {getBadge()}
    </motion.div>
  );
}

export { ProjectCard, ActiveProjectCard };
