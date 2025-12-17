import { IconExternalLink } from '@tabler/icons-react';
import ProjectBoardImage from '../assets/projects-board.png';

export function ProjectBoard({ children }) {
  return (
    <div className="sm:px-16">
      <div className="pointer-events-none absolute inset-x-0 top-8 z-1 flex justify-center md:sr-only">
        <div
          className="
            h-48 w-[700px]
            rounded-full
            bg-[radial-gradient(circle_at_center,#fb923c,transparent_60%)]
            opacity-80
            blur-3xl
          "
        />
      </div>

      <a
        href="https://gallery.gabrielo.xyz"
        target="_blank"
        className="cursor-pointer relative z-2 group transition-all"
      >
        <div className="rounded-3xl border border-zinc-700/80 bg-zinc-900 p-2 md:p-3">
          <img
            src={ProjectBoardImage}
            alt="Click to see my projects"
            className="border border-zinc-600/80 rounded-2xl md:rounded-xl"
          />
        </div>

        <button className="absolute bottom-4 right-4 md:bottom-6 md:right-6 border border-zinc-500/60 opacity-80 group-hover:opacity-100 bg-zinc-900 rounded-full p-1.5 transition-all">
          <IconExternalLink
            size={20}
            className="group-hover:brightness-110 transition-all w-4 h-4 md:w-6 md:h-6"
          />
        </button>
      </a>
    </div>
  );
}
