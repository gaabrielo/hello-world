import { SectionHeader } from './section-header';

export function ProjectsSection({ translation: t }) {
  return (
    <section>
      <SectionHeader>{t.sections.projects.title}</SectionHeader>
    </section>
  );
}
