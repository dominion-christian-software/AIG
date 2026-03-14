export default function HeroBanner() {
  return (
    <section className="relative bg-aig-dark text-white">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-aig-dark via-aig-dark/90 to-aig-dark/70" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <span className="inline-block bg-aig-cyan/20 text-aig-cyan text-xs font-bold uppercase tracking-wider px-3 py-1 rounded mb-4">
              Featured Article
            </span>
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-4">
              Is Genesis History? Understanding the Biblical Timeline
            </h1>
            <p className="text-lg text-white/80 mb-6 max-w-lg">
              Explore the evidence for a young earth and the historical reliability
              of the book of Genesis with our latest in-depth analysis.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-aig-teal flex items-center justify-center text-sm font-bold">
                KH
              </div>
              <div>
                <p className="text-sm font-semibold">Ken Ham</p>
                <p className="text-xs text-white/60">March 14, 2026</p>
              </div>
            </div>
            <a
              href="#"
              className="inline-block bg-aig-cyan text-white font-bold px-6 py-3 rounded hover:bg-cyan-400 transition-colors"
            >
              Read Article
            </a>
          </div>

          {/* Hero Image Placeholder */}
          <div className="hidden lg:block">
            <div className="aspect-video bg-gradient-to-br from-aig-teal to-aig-navy rounded-lg flex items-center justify-center">
              <div className="text-center opacity-60">
                <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Featured Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
