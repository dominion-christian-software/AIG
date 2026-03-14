const videos = [
  {
    title: "Answers News: Weekly Update",
    duration: "32:15",
    topic: "News",
  },
  {
    title: "Creation Museum: Behind the Scenes",
    duration: "18:42",
    topic: "Museum",
  },
  {
    title: "Ark Encounter: Engineering Marvel",
    duration: "24:08",
    topic: "Ark",
  },
  {
    title: "Dinosaurs and the Bible",
    duration: "45:30",
    topic: "Science",
  },
];

export default function VideoSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-aig-dark">Latest Videos</h2>
          <a href="#" className="text-sm font-medium text-aig-cyan hover:underline">
            View All Videos &rarr;
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <a key={video.title} href="#" className="group block">
              {/* Video Thumbnail Placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-aig-dark to-aig-navy rounded-lg overflow-hidden mb-3">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-aig-cyan/80 transition-colors">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
                  {video.duration}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-aig-dark group-hover:text-aig-teal transition-colors leading-snug">
                {video.title}
              </h3>
              <p className="text-xs text-aig-gray/70 mt-1">{video.topic}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
