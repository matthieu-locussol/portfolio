import { useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { type ReactNode, useMemo } from 'react';

interface RevealOnScrollProps {
   children: ReactNode;
   width?: 'fit-content' | '100%' | 'responsive-fullwidth';
   delay?: number;
}

export const RevealOnScroll = ({ children, width = '100%', delay = 0 }: RevealOnScrollProps) => {
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

   const finalWidth = useMemo(() => {
      if (width === 'responsive-fullwidth') {
         return isMobile ? '100%' : 'fit-content';
      }

      return width;
   }, [width, isMobile]);

   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: '-50px' }}
         transition={{ duration: 0.5, delay, ease: 'easeOut' }}
         style={{ width: finalWidth }}
      >
         {children}
      </motion.div>
   );
};
