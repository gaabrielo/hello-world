import { Link } from '@tanstack/react-router';
import { IconChevronRight } from '@tabler/icons-react';
import { IconHome } from '@tabler/icons-react';
import { cn } from '../utils/cn';

function Breadcrumbs({ pathList }) {
  return (
    <div className="flex gap-1 items-center mb-4 bg-zinc-900 w-fit p-1.5 rounded-xl border border-zinc-600/40">
      {pathList.map((path, index) => (
        <>
          <BreadcrumbsLink key={index} to={path.path}>
            {path.name}
          </BreadcrumbsLink>
          {index < pathList.length - 1 && <IconChevronRight size={14} />}
        </>
      ))}
    </div>
  );
}

function BreadcrumbsLink({ to, className, children, ...rest }) {
  return (
    <Link
      to={to}
      className={cn(
        'flex items-center gap-1 transition-all text-zinc-200 hover:text-zinc-50 [&.active]:text-zinc-400 [&.active]:cursor-default bg-zinc-950 px-2 py-0.5 rounded-lg border border-zinc-600/60',
        className
      )}
      {...rest}
    >
      {to === '/' && <IconHome size={16} />}
      {children}
    </Link>
  );
}

Breadcrumbs.Link = BreadcrumbsLink;

export { Breadcrumbs };
