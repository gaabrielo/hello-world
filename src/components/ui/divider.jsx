import { cn } from '../../utils/cn';

export function Divider({ className, variant = 'horizontal' }) {
  if (variant === 'vertical')
    return <div className={cn('w-px h-full bg-[#514F4C]', className)}></div>;
  return <div className={cn('w-full h-px bg-[#514F4C]', className)}></div>;
}
