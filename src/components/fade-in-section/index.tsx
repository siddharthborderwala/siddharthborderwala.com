'use client';

import { type AnimationProps, type MotionStyle, motion } from 'framer-motion';
import { useMemo } from 'react';

const initial = { opacity: 0, y: 16 };
const whileInView = { opacity: 1, y: 0 };
const viewport = { once: true };

const FadeInSection: React.FC<
  React.PropsWithChildren<{
    delay?: number;
    ease?: AnimationProps['transition'];
    className?: string;
    style?: MotionStyle;
  }>
> = ({ children, className, delay = 0, ease = 'easeInOut', style = {} }) => {
  const transition = useMemo(
    () => ({ ease, delay, duration: 0.2 }),
    [delay, ease]
  );

  return (
    <motion.div
      className={className}
      style={style}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
