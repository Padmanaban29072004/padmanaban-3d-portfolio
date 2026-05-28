'use client';

import { useEffect, useRef, useState, RefObject } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';

interface Props {
  heroRef: RefObject<HTMLDivElement>;
}

export default function ScrollyCanvas({ heroRef }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const { frameCount, getPath } = PORTFOLIO_CONFIG.hero;

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end end'],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  // Parallel image preload
  useEffect(() => {
    let cancelled = false;
    let loadedCount = 0;

    const promises = Array.from({ length: frameCount }, (_, i) => {
      return new Promise<HTMLImageElement>((resolve) => {
        const img = new Image();
        img.src = getPath(i);
        const done = () => {
          if (cancelled) return;
          loadedCount++;
          setImagesLoaded(loadedCount);
          resolve(img);
        };
        img.onload = done;
        img.onerror = done;
        imagesRef.current[i] = img;
      });
    });

    Promise.all(promises);
    return () => {
      cancelled = true;
    };
  }, [frameCount, getPath]);

  const drawImage = (index: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (parent) {
      const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
      const targetWidth = parent.clientWidth * dpr;
      const targetHeight = parent.clientHeight * dpr;
      
      if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        
        // Maintain layout size with CSS styles
        canvas.style.width = `${parent.clientWidth}px`;
        canvas.style.height = `${parent.clientHeight}px`;
      }
    }

    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = canvas.width / 2 - (img.width / 2) * scale;
    const y = canvas.height / 2 - (img.height / 2) * scale;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Configure high-quality smoothing
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  useEffect(() => {
    if (imagesLoaded > 0) drawImage(Math.round(frameIndex.get()));
  }, [imagesLoaded, frameIndex]);

  useEffect(() => {
    const handleResize = () => drawImage(Math.round(frameIndex.get()));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [frameIndex]);

  useMotionValueEvent(frameIndex, 'change', (latest) => {
    requestAnimationFrame(() => drawImage(Math.round(latest)));
  });

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
      {imagesLoaded < frameCount && (
        <div className="absolute inset-0 z-50 bg-[#0d0d0d] flex items-center justify-center text-white text-sm font-mono tracking-widest">
          LOADING {Math.floor((imagesLoaded / frameCount) * 100)}%
        </div>
      )}
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
