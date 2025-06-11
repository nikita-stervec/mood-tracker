import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const variants = {
  initial: { x: '100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '-100%', opacity: 0 },
};

export const AnimatedPage = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      style={{ position: 'absolute', width: '100%' }}
    >
      {children}
    </motion.div>
  );
};
