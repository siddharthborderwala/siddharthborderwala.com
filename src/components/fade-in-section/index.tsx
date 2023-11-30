'use client';

import { type AnimationProps, type MotionStyle, motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const FadeInSection: React.FC<
  React.PropsWithChildren<{
    delay?: number;
    ease?: AnimationProps['transition'];
    className?: string;
    style?: MotionStyle;
  }>
> = ({ children, className, delay = 0, ease = 'easeInOut', style = {} }) => {
  const [isVisible, setVisible] = useState(false);
  const checkerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!checkerRef.current) {
      return;
    }

    const element = checkerRef.current;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });

    observer.observe(element);

    return () => observer.unobserve(element);
  }, []);

  if (!isVisible) {
    return (
      <div
        ref={checkerRef}
        className={className}
        style={{
          opacity: 0,
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, rotateX: '-2deg' }}
      animate={{ opacity: 1, y: 0, rotateX: '0deg' }}
      transition={{ ease, delay, duration: 0.2 }}
      className={className}
      style={{
        ...style,
        transformPerspective: '200px',
        transformOrigin: 'center',
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
