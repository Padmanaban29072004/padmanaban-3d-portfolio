'use client';

import { motion } from 'framer-motion';

export default function AboutMeSplit() {
  return (
    <section className="bg-[#0d0d0d] py-[80px] lg:py-[120px] px-8 md:px-16">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* Left Side: 3D AI Engineering Model representation (40%) */}
        <div className="lg:w-[40%] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[400px] aspect-square rounded-3xl overflow-hidden glass-card p-2 flex items-center justify-center"
          >
            {/* Ambient background glow */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-[#ff6b35]/20 to-[#00d2ff]/20 blur-3xl opacity-60 pointer-events-none" />

            <motion.img
              src="/holographic_model.png"
              alt="Holographic AI Model"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-full h-full object-cover rounded-2xl select-none pointer-events-none"
            />
          </motion.div>
        </div>

        {/* Right Side: Story (60%) */}
        <div className="lg:w-[60%] flex flex-col justify-center">
          <h3 className="text-3xl md:text-5xl font-bold text-[#ffffff] mb-8 tracking-tight">
            Titles Don't Make Leaders. Action Do.
          </h3>
          <div className="space-y-6 text-[#999999] text-lg md:text-xl leading-relaxed text-justify">
            <p>
              I am a passionate and career-focused individual with a strong interest in software development, AI/ML, and full-stack technologies. I enjoy working on innovative projects such as PHANTOM-Flow, Learnix, HerbChain, Graphi-Fusion, and student management systems, which reflect my enthusiasm for solving real-world problems through technology. I actively prepare for technical interviews and continuously improve my skills by learning through practical examples, detailed explanations, and hands-on projects. My goal is to build creative and impactful solutions while growing into a successful professional in the technology field.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
