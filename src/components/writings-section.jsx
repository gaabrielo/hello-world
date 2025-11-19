import { useState } from 'react';
import { cn } from '../utils/cn';
import { SectionHeader } from './section-header';
import { IconCircleArrowUpRight, IconArrowUpRight } from '@tabler/icons-react';

export function WritingsSection({ translation: t }) {
  const [textDarkened, setTextDarkened] = useState('');
  const [currentLinkHovering, setCurrentLinkHovering] = useState(null);

  const darkenText = (currentLink) => {
    setTextDarkened('opacity-35 transition-opacity duration-300');
    setCurrentLinkHovering(currentLink);
  };

  const clarifyText = () => {
    setTextDarkened('');
    setCurrentLinkHovering(null);
  };

  return (
    <section>
      <div className="px-16 not-md:px-8">
        <SectionHeader>2. {t.sections.writings.title}</SectionHeader>
      </div>

      <div className="flex flex-col gap-6">
        {t.sections.writings.articles.map((article) => (
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
                'border-b border-[#FFFCF233] pb-2 transition-all duration-300 flex flex-col gap-1 ml-16 not-md:ml-8 pr-16 not-md:pr-8',
                currentLinkHovering !== article.redirectTo && textDarkened
              )}
            >
              {/* Tags */}
              <div className="flex max-md:flex-col gap-1">
                {article.tags.map((tag) => (
                  <span className="text-sm! not-md:text-xs! w-fit text-[#CCC5B9] rounded-full px-2.5 py-1 border border-[#FFFCF233] bg-neutral-900">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
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
        ))}
      </div>
    </section>
  );
}
