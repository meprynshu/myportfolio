export function GridLines() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 hidden md:block">
      <div className="mx-auto h-full max-w-6xl px-8">
        <div className="grid h-full grid-cols-12 border-r border-grid/80">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={`grid-line-${index}`} className="border-l border-grid/80" />
          ))}
        </div>
      </div>
    </div>
  )
}
