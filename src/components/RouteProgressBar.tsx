import { Box, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export const RouteProgressBar = () => {
   const router = useRouter();
   const theme = useTheme();
   const [progress, setProgress] = useState(0);
   const [visible, setVisible] = useState(false);
   const timerRef = useRef<ReturnType<typeof setTimeout>>();

   useEffect(() => {
      const handleStart = () => {
         setProgress(0);
         setVisible(true);
         requestAnimationFrame(() => setProgress(30));
         timerRef.current = setTimeout(() => setProgress(70), 300);
      };

      const handleComplete = () => {
         clearTimeout(timerRef.current);
         setProgress(100);
         setTimeout(() => {
            setVisible(false);
            setProgress(0);
         }, 300);
      };

      router.events.on('routeChangeStart', handleStart);
      router.events.on('routeChangeComplete', handleComplete);
      router.events.on('routeChangeError', handleComplete);

      return () => {
         clearTimeout(timerRef.current);
         router.events.off('routeChangeStart', handleStart);
         router.events.off('routeChangeComplete', handleComplete);
         router.events.off('routeChangeError', handleComplete);
      };
   }, [router]);

   if (!visible) return null;

   return (
      <Box
         sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: `${progress}%`,
            height: 3,
            zIndex: 9999,
            backgroundColor: theme.palette.primary.main,
            transition:
               progress === 100
                  ? 'width 0.2s ease, opacity 0.3s ease 0.1s'
                  : 'width 0.4s ease',
            opacity: progress === 100 ? 0 : 1,
         }}
      />
   );
};
