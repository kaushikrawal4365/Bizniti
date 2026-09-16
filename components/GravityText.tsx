'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';

interface GravityTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  style?: React.CSSProperties;
  stagger?: number;
  highlightWord?: string;
  highlightClass?: string;
}

export function GravityText({
  text,
  className = '',
  as = 'h2',
  style = {},
  stagger = 0.05,
  highlightWord = '',
  highlightClass = '',
}: GravityTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: '-10% 0px -10% 0px' });
  
  // Parallax physics coupling on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const words = text.split(' ');
  const Component = motion[as] || motion.h2;

  return (
    <div ref={containerRef} className="inline-block overflow-hidden py-1">
      <Component className={`flex flex-wrap items-baseline ${className}`} style={style}>
        {words.map((word, i) => {
          // Pre-determine deterministic stumble rotation for each word index
          const rotAngle = ((i % 5) - 2) * 4; // -8deg, -4deg, 0deg, 4deg, 8deg
          const isHighlight = highlightWord && word.toLowerCase().includes(highlightWord.toLowerCase());

          return (
            <motion.span
              key={`${word}-${i}`}
              className={`inline-block mr-[0.25em] will-change-transform ${
                isHighlight ? highlightClass : ''
              }`}
              initial={{
                opacity: 0,
                y: -60 - (i % 3) * 20, // Falling from above under gravity
                rotate: rotAngle * 2.5, // Stumbling tilt angle
                scale: 0.9,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      rotate: 0,
                      scale: 1,
                    }
                  : {
                      opacity: 0,
                      y: -60 - (i % 3) * 20,
                      rotate: rotAngle * 2.5,
                      scale: 0.9,
                    }
              }
              transition={{
                type: 'spring',
                stiffness: 240,
                damping: 16,
                mass: 1.1,
                delay: i * stagger,
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </Component>
    </div>
  );
}

/**
 * ScrollParallaxPhysics - adds smooth physics drop/stumble as user scrolls down page
 */
export function ScrollStumbleText({
  children,
  className = '',
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [-35, 0, 35]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2.5, 0, 2.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);

  return (
    <motion.div ref={ref} style={{ y, rotate, opacity, ...style }} className={className}>
      {children}
    </motion.div>
  );
}
