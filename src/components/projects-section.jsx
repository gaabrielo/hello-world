import { SectionHeader } from './ui/section-header';
import ImageGameroll from '../assets/gameroll.webp';
import ImageSkinSpin from '../assets/skinspin.png';
import ImageMovs from '../assets/movs.webp';
import ImageReads from '../assets/epubreads.png';
import ImageAstro from '../assets/astro.png';
import { cn } from '../utils/cn';

const imagePath = {
  epubreads: { path: ImageReads },
  skinspin: { path: ImageSkinSpin },
  gameroll: { path: ImageGameroll },
  astro: { path: ImageAstro, className: 'object-center' },
  movs: { path: ImageMovs, className: 'object-center' },
};

export function ProjectsSection({ translation: t }) {
  return (
    <section className="px-16 not-md:px-8">
      <SectionHeader>{t.sections.projects.title}</SectionHeader>
      <div className="grid grid-cols-3 not-md:grid-cols-1 gap-6">
        {t.sections.projects.items.map((item) => (
          <button
            key={item.slug}
            className="w-full bg-neutral-900 aspect-video rounded-4xl not-md:rounded-xl col-span-1 overflow-hidden group relative border border-[#FFFCF233]"
          >
            <div className="absolute top-0 left-0 w-full h-full animate-gradient z-10"></div>
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
