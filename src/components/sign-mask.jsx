import { cn } from '../utils/cn';

export function CvFooter({ className }) {
  return (
    <footer className={cn('mx-auto overflow-clip', className)}>
      <div className="w-full max-w-48 aspect-3/1 mask-contain mask-no-repeat mask-exclude mask-[url(/sign.svg)] animate-sign mx-auto"></div>
    </footer>
  );
}
