import { cn } from '../../utils/cn';

export function SectionHeader({ children, className }) {
  return (
    <div>
      <h1
        className={cn(
          'font-vend-sans text-xs! uppercase font-bold! text-[#CCC5B9] bg-neutral-900 w-fit -ml-3 px-3 py-1.5 rounded-full border border-[#FFFCF233] mb-6',
          className
        )}
      >
        {children}
      </h1>
    </div>
  );
}
