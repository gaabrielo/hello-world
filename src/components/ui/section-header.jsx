import { cn } from '../../utils/cn';
import { IconAsterisk } from '@tabler/icons-react';

const width = 92;
const height = 56;
export function SectionHeader({ children, className }) {
  return (
    <div className="w-full text-center sm:text-left mb-14">
      {/* <h1
        className={cn(
          'font-mondwest text-2xl! text-[#CCC5B9] px-5 py-1.5 rounded-full border border-[#FFFCF233]',
          className
        )}
      >
        {children}
      </h1> */}

      <div
        className={cn(
          'relative inline-flex items-center',
          'bg-[#1E1D1D] border border-[#43423F]',
          'rounded-r-xl rounded-bl-xl -ml-6',
          className
        )}
        style={{
          width,
          height,
          padding: '0 16px',
        }}
      >
        <span
          aria-hidden
          className="absolute -top-[12px] -left-px"
          style={{ width: width * 0.4, height: 12 }}
        >
          <span
            className="block w-full h-full bg-[#1E1D1D] border border-[#43423F]"
            style={{
              borderBottom: 'none',
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
          />
        </span>

        <span className="font-mondwest text-3xl! ml-6 mt-3 text-[#CCC5B9] leading-none select-none">
          {children}
        </span>
      </div>
    </div>
  );
}
