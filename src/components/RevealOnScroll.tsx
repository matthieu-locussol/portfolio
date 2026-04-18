import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealOnScrollProps {
   children: ReactNode;
   width?: 'fit-content' | '100%';
   delay?: number;
}

export const RevealOnScroll = ({ children, width = '100%', delay = 0 }: RevealOnScrollProps) => {
   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: '-50px' }}
         transition={{ duration: 0.5, delay, ease: 'easeOut' }}
         style={{ width }}
      >
         {children}
      </motion.div>
   );
};
