const highlights = [
  {
    name: "Creation Museum",
    description: "Experience biblical history with world-class exhibits, a planetarium, and stunning botanical gardens.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    name: "Ark Encounter",
    description: "Visit the life-size Noah's Ark — a one-of-a-kind themed attraction in Williamstown, Kentucky.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 17h18M5 17V9l7-5 7 5v8M9 17v-4h6v4" />
      </svg>
    ),
  },
  {
    name: "Answers Magazine",
    description: "Award-winning magazine packed with faith-affirming articles on science, history, and more.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

export default function MinistryHighlights() {
  return (
    <section className="bg-white py-12 border-t border-aig-border">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-bold text-aig-dark text-center mb-8">
          Our Ministries
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <a
              key={item.name}
              href="#"
              className="group text-center p-6 rounded-lg hover:bg-aig-light-gray transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-aig-teal/10 text-aig-teal mb-4 group-hover:bg-aig-teal group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-aig-dark mb-2">{item.name}</h3>
              <p className="text-sm text-aig-gray leading-relaxed">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
