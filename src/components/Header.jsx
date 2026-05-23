import React, { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#open-source", label: "Open Source" },
  { href: "#blog", label: "Blog" },
  { href: "#experiences", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full mono-glassbar sticky top-0 z-40">
      <div className="mono-shell py-4">
        <div className="relative w-full">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center justify-between">
            <div className="flex items-center gap-8">
              {navLinks.slice(0, 3).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold tracking-wide text-black/70 hover:text-black transition underline-offset-4 hover:underline decoration-black/20"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex-shrink-0 px-4">
              <div className="flex items-center gap-3">
                <div
                  className="hidden lg:flex items-center gap-1.5"
                  aria-hidden="true"
                >
                  <span className="accent-dot accent-dot--red" />
                  <span className="accent-dot accent-dot--yellow" />
                  <span className="accent-dot accent-dot--green" />
                </div>
                <a
                  href="#home"
                  className="text-sm font-semibold tracking-[0.32em] select-none hover:opacity-80 transition"
                >
                  VIJAY
                </a>
              </div>
            </div>
            <div className="flex items-center gap-8">
              {navLinks.slice(3).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold tracking-wide text-black/70 hover:text-black transition underline-offset-4 hover:underline decoration-black/20"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="mono-button text-sm px-5 py-2">
                Connect
              </a>
            </div>
          </nav>

          {/* Mobile Nav */}
          <div className="flex md:hidden items-center justify-between">
            <a
              href="#home"
              className="text-sm font-semibold tracking-[0.32em] select-none hover:opacity-80 transition"
            >
              VIJAY
            </a>
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="h-10 w-10 rounded-full border border-black/10 bg-white hover:bg-black/[0.02] transition flex items-center justify-center"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full flex justify-end z-50">
              <div className="mt-3 w-[92vw] max-w-sm mono-glass-card p-4">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="px-3 py-2 rounded-xl text-sm font-semibold text-black/80 hover:text-black hover:bg-black/[0.03] transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    className="mono-button w-full mt-1 text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Connect
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
