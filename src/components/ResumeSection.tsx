'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';

export default function ResumeSection() {
  const { experience, education } = PORTFOLIO_CONFIG;

  return (
    <section className="bg-[#0d0d0d] py-[80px] lg:py-[120px] px-8 md:px-16 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="mb-16 text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-[#ffffff] mb-4 tracking-tight">
            Education &amp; Experience
          </h3>
          <p className="text-lg md:text-xl text-[#999999] max-w-2xl mx-auto">
            My professional journey and academic background.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl" role="img" aria-label="Experience">💼</span>
              <h4 className="text-2xl font-bold text-[#ffffff] tracking-tight">Work Experience</h4>
            </div>
            
            <div className="space-y-6">
              {experience.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="glass-card rounded-3xl p-8"
                >
                  <span className="text-xs font-bold tracking-widest text-[#ff6b35] uppercase block mb-2">
                    {item.duration}
                  </span>
                  <h5 className="text-xl font-bold text-white leading-snug">
                    {item.role}
                  </h5>
                  <span className="text-sm font-semibold text-zinc-400 block mb-4">
                    {item.company}
                  </span>
                  <p className="text-[#999999] leading-relaxed text-base">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl" role="img" aria-label="Education">🎓</span>
              <h4 className="text-2xl font-bold text-[#ffffff] tracking-tight">Education</h4>
            </div>
            
            <div className="space-y-6">
              {education.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="glass-card rounded-3xl p-8"
                >
                  <span className="text-xs font-bold tracking-widest text-[#ff6b35] uppercase block mb-2">
                    {item.duration}
                  </span>
                  <h5 className="text-xl font-bold text-white leading-snug">
                    {item.degree}
                  </h5>
                  <span className="text-sm font-semibold text-zinc-400 block mb-4">
                    {item.school}
                  </span>
                  <p className="text-[#999999] leading-relaxed text-base">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
