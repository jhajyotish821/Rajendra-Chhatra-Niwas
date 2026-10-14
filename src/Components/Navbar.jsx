
import { useState } from "react";
import logo from "../Assets/logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Notice Board", href: "#notices" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top heritage strip */}
      

      {/* Main navbar */}
      <nav className="border-b border-[#E7D6CC] bg-[#FFFCF8] shadow-[0_4px_20px_rgba(75,17,29,0.05)]">
        <div className="mx-auto flex min-h-[88px] max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">

          {/* Actual logo and brand */}
          <a
            href="#home"
            onClick={closeMenu}
            aria-label="Rajendra Chhatra Niwas home"
            className="flex min-w-0 items-center gap-3"
          >
            <img
              src={logo}
              alt="Rajendra Chhatra Niwas logo"
              className="h-12 w-12 shrink-0 rounded-full object-contain sm:h-14 sm:w-14"
            />

            <div className="min-w-0">
              <h1 className="font-serif text-sm font-bold tracking-[0.06em] text-[#741F2B] sm:text-base lg:text-lg">
                RAJENDRA CHHATRA NIWAS
              </h1>

              <p className="mt-1 text-[9px] tracking-[0.19em] text-[#806B67] sm:text-[10px]">
                EST. 1948 · KOLKATA
              </p>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative whitespace-nowrap py-3 text-sm transition-colors duration-200 hover:text-[#741F2B] ${
                  index === 0
                    ? "font-semibold text-[#741F2B]"
                    : "text-[#332B2B]"
                }`}
              >
                {link.name}

                {index === 0 && (
                  <span className="absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-[#741F2B]" />
                )}
              </a>
            ))}

            <a
              href="#login"
              className="group inline-flex items-center gap-3 rounded-lg bg-[#741F2B] px-5 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#4B111D] hover:shadow-md"
            >
              Login
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E4C9BE] text-[#741F2B] transition hover:bg-[#F5EAE4] lg:hidden"
          >
            {menuOpen ? (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          className={`grid transition-[grid-template-rows] duration-300 lg:hidden ${
            menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-[#E7D6CC] bg-[#FFFCF8] px-4 pb-5 pt-3 sm:px-6">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`mb-1 flex items-center justify-between rounded-lg px-4 py-3 text-sm transition-colors ${
                    index === 0
                      ? "bg-[#F4E7E1] font-semibold text-[#741F2B]"
                      : "text-[#332B2B] hover:bg-[#F8F0EB] hover:text-[#741F2B]"
                  }`}
                >
                  {link.name}
                  <span className="text-[#741F2B]">→</span>
                </a>
              ))}

              <a
                href="#login"
                onClick={closeMenu}
                className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#741F2B] px-4 py-3 font-semibold text-white transition hover:bg-[#4B111D]"
              >
                Login <span>→</span>
              </a>

              <p className="mt-5 text-center text-[10px] tracking-[0.18em] text-[#806B67]">
                ESTABLISHED 1948 · KOLKATA
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
