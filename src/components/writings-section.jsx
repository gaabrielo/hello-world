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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
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
            <div className="w-full p-3 rounded-4xl not-md:rounded-3xl flex flex-col bg-[#312F2F] ring-1 ring-[#FFFCF233] relative">
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

        {/* {t.sections.writings.articles.map((article) => (
          <a
            key={article.title}
            href={article.redirectTo}
            target="_blank"
            onMouseOver={() => darkenText(article.redirectTo)}
            onMouseOut={clarifyText}
            className="group cursor-pointer"
          >
            <div
              className={cn(
                'border-b border-dashed border-[#FFFCF233] pb-2 transition-all duration-300 flex flex-col gap-1 ml-16 not-md:ml-8 pr-16 not-md:pr-8',
                currentLinkHovering !== article.redirectTo && textDarkened
              )}
            >
            
              <div className="flex max-md:flex-col gap-1">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm! not-md:text-xs! w-fit text-[#CCC5B9] rounded-full px-2.5 py-1 border border-[#FFFCF233] bg-neutral-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              
              <div className="grid grid-cols-4 gap-1.5">
                <p className="capitalize! font-vend-sans pl-2.5 col-span-3">
                  {article.title.toLowerCase()}
                </p>
                <IconArrowUpRight
                  size={20}
                  className="col-span-1 ml-auto mr-0 self-end text-[#CCC5B9] group-hover:text-gray-50 transition-all duration-300"
                />
              </div>
            </div>
          </a>
        ))} */}
      </div>
    </section>
  );
}

function Icon({ slug, className = '' }) {
  const IconComponent = icons[slug];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
}
