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
      <SectionHeader>{t.sections.writings.title}</SectionHeader>

      <div className="flex flex-col gap-6">
        {t.sections.writings.articles.map((article) => (
          <a
            key={article.title}
            href={article.redirectTo}
            target="_blank"
            onMouseOver={() => darkenText(article.redirectTo)}
            onMouseOut={clarifyText}
            className="cursor-pointer"
          >
            <div
              className={cn(
                'border-b border-[#FFFCF233] pb-2 transition-all duration-300 flex flex-col gap-1',
                currentLinkHovering !== article.redirectTo && textDarkened
              )}
            >
              <div className="flex gap-0 items-center">
                <p className="capitalize! font-vend-sans px-2.5">
                  {article.title.toLowerCase()}
                </p>
                <IconArrowUpRight color={'#fffcf2'} size={20} />
              </div>
              <div className="flex gap-1">
                {article.tags.map((tag) => (
                  <span className="text-sm! text-[#CCC5B9] rounded-full px-2.5 py-1 border border-[#FFFCF233] bg-neutral-900">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
