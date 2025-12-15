import { useState } from 'react';
import { cn } from '../utils/cn';
import { SectionHeader } from './ui/section-header';
import { IconArrowUpRight } from '@tabler/icons-react';
import { IsoIconFlower, IsoIconChart } from '../utils/icons';
import { IconArrowRight } from '@tabler/icons-react';

const icons = {
  interdisciplinary: IsoIconFlower,
  'neural-network': IsoIconChart,
};

export function WritingsSection({ translation: t }) {
  const [textDarkened, setTextDarkened] = useState('');
  const [currentLinkHovering, setCurrentLinkHovering] = useState(null);

  const darkenText = (currentLink) => {
    setTextDarkened('opacity-35 transition-all duration-300');
    setCurrentLinkHovering(currentLink);
  };

  const clarifyText = () => {
    setTextDarkened('');
    setCurrentLinkHovering(null);
  };

  return (
    <section className="px-16 not-md:px-8">
      <SectionHeader>{t.sections.writings.title}</SectionHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {t.sections.writings.articles.map((article) => (
          <a
            key={article.title}
            href={article.redirectTo}
            target="_blank"
            onMouseOver={() => darkenText(article.redirectTo)}
            onMouseOut={clarifyText}
            className={cn(
              'group cursor-pointer w-full flex transition-all duration-300',
              currentLinkHovering !== article.redirectTo && textDarkened
            )}
          >
            <div className="w-full p-3 rounded-4xl not-md:rounded-3xl flex flex-col bg-[#312F2F] ring-1 ring-[#43423F] relative">
              <div className="w-full bg-neutral-900 aspect-16/7 rounded-3xl not-md:rounded-xl col-span-1 overflow-hidden relative flex justify-center mb-3 ring-1 ring-[#FFFCF233]">
                <Icon
                  slug={article.slug}
                  className="w-12 h-12 md:w-16 md:h-16 mx-auto place-self-center"
                />
              </div>

              <p className="capitalize! font-mondwest text-lg! flex-1 mr-8 leading-6">
                {article.title.toLowerCase()}
              </p>
              <IconArrowRight
                size={20}
                className="group-hover:-rotate-45 transition-all ease-out text-[#CCC5B9] group-hover:text-neutral-100 absolute bottom-3 right-3"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Icon({ slug, className = '' }) {
  const IconComponent = icons[slug];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
}
