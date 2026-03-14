const footerSections = [
  {
    title: "Menu",
    links: ["Answers", "Store", "Events", "Videos", "Kids", "Education"],
  },
  {
    title: "About",
    links: ["About Us", "Statement of Faith", "Leadership", "Careers", "Press Room"],
  },
  {
    title: "Our Sites",
    links: ["Creation Museum", "Ark Encounter", "Answers Magazine", "Answers Research Journal"],
  },
  {
    title: "Help",
    links: ["Contact Us", "FAQ", "Shipping & Returns", "Privacy Policy", "Terms of Service"],
  },
];

const socialLinks = [
  { name: "Facebook", icon: "f" },
  { name: "Twitter", icon: "𝕏" },
  { name: "Instagram", icon: "◻" },
  { name: "YouTube", icon: "▶" },
];

export default function Footer() {
  return (
    <footer className="bg-aig-dark text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <div className="mb-4">
              <span className="text-xl font-bold tracking-tight">ANSWERS</span>
              <br />
              <span className="text-[10px] tracking-[0.2em] uppercase opacity-80">in Genesis</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Proclaiming the authority of the Bible from the very first verse.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs hover:bg-aig-cyan transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-3 text-aig-gold">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            Customer Service: <a href="tel:1-800-778-3390" className="text-white/70 hover:text-white">1-800-778-3390</a>
          </p>
          <a
            href="#"
            className="bg-aig-gold text-aig-dark font-bold text-sm px-5 py-2 rounded hover:bg-yellow-400 transition-colors"
          >
            Donate Today
          </a>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <p className="text-xs text-white/40 text-center">
            &copy; 2026 Answers in Genesis. All rights reserved. Answers in Genesis is a 501(c)(3) non-profit organization.
          </p>
        </div>
      </div>
    </footer>
  );
}
