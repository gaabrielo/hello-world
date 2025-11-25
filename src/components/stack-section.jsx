import { stack } from '../i18n';
import { SectionHeader } from './ui/section-header';

function StackColumn({ data, translation: t }) {
  return (
    <div className="w-full space-y-3">
      {data.map((item) => (
        <div
          key={item.tech}
          className="flex items-baseline font-mono text-neutral-100"
        >
          <span className="mr-3 font-mono!">{item.tech}</span>

          <div className="flex-1 border-b border-dashed border-[#FFFCF233]"></div>

          <span className="ml-2">
            {new Date().getFullYear() - new Date(item.year).getFullYear()}
          </span>
        </div>
      ))}

      <div className="flex justify-between items-baseline text-neutral-400 pt-1 mt-6 border-t border-[#FFFCF233] border-dashed not-md:hidden">
        <span className="mr-2 font-bold! text-sm! uppercase font-mono! font-vend-sans">
          Tech
        </span>
        <span className="ml-2 font-bold! text-sm! uppercase font-mono! font-vend-sans">
          {t.sections.stack.years}
        </span>
      </div>
    </div>
  );
}

export function StackSection({ translation: t }) {
  return (
    <section className="px-16 not-md:px-8">
      <SectionHeader>{t.sections.stack.title}</SectionHeader>

      <div className="grid grid-cols-2 not-md:grid-cols-1 md:gap-20">
        <StackColumn data={stack.slice(0, 5)} translation={t} />
        <StackColumn data={stack.slice(-5)} translation={t} />
      </div>
      <div className="flex justify-between items-baseline text-neutral-400 pt-1 mt-3 border-t border-[#FFFCF233] border-dashed md:hidden">
        <span className="mr-2 font-bold! text-sm! uppercase font-mono! font-vend-sans">
          Tech
        </span>
        <span className="ml-2 font-bold! text-sm! uppercase font-mono! font-vend-sans">
          {t.sections.stack.years}
        </span>
      </div>
    </section>
  );
}
