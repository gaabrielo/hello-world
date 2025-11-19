export function SectionHeader({ children }) {
  return (
    <div>
      <h1 className="font-vend-sans text-xs! uppercase font-bold! text-[#CCC5B9] bg-neutral-900 w-fit -ml-3 px-3 py-1.5 rounded-full border border-[#FFFCF233] mb-6">
        {children}
      </h1>
    </div>
  );
}
