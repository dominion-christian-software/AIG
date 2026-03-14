interface ArticleCard {
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageLabel: string;
}

const featuredArticles: ArticleCard[] = [
  {
    category: "Creation",
    title: "The Fossil Record: What Does It Really Show?",
    excerpt: "A comprehensive look at what the fossil record actually demonstrates about the history of life on earth.",
    author: "Dr. Andrew Snelling",
    date: "March 13, 2026",
    imageLabel: "Fossils",
  },
  {
    category: "Bible",
    title: "Why Biblical Authority Matters for the Church Today",
    excerpt: "Understanding why the foundation of Scripture is essential for every believer and every church.",
    author: "Ken Ham",
    date: "March 12, 2026",
    imageLabel: "Bible Study",
  },
  {
    category: "Science",
    title: "Genetics and the Human Family: One Race",
    excerpt: "How genetics confirms the biblical teaching that all humans are descended from one couple.",
    author: "Dr. Nathaniel Jeanson",
    date: "March 11, 2026",
    imageLabel: "DNA",
  },
  {
    category: "Culture",
    title: "Responding to the Rise of Secularism",
    excerpt: "Practical ways Christians can stand firm in an increasingly secular culture while sharing truth.",
    author: "Avery Foley",
    date: "March 10, 2026",
    imageLabel: "Culture",
  },
  {
    category: "Morality",
    title: "The Foundation of Right and Wrong",
    excerpt: "Without a biblical foundation, morality becomes subjective and relative. Here is why it matters.",
    author: "Dr. Georgia Purdom",
    date: "March 9, 2026",
    imageLabel: "Ethics",
  },
  {
    category: "History",
    title: "Evidence for the Global Flood of Noah",
    excerpt: "Examining geological and historical evidence that points to a worldwide flood as described in Genesis.",
    author: "Dr. Tim Clarey",
    date: "March 8, 2026",
    imageLabel: "Geology",
  },
];

function ArticleCardComponent({ article }: { article: ArticleCard }) {
  return (
    <a href="#" className="group block bg-white rounded-lg shadow-sm border border-aig-border overflow-hidden hover:shadow-md transition-shadow">
      {/* Image Placeholder */}
      <div className="aspect-video bg-gradient-to-br from-aig-teal/10 to-aig-navy/10 flex items-center justify-center">
        <span className="text-aig-gray/40 text-sm">{article.imageLabel}</span>
      </div>
      {/* Content */}
      <div className="p-4">
        <span className="text-xs font-bold uppercase tracking-wider text-aig-cyan">
          {article.category}
        </span>
        <h3 className="mt-2 text-lg font-bold text-aig-dark leading-snug group-hover:text-aig-teal transition-colors">
          {article.title}
        </h3>
        <p className="mt-2 text-sm text-aig-gray leading-relaxed line-clamp-2">
          {article.excerpt}
        </p>
        <div className="mt-3 flex items-center gap-2 text-xs text-aig-gray/70">
          <span className="font-medium">{article.author}</span>
          <span>&middot;</span>
          <span>{article.date}</span>
        </div>
      </div>
    </a>
  );
}

export default function ContentGrid() {
  return (
    <section className="bg-aig-light-gray py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-aig-dark">Latest Articles</h2>
          <a href="#" className="text-sm font-medium text-aig-cyan hover:underline">
            View All &rarr;
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <ArticleCardComponent key={article.title} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
