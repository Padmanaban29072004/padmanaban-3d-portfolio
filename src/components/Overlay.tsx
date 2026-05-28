'use client';

import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { RefObject } from 'react';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';

interface Props {
  heroRef: RefObject<HTMLDivElement>;
}

interface TaglineItemProps {
  text: string;
  emoji: string;
  scrollYProgress: MotionValue<number>;
  progressRange: [number, number, number, number];
  phaseClass: string;
}

function TaglineItem({ text, emoji, scrollYProgress, progressRange, phaseClass }: TaglineItemProps) {
  const opacity = useTransform(scrollYProgress, progressRange, [0, 1, 1, 0]);
  const x = useTransform(scrollYProgress, [progressRange[0], progressRange[1]], [-30, 0]);

  return (
    <motion.div
      style={{
        opacity,
        x,
        willChange: 'opacity, transform',
      }}
      className={phaseClass}
    >
      <h3
        className="text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-2xl max-w-[640px]"
        style={{ fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15 }}
      >
        <span className="text-[#ff6b35]">|</span> {text}{' '}
        <span aria-hidden>{emoji}</span>
      </h3>
    </motion.div>
  );
}

export default function Overlay({ heroRef }: Props) {
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end end'],
  });

  const { watermark, phase2, phase3, taglines, phase4 } = PORTFOLIO_CONFIG.branding;

  // Phase 1 — Ghost watermark (visible 0.00–0.18, fade 0.18–0.22)
  const opacity1 = useTransform(scrollYProgress, [0, 0.18, 0.22], [1, 1, 0]);
  // Hard-hide the watermark once it's faded — prevents any sub-pixel residual rendering past scroll 0.22.
  const visibility1 = useTransform(opacity1, (v) => (v < 0.01 ? 'hidden' : 'visible'));

  // Phase 2 — Name block (in 0.22–0.30, hold to 0.36, out 0.36–0.40)
  const opacity2 = useTransform(scrollYProgress, [0.22, 0.3, 0.36, 0.4], [0, 1, 1, 0]);

  // Phase 3 — Title block (in 0.40–0.46, hold to 0.50, out 0.50–0.54)
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.46, 0.5, 0.54], [0, 1, 1, 0]);

  // Phase 3.5 — Dynamic taglines calculation over 0.54 -> 0.86
  const startProgress = 0.54;
  const endProgress = 0.86;
  const totalRange = endProgress - startProgress;
  const sliceWidth = totalRange / taglines.length;

  // Phase 4 — Final headline (in 0.86–0.92, hold to end)
  const opacity4 = useTransform(scrollYProgress, [0.86, 0.92, 1.0], [0, 1, 1]);

  // Common positioning class — left-aligned, vertically centered, capped width
  const phaseClass =
    'absolute inset-0 flex flex-col justify-center items-start text-left pl-8 md:pl-16 lg:pl-24 pr-8 pointer-events-none';

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Phase 1: Liquid-glass watermark. Gradient-fill text, chromatic refraction on hover. */}
        <motion.div
          style={{
            opacity: opacity1,
            visibility: visibility1,
            willChange: 'opacity, visibility',
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1
            className="watermark-glass text-[10vw] font-black tracking-tighter select-none text-center leading-none cursor-default whitespace-pre-line"
            style={{ pointerEvents: 'auto' }}
          >
            {watermark}
          </h1>
        </motion.div>

        {/* Phase 2 */}
        <motion.div
          style={{ opacity: opacity2, willChange: 'opacity' }}
          className={phaseClass}
        >
          <div className="max-w-[640px]">
            <p className="text-base md:text-xl text-white mb-3 font-medium tracking-wide drop-shadow-md">
              {phase2.subTop}
            </p>
            <h2
              className="text-5xl md:text-7xl lg:text-8xl text-white drop-shadow-2xl mb-4"
              style={{ fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1 }}
            >
              {phase2.name}
            </h2>
          </div>
        </motion.div>

        {/* Phase 3 */}
        <motion.div
          style={{ opacity: opacity3, willChange: 'opacity' }}
          className={phaseClass}
        >
          <h2
            className="text-4xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl whitespace-pre-line max-w-[640px]"
            style={{ fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15 }}
          >
            {phase3.text}
          </h2>
        </motion.div>

        {/* Phase 3.5 — Dynamic Taglines */}
        {taglines.map((tag, i) => {
          const tagStart = startProgress + i * sliceWidth;
          const progressRange: [number, number, number, number] = [
            tagStart,
            tagStart + 0.375 * sliceWidth,
            tagStart + 0.75 * sliceWidth,
            tagStart + 1.0 * sliceWidth,
          ];
          return (
            <TaglineItem
              key={i}
              text={tag.text}
              emoji={tag.emoji}
              scrollYProgress={scrollYProgress}
              progressRange={progressRange}
              phaseClass={phaseClass}
            />
          );
        })}

        {/* Phase 4 — Final headline */}
        <motion.div
          style={{ opacity: opacity4, willChange: 'opacity' }}
          className={phaseClass}
        >
          <h2
            className="text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-2xl max-w-[700px]"
            style={{ fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15 }}
          >
            {phase4.headlineFirst}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">
              {phase4.headlineGradient}
            </span>
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
