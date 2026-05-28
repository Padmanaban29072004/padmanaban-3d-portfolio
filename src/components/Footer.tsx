import React from 'react';

const socials = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/padmanaban2907/' },
  { label: 'GitHub', url: 'https://github.com/Padmanaban29072004' },
  { label: 'instagram', url: 'https://www.instagram.com/_._padmanaban._._?igsh=bDJhdzRtYzl2emMy' },

];

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/5 px-8 md:px-16 py-[80px] lg:py-[100px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h3
            className="text-3xl md:text-5xl text-white mb-6"
            style={{ fontWeight: 700, letterSpacing: '-0.03em' }}
          >
            Let’s build something.
          </h3>
          <p className="text-lg md:text-xl text-[#999999] max-w-2xl mb-8">
            Open to opportunities, collaborations, internships, and innovative tech projects.

          </p>
          <a
            href="mailto:padmanaban.govindarajalu@gmail.com"
            className="inline-block px-8 py-4 bg-white text-[#0d0d0d] rounded-full font-bold tracking-tight hover:bg-[#ff6b35] hover:text-white transition-colors"
          >
            padmanaban.govindarajalu@gmail.com
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-12">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base text-[#999999] hover:text-white transition-colors font-medium"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#666666]">
          <span>© {new Date().getFullYear()} Padmanaban. All rights reserved.</span>
          <span>Chennai, India</span>
        </div>
      </div>
    </footer>
  );
}
