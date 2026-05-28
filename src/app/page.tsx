'use client';

import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import TagScroll from '@/components/TagScroll';
import AboutMeSplit from '@/components/AboutMeSplit';
import ResumeSection from '@/components/ResumeSection';
import AchievementsTimeline from '@/components/AchievementsTimeline';
import Projects from '@/components/Projects';
import BookGallery from '@/components/BookGallery';
import Footer from '@/components/Footer';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <main
      id="top"
      className="bg-[#0d0d0d] min-h-screen w-full font-sans text-[#ffffff] selection:bg-[#ff6b35] selection:text-white"
    >
      <Navbar />

      {/* Cinematic Hero — single shared scroll container */}
      <div ref={heroRef} className="relative w-full" style={{ height: '600vh' }}>
        <ScrollyCanvas heroRef={heroRef} />
        <Overlay heroRef={heroRef} />
      </div>

      {/* Content Sections */}
      <div className="relative z-20 bg-[#0d0d0d]">
        <TagScroll />
        <div id="about"><AboutMeSplit /></div>
        <div id="experience"><ResumeSection /></div>
        <div id="achievements"><AchievementsTimeline /></div>
        <div id="projects"><Projects /></div>
        <div id="gallery"><BookGallery /></div>
        <div id="contact"><Footer /></div>
      </div>
    </main>
  );
}
