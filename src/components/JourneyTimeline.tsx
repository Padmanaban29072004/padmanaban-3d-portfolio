'use client';

import { motion } from 'framer-motion';

export default function JourneyTimeline() {
  const timeline = [
    { year: "2020", title: "First Course on Udemy", desc: "Launched with zero audience. Something clicked." },
    { year: "2021", title: "Expanded to Skillshare", desc: "Multi-platform presence begins." },
    { year: "2023", title: "TutorialsPoint & Starweaver", desc: "Reached enterprise learners." },
    { year: "2024", title: "350K+ Students & Packt Deal", desc: "Published on Packt, distributed to Coursera & O'Reilly." },
    { year: "2025", title: "NIT Workshops & 539K LinkedIn Impressions", desc: "Took education offline to India's top NITs." },
    { year: "2026", title: "400K+ Students. AI Agents. 21+ Platforms.", desc: "Building the future of applied AI education." },
  ];

  return (
    <section className="bg-[#0d0d0d] py-[80px] lg:py-[120px] px-8 md:px-16 border-t border-white/5">
      <div className="max-w-[800px] mx-auto">
        
        <div className="mb-16 text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-[#ffffff] mb-4 tracking-tight">
            Timeline
          </h3>
          <p className="text-lg md:text-xl text-[#999999]">
            The journey so far.
          </p>
        </div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {timeline.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-[#ff6b35] rounded-full -left-[41px] md:-left-[57px] top-1.5 shadow-[0_0_10px_rgba(255,107,53,0.5)]" />
              
              <span className="inline-block text-sm font-bold tracking-widest text-[#ff6b35] mb-2 uppercase">
                {item.year}
              </span>
              <h4 className="text-2xl font-bold text-[#ffffff] mb-2">
                {item.title}
              </h4>
              <p className="text-[#999999] text-lg leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
