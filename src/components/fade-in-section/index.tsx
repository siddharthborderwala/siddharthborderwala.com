'use client';

import { AnimationProps, motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const FadeInSection: React.FC<
  React.PropsWithChildren<{
    delay?: number;
    ease?: AnimationProps['transition'];
    className?: string;
  }>
> = ({ children, className, delay = 0, ease = 'easeInOut' }) => {
  const [isVisible, setVisible] = useState(false);
  const checkerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!checkerRef.current) {
      return;
    }

    const element = checkerRef.current;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setVisible(true);
      });
    });

    observer.observe(element);

    return () => observer.unobserve(element);
  }, []);

  if (!isVisible) {
    return (
      <div ref={checkerRef} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
      transition={{ ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
