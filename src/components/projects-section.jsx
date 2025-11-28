import { SectionHeader } from './ui/section-header';
import ImageGameroll from '../assets/gameroll.webp';
import ImageSkinSpin from '../assets/skinspin.png';
import ImageMovs from '../assets/movs.webp';
import ImageReads from '../assets/epubreads.png';
import ImageAstro from '../assets/astro.png';
import ImageLupulo from '../assets/lupulo.png';
import { cn } from '../utils/cn';

const imagePath = {
  epubreads: { path: ImageReads },
  skinspin: { path: ImageSkinSpin },
  gameroll: { path: ImageGameroll },
  astro: { path: ImageAstro, className: 'object-center' },
  movs: { path: ImageMovs, className: 'object-center' },
  lupulo: { path: ImageLupulo, className: 'object-center' },
};

export function ProjectsSection({ translation: t }) {
  return (
    <section className="px-16 not-md:px-8">
      <SectionHeader>{t.sections.projects.title}</SectionHeader>
      <div className="grid grid-cols-3 not-md:grid-cols-1 gap-6">
        {t.sections.projects.items.map((item) => (
          <button
            key={item.slug}
            className="w-full bg-neutral-900 aspect-video rounded-4xl not-md:rounded-xl col-span-1 overflow-hidden group border border-[#FFFCF233] relative"
          >
            {/* shiny effect */}
            <div className="absolute top-0 left-0 w-full h-full animate-gradient z-1"></div>
            {/* status of development badge */}
            <div className="absolute z-2 bottom-2 right-6 flex items-center gap-2 px-3 py-1 text-neutral-200 backdrop-blur-md bg-black/50 shadow-md ring-1 ring-white/10 rounded-full">
              {item.inDevelopment ? (
                <>
                  <div className="relative h-2 w-2">
                    <div className="relative h-2 w-2 rounded-full bg-neutral-400" />
                  </div>
                  <span className="text-xs! font-vend-sans! drop-shadow-[0_0_4px_rgba(0,0,0,0.9)]">
                    In progress
                  </span>
                </>
              ) : (
                <>
                  <div className="relative h-2 w-2">
                    <div className="absolute -inset-0.5 rounded-full bg-green-500/60 animate-ping"></div>
                    <div className="relative h-2 w-2 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs! font-vend-sans! drop-shadow-[0_0_4px_rgba(0,0,0,0.9)]">
                    Live
                  </span>
                </>
              )}
            </div>
            <img
              src={imagePath[item.slug]?.path}
              alt={item.title}
              className={cn(
                'aspect-video object-cover w-full h-full transition-all duration-300 group-hover:scale-110 object-top',
                imagePath[item.slug]?.className
              )}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
