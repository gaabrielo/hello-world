import { cn } from '../../utils/cn';

export function Divider({ className }) {
  return <div className={cn('w-full h-px bg-[#514F4C]', className)}></div>;
}
