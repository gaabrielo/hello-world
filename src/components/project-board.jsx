import ProjectBoardImage from '../assets/projects-board.png';

export function ProjectBoard({ children }) {
  return (
    <div className="sm:px-16">
      <a
        href="https://gallery.gabrielo.xyz"
        target="_blank"
        className="cursor-pointer"
      >
        <div className="rounded-3xl border border-zinc-700/80 bg-zinc-900 p-3">
          <img
            src={ProjectBoardImage}
            alt="Click to see my projects"
            className="border border-zinc-600/80 rounded-2xl"
          />
        </div>
      </a>
    </div>
  );
}
