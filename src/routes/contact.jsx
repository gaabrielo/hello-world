import { createFileRoute } from '@tanstack/react-router';
// import { FeaturesSection } from '../components/sections/features-section';
import { ParallaxCard } from '../components/parallax-card';
import { IconCalendar } from '@tabler/icons-react';
import { IconCalendarEvent } from '@tabler/icons-react';
import { FeaturesSection } from '../components/sections/features-section';
import { DrawnArrow } from '../utils/icons';

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full flex flex-col items-start min-h-screen p-8 text-[#121212]">
      <div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-2">
        <div className="col-span-1 bg-[#E0E0E0] rounded-[2.5rem] flex flex-col items-start justify-between p-10 not-sm:aspect-square!">
          <p className="font-mondwest uppercase text-3xl! leading-9 lg:text-7xl! lg:leading-15">
            stop wasting money on AI that doesn’t understand your business
          </p>
          <button className="bg-[#FF6800] text-lg sm:text-xl! text-white px-5 py-3.5 rounded-full flex items-center gap-3.5 w-full sm:w-fit justify-center mt-10 sm:mt-0">
            <IconCalendarEvent size={24} />
            Book a Strategy Call
          </button>
        </div>

        <div className="w-full h-full col-span-1">
          <ParallaxCard
            globalTrigger={true}
            className="not-sm:h-full! not-sm:aspect-square!"
          />
        </div>
      </div>

      <div className="flex justify-between mt-20 items-end w-full">
        <DrawnArrow className="not-sm:absolute not-sm:top-[80vh] not-sm:z-40" />
        <p className="font-mondwest uppercase text-3xl! leading-9 lg:text-5xl! text-right lg:leading-12 max-w-5xl text-zinc-300 mt-12 sm:mt-0">
          I build robust, scalable web applications designed to convert. No
          ghosting. No spaghetti code. Just results.
        </p>
      </div>

      <FeaturesSection />
    </div>
  );
}
