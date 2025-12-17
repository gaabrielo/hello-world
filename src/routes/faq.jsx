import { createFileRoute } from '@tanstack/react-router';
import { Breadcrumbs } from '../components/breadcrumbs';
import { Divider } from '../components/ui/divider';
import { IconPlus } from '@tabler/icons-react';

export const Route = createFileRoute('/faq')({
  component: RouteComponent,
});

const pathToPage = [
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact' },
  { name: 'FAQ', path: '/faq' },
];

function RouteComponent() {
  return (
    <div className="p-4 md:p-16">
      <Breadcrumbs pathList={pathToPage} />
      <h1 className="text-2xl!">FAQ</h1>
      <Divider className="mb-4" />
      <div className="border-b border-zinc-400/40 pb-4 mt-3 gap-1 flex flex-col">
        <div className="flex items-center gap-2">
          <IconPlus size={20} />
          <p className="text-xl!">How does it work?</p>
        </div>
        <span className="text-zinc-300 ml-7">
          We talk, I get the information about what you need for your dream
          website. That can be guidelines of your brand, the target audience,
          and the goals of your project.
        </span>
      </div>

      <div className="border-b border-zinc-400/40 pb-4 mt-3 gap-2 flex flex-col">
        <div className="flex items-center gap-2">
          <IconPlus size={20} />
          <p className="text-xl!">Do I own my website?</p>
        </div>
        <span className="text-zinc-300 ml-7">
          Absolutely, you own your website! You can transfer the code after is
          done to anywhere you want, if that is your goal. But I will do the
          deployment and maintenance for you.
        </span>
      </div>
    </div>
  );
}
