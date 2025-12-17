import { createFileRoute } from '@tanstack/react-router';
import { Divider } from '../components/ui/divider';
import { Breadcrumbs } from '../components/breadcrumbs';

export const Route = createFileRoute('/privacy-policy')({
  component: RouteComponent,
});

const pathToPage = [
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
];

function RouteComponent() {
  return (
    <div className="p-4 md:p-16">
      <Breadcrumbs pathList={pathToPage} />
      <h1 className="text-2xl!">Privacy Policy</h1>
      <Divider className="mb-4" />
      <p>
        All the data collected will be used only for the purposes of your
        project. All given information will be kept confidential and only
        available to you, before the project is completed.
      </p>
    </div>
  );
}
