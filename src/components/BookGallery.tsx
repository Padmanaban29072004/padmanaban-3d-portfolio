'use client';

import { useState, useRef } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';

export default function BookGallery() {
  const { gallery } = PORTFOLIO_CONFIG;
  const [activePage, setActivePage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Dynamically build sheets from gallery items in pairs (front/back)
  const sheets = [];
  for (let i = 0; i < gallery.length; i += 2) {
    sheets.push({
      front: gallery[i],
      back: gallery[i + 1] || { image: '' },
    });
  }
  const totalSheets = sheets.length;

  const nextPage = () => {
    if (activePage < totalSheets) {
      setActivePage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (activePage > 0) {
      setActivePage((prev) => prev - 1);
    }
  };

  // Drag handler for swipe gesture on the book container
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      // Swiped left -> next page
      nextPage();
    } else if (info.offset.x > swipeThreshold) {
      // Swiped right -> prev page
      prevPage();
    }
  };

  return (
    <section className="bg-[#0c0c0f] py-[80px] lg:py-[120px] px-4 md:px-8 border-t border-white/5 relative overflow-hidden select-none">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#ff6b35]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <span className="text-xs font-bold tracking-widest text-[#ff6b35] uppercase bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded-full">
            Visual Log
          </span>
          <h3
            className="text-3xl md:text-5xl text-white mt-4 mb-4 font-bold tracking-tight"
            style={{ letterSpacing: '-0.03em' }}
          >
            Interactive Gallery
          </h3>
          <p className="text-sm md:text-base text-[#999999] max-w-xl mx-auto">
            Swipe left or right to flip through the pages, or click the navigation controls below.
          </p>
        </div>

        {/* 3D Book Container */}
        <div className="flex flex-col items-center justify-center gap-8">
          
          <motion.div
            ref={containerRef}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="relative w-full max-w-[850px] aspect-[14/10] sm:aspect-[16/10] md:aspect-[18/10] lg:aspect-[20/10] cursor-grab active:cursor-grabbing preserve-3d"
            style={{
              perspective: '1500px',
            }}
          >
            
            {/* Book Stacking Thickness Simulation (adds 3D border sheets beneath) */}
            <div className="absolute left-[2%] right-[2%] top-[1%] bottom-[1%] bg-[#121214] border border-white/5 rounded-2xl shadow-2xl opacity-20 -translate-z-3" />
            <div className="absolute left-[1%] right-[1%] top-[0.5%] bottom-[0.5%] bg-[#151518] border border-white/5 rounded-2xl shadow-xl opacity-40 -translate-z-2" />
            <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#18181c] border border-white/10 rounded-2xl shadow-lg -translate-z-1" />

            {/* Central spine fold overlay (highest index, static) */}
            <div className="absolute left-1/2 top-[0.5%] bottom-[0.5%] w-[4px] md:w-[6px] bg-[#09090b] shadow-[0_0_12px_rgba(0,0,0,0.9)] z-40 -translate-x-1/2 pointer-events-none rounded-full" />

            {/* Map over the 3D Sheets */}
            {sheets.map((sheet, idx) => {
              const isFlipped = idx < activePage;
              
              // Correct z-indexing:
              // Flipped sheets stack with higher index on top (left side)
              // Unflipped sheets stack with lower index on top (right side)
              const zIndex = isFlipped ? idx + 10 : totalSheets - idx + 10;
              
              // Rotate sheet based on state
              const rotation = isFlipped ? -180 : 0;

              return (
                <motion.div
                  key={idx}
                  style={{
                    transformStyle: 'preserve-3d',
                    zIndex,
                    transformOrigin: 'left center',
                  }}
                  animate={{
                    rotateY: rotation,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 90,
                    damping: 14,
                    mass: 0.8,
                  }}
                  className="absolute left-1/2 w-[50%] h-full top-0 preserve-3d select-none origin-left"
                >
                  
                  {/* FRONT SIDE of Sheet (facing right when flat) */}
                  <div
                    className="absolute inset-0 bg-[#131316] border-y border-r border-white/[0.08] shadow-inner select-none overflow-hidden"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      borderTopRightRadius: '1.25rem',
                      borderBottomRightRadius: '1.25rem',
                    }}
                  >
                    {/* Spine shading (shadow near spine - left edge) */}
                    <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black/40 to-transparent pointer-events-none z-10" />

                    {/* Front Cover vs. Inside Page Frame */}
                    {idx === 0 ? (
                      // Full-bleed Front Cover
                      sheet.front?.image && (
                        <img
                          src={sheet.front.image}
                          alt="Cover Page"
                          className="absolute inset-0 w-full h-full object-contain bg-[#131316] pointer-events-none"
                        />
                      )
                    ) : (
                      // Inside Page - Landscape Framed Image
                      sheet.front?.image && (
                        <div className="absolute inset-0 flex items-center justify-center p-3 md:p-6 bg-[#131316]">
                          <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.5)] bg-[#0a0a0c]">
                            <img
                              src={sheet.front.image}
                              alt={`Page ${idx * 2}`}
                              className="w-full h-full object-cover pointer-events-none"
                            />
                          </div>
                        </div>
                      )
                    )}

                    {/* Page Number (hide for cover, idx = 0) */}
                    {idx > 0 && (
                      <div className="absolute bottom-4 right-4 text-[10px] md:text-xs text-white/40 font-mono z-10 bg-black/40 px-2 py-0.5 rounded backdrop-blur-[2px]">
                        Page {idx * 2}
                      </div>
                    )}
                  </div>

                  {/* BACK SIDE of Sheet (facing left when flipped) */}
                  <div
                    className="absolute inset-0 bg-[#131316] border-y border-l border-white/[0.08] shadow-inner select-none overflow-hidden"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)', // Pre-rotated so it faces left correctly
                      borderTopLeftRadius: '1.25rem',
                      borderBottomLeftRadius: '1.25rem',
                    }}
                  >
                    {/* Spine shading (shadow near spine - right edge) */}
                    <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-black/40 to-transparent pointer-events-none z-10" />

                    {/* Back Cover vs. Inside Page Frame */}
                    {idx === totalSheets - 1 ? (
                      // Full-bleed Back Cover
                      sheet.back?.image && (
                        <img
                          src={sheet.back.image}
                          alt="Back Cover"
                          className="absolute inset-0 w-full h-full object-contain bg-[#131316] pointer-events-none"
                        />
                      )
                    ) : (
                      // Inside Page - Landscape Framed Image
                      sheet.back?.image && (
                        <div className="absolute inset-0 flex items-center justify-center p-3 md:p-6 bg-[#131316]">
                          <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.5)] bg-[#0a0a0c]">
                            <img
                              src={sheet.back.image}
                              alt={`Page ${idx * 2 + 1}`}
                              className="w-full h-full object-cover pointer-events-none"
                            />
                          </div>
                        </div>
                      )
                    )}

                    {/* Page Number (hide for back cover, idx = 3) */}
                    {idx < totalSheets - 1 && (
                      <div className="absolute bottom-4 left-4 text-[10px] md:text-xs text-white/40 font-mono z-10 bg-black/40 px-2 py-0.5 rounded backdrop-blur-[2px]">
                        Page {idx * 2 + 1}
                      </div>
                    )}
                  </div>

                </motion.div>
              );
            })}

          </motion.div>

          {/* Book Controls & Navigation Indicators */}
          <div className="w-full max-w-[400px] flex items-center justify-between mt-4">
            
            {/* Prev Page Button */}
            <button
              onClick={prevPage}
              disabled={activePage === 0}
              aria-label="Previous Page"
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                activePage === 0
                  ? 'border-white/5 text-zinc-700 cursor-not-allowed'
                  : 'border-white/10 text-white hover:bg-white/5 hover:border-white/20 active:scale-95'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Pagination dots (0 to totalSheets index) */}
            <div className="flex items-center gap-2.5">
              {Array.from({ length: totalSheets + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePage(idx)}
                  aria-label={`Go to page spread ${idx}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activePage === idx
                      ? 'bg-[#ff6b35] scale-125 shadow-[0_0_8px_rgba(255,107,53,0.6)]'
                      : 'bg-zinc-600 hover:bg-zinc-400'
                  }`}
                />
              ))}
            </div>

            {/* Next Page Button */}
            <button
              onClick={nextPage}
              disabled={activePage === totalSheets}
              aria-label="Next Page"
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                activePage === totalSheets
                  ? 'border-white/5 text-zinc-700 cursor-not-allowed'
                  : 'border-white/10 text-white hover:bg-white/5 hover:border-white/20 active:scale-95'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

          </div>

          {/* Tips / Interaction Instructions */}
          <div className="text-[10px] md:text-xs text-zinc-500 font-mono tracking-wider uppercase animate-pulse flex items-center gap-2">
            <span>💡 Swipe on book surface or use arrows to read</span>
          </div>

        </div>

      </div>
    </section>
  );
}
