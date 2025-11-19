import { SectionHeader } from './section-header';
import ImageGameroll from '../assets/gameroll.webp';
import ImageSkinSpin from '../assets/skinspin.png';
import ImageMovs from '../assets/movs.webp';

const imagePath = {
  skinspin: ImageSkinSpin,
  gameroll: ImageGameroll,
  movs: ImageMovs,
};

export function ProjectsSection({ translation: t }) {
  return (
    <section>
      <SectionHeader>{t.sections.projects.title}</SectionHeader>
      <div className="grid grid-cols-3 not-md:grid-cols-1 gap-6">
        {t.sections.projects.items.map((item) => (
          <button className="w-full bg-neutral-900 aspect-video rounded-4xl not-md:rounded-xl col-span-1 overflow-hidden group relative border border-[#FFFCF233]">
            <div className="absolute top-0 left-0 w-full h-full animate-gradient z-10"></div>
            <img
              src={imagePath[item.slug]}
              alt={item.title}
              className="aspect-video object-cover w-full h-full object-top transition-all duration-300 group-hover:scale-110"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
