"use client";

import { useState } from "react";

const primaryNav = [
  { label: "Answers", href: "#" },
  { label: "Store", href: "#" },
  { label: "Events", href: "#" },
  { label: "Videos", href: "#" },
  { label: "Kids", href: "#" },
  { label: "Education", href: "#" },
  { label: "Donate", href: "#" },
];

const secondaryNav = [
  "Bible",
  "Culture",
  "God",
  "Creation",
  "Science",
  "Morality",
  "History",
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Utility Bar */}
      <div className="bg-aig-dark text-white text-sm">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-1.5">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-xs opacity-80">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
              United States / English
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="hover:text-aig-cyan transition-colors">My Account</a>
            <a href="#" className="hover:text-aig-cyan transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              Cart
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-aig-teal text-white">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold tracking-tight">ANSWERS</span>
              <span className="text-[10px] tracking-[0.2em] uppercase opacity-80">in Genesis</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {primaryNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium hover:text-aig-cyan transition-colors ${
                  item.label === "Donate"
                    ? "bg-aig-gold text-aig-dark px-4 py-1.5 rounded font-bold hover:bg-yellow-400 hover:text-aig-dark"
                    : ""
                }`}
              >
                {item.label}
              </a>
            ))}
            {/* Search */}
            <button className="hover:text-aig-cyan transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/20 px-4 py-4 space-y-3">
            {primaryNav.map((item) => (
              <a key={item.label} href={item.href} className="block text-sm py-1 hover:text-aig-cyan">
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Secondary Topic Navigation */}
      <div className="bg-aig-navy text-white">
        <div className="mx-auto max-w-7xl flex items-center gap-6 px-4 py-2 overflow-x-auto">
          {secondaryNav.map((topic) => (
            <a
              key={topic}
              href="#"
              className="text-xs font-medium uppercase tracking-wider whitespace-nowrap hover:text-aig-cyan transition-colors opacity-90 hover:opacity-100"
            >
              {topic}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
