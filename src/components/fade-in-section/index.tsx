'use client';

import { type AnimationProps, type MotionStyle, motion } from 'framer-motion';

const initial = { opacity: 0, y: 16 };
const whileInView = { opacity: 1, y: 0 };
const viewport = { once: true, margin: '-16px' };

const FadeInSection: React.FC<
  React.PropsWithChildren<{
    delay?: number;
    ease?: AnimationProps['transition'];
    className?: string;
    style?: MotionStyle;
  }>
> = ({ children, className, delay = 0, style = {} }) => {
  return (
    <motion.div
      className={className}
      style={style}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={{
        delay,
        damping: 10,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
