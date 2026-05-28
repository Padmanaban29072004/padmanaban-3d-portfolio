'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';

export default function Projects() {
  const { projects } = PORTFOLIO_CONFIG;

  return (
    <section className="bg-[#0d0d0d] py-[80px] lg:py-[120px] px-8 md:px-16 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="mb-16 text-center">
          <h3
            className="text-3xl md:text-5xl text-white mb-4"
            style={{ fontWeight: 700, letterSpacing: '-0.03em' }}
          >
            Featured Projects
          </h3>
          <p className="text-lg md:text-xl text-[#999999] max-w-2xl mx-auto">
            Recent builds in AI agent workflow, content engineering, and web technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group glass-card rounded-3xl p-8 flex flex-col justify-between min-h-[380px]"
            >
              <div>
                <span className="inline-block text-xs font-bold tracking-widest text-[#ff6b35] uppercase mb-4">
                  {project.badge}
                </span>
                
                <h4 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-[#ff6b35] transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-[#999999] leading-relaxed mb-6 text-sm md:text-base text-justify">
                  {project.desc}
                </p>
              </div>

              <div>
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 text-xs rounded-md bg-white/[0.03] border border-white/5 text-zinc-400 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold tracking-wider text-zinc-400 hover:text-white uppercase transition-colors"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
