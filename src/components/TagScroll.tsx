import React from 'react';

const tagsRow1 = [
  "Linux", "Full Stack Developer", "UI/UX Designer", "Web Developer", "Prompt Engineer"
];

const tagsRow2 = [
  "n8n Automation", "Uipath Automation", "Wireshark", "Python Developer", "Metasploit"
];

export default function TagScroll() {
  return (
    <section className="bg-[#0d0d0d] py-16 overflow-hidden border-t border-white/5">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-left, .animate-scroll-right {
            animation: none !important;
          }
        }
      `}} />

      <div className="flex flex-col gap-6">

        {/* Row 1: Scrolling Left */}
        <div className="relative flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-scroll-left w-max">
            {/* Repeat 4 times to ensure seamless infinite scroll on wide screens */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-6 px-3">
                {tagsRow1.map((tag, j) => (
                  <div key={j} className="flex items-center gap-6">
                    <span className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 to-zinc-800 uppercase tracking-tighter">
                      {tag}
                    </span>
                    <span className="text-zinc-700 text-3xl">&middot;</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="relative flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-scroll-right w-max">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-6 px-3">
                {tagsRow2.map((tag, j) => (
                  <div key={j} className="flex items-center gap-6">
                    <span className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 to-zinc-800 uppercase tracking-tighter">
                      {tag}
                    </span>
                    <span className="text-zinc-700 text-3xl">&middot;</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
