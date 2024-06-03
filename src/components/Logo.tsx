import { Link, useTheme } from '@mui/material';
import RouterLink from 'next/link';

interface LogoProps {
   size: number;
}

export const Logo = ({ size }: LogoProps) => {
   const theme = useTheme();

   return (
      <RouterLink href="/" passHref>
         <Link
            aria-label="Go back to homepage"
            sx={{
               display: 'flex',
               maxWidth: `${size}px`,
               transition: theme.transitions.create(['opacity'], {
                  duration: '0.1s',
               }),
               opacity: 1,
               ':hover': {
                  cursor: 'pointer',
                  opacity: 0.7,
               },
               ':active': {
                  opacity: 0.5,
               },
               svg: {
                  width: '100%',
                  height: '100%',
                  fill: 'none',
               },
            }}
         >
            <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
               <g>
                  <g transform="translate(28.000000, 33.000000)">
                     <path
                        d="M3.5 26c0.276 0 0.5-0.224 0.5-0.5v-23.5c0-0.598 0.402-1 1-1h32c0.57 0 1 0.468 1 1.089v23.411c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-23.411c0-1.172-0.878-2.089-2-2.089h-32c-1.159 0-2 0.841-2 2v23.5c0 0.276 0.224 0.5 0.5 0.5zM6.5 3c-0.276 0-0.5 0.224-0.5 0.5v22c0 0.276 0.224 0.5 0.5 0.5h29c0.276 0 0.5-0.224 0.5-0.5v-22c0-0.276-0.224-0.5-0.5-0.5h-29zM35 25h-28v-21h28v21zM41.5 28h-41c-0.276 0-0.5 0.224-0.5 0.5v1.175c0 1.198 1.408 2.325 2.5 2.325h37c1.145 0 2.5-1.355 2.5-2.5v-1c0-0.276-0.224-0.5-0.5-0.5zM41 29.5c0 0.589-0.911 1.5-1.5 1.5h-37c-0.631 0-1.5-0.768-1.5-1.325v-0.675h40v0.5z"
                        fill={theme.palette.primary.dark}
                        stroke={theme.palette.primary.main}
                        strokeWidth="1"
                     />
                  </g>
                  <path
                     fill={`${theme.palette.background.paper}22`}
                     stroke={theme.palette.primary.main}
                     strokeWidth="5"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
                  />
               </g>
            </svg>
         </Link>
      </RouterLink>
   );
};
