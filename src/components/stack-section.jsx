import { SectionHeader } from './ui/section-header';

export function StackSection({ translation: t }) {
  return (
    <section className="px-16 not-md:px-8">
      <SectionHeader>{t.sections.projects.title}</SectionHeader>
    </section>
  );
}
