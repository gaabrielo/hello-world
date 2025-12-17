import mockupLeft from '../assets/mockups/astro.png';
import mockupCenter from '../assets/mockups/gameroll.png';
import mockupRight from '../assets/mockups/realmode.png';
import { cn } from '../utils/cn';

export function HeroMockups({ className }) {
  return (
    <section className={cn('relative flex justify-center z-1', className)}>
      {/* Glow atrás dos mockups */}
      <div className="pointer-events-none absolute inset-x-0 top-4 sm:top-10 z-1 flex justify-center">
        <div
          className="
            h-72 w-[700px]
            rounded-full
            bg-[radial-gradient(circle_at_center,#fb923c,transparent_60%)]
            opacity-80
            blur-3xl
            sm:h-80 sm:w-[900px]
          "
        />
      </div>

      {/* Mockups */}
      <div className="relative z-10 flex items-center">
        <img
          src={mockupLeft}
          alt="Mockup app 1"
          className="h-56 sm:h-80 -rotate-2 -mr-4"
        />
        <img
          src={mockupCenter}
          alt="Mockup app principal"
          className="h-68 sm:h-96 drop-shadow-[0_25px_80px_rgba(0,0,0,0.8)] z-10"
        />
        <img
          src={mockupRight}
          alt="Mockup app 2"
          className="h-56 sm:h-80 rotate-2 -ml-4"
        />
      </div>
    </section>
  );
}
