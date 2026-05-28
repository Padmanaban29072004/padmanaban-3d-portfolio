'use client';

import { useState, useEffect } from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Projects', href: '#projects' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close mobile menu on resize-to-desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      {/* Floating pill — desktop & mobile share container */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-2 py-2 rounded-full glass-pill">
        <div className="flex items-center gap-1">
          {/* Logo */}
          <a
            href="#top"
            className="px-4 py-1.5 text-white font-bold text-sm md:text-base whitespace-nowrap"
            style={{ letterSpacing: '-0.02em' }}
          >
            Padmanaban<span className="text-[#ff6b35]">.</span>
          </a>

          {/* Vertical divider — hidden on small mobile */}
          <span className="hidden sm:block w-px h-5 bg-white/10 mx-1" aria-hidden />

          {/* Desktop links */}
          <div className="hidden md:flex items-center">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-1.5 text-sm text-zinc-300 hover:text-white rounded-full hover:bg-white/[0.06] transition-colors whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger — show only when desktop links are hidden */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-9 h-9 flex items-center justify-center text-white rounded-full hover:bg-white/[0.06] transition-colors"
          >
            <span className="relative block w-4 h-px bg-white before:content-[''] before:absolute before:left-0 before:-top-[6px] before:w-4 before:h-px before:bg-white after:content-[''] after:absolute after:left-0 after:top-[6px] after:w-4 after:h-px after:bg-white" />
          </button>

          {/* Vertical divider before CTA — desktop only */}
          <span className="hidden md:block w-px h-5 bg-white/10 mx-1" aria-hidden />

          {/* CTA */}
          <a
            href="/Resume_20260415_213014_0000.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block ml-1 px-4 md:px-5 py-2 rounded-full pill-cta font-bold text-[11px] md:text-xs tracking-[0.08em] uppercase whitespace-nowrap"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* Mobile dropdown — separate floating pill underneath, only when open */}
      {open && (
        <div className="md:hidden fixed top-[72px] left-1/2 -translate-x-1/2 z-50 w-[min(92vw,420px)] rounded-3xl glass-pill p-3">
          <div className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-zinc-200 hover:text-white hover:bg-white/[0.06] rounded-2xl text-base font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/Resume_20260415_213014_0000.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 mx-1 px-5 py-3 rounded-full pill-cta font-bold text-xs tracking-[0.08em] uppercase text-center"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
}
