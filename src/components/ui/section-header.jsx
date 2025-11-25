import { cn } from '../../utils/cn';
import { IconAsterisk } from '@tabler/icons-react';

export function SectionHeader({ children, className }) {
  return (
    <div className="w-full flex justify-center mb-14">
      <h1
        className={cn(
          'font-vend-sans text-xs! uppercase font-bold! text-[#CCC5B9] bg-neutral-900 w-fit -ml-3 px-3 py-1.5 rounded-full border border-[#FFFCF233] flex items-center gap-1',
          className
        )}
      >
        <IconAsterisk size={14} color="#CCC5B9" />
        {children}
      </h1>
    </div>
  );
}
