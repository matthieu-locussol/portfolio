import type { BoxProps } from '@mui/material';
import { Box } from '@mui/material';
import { Header } from './Header';
import { SocialMenu } from './SocialMenu';

export const Layout = ({ children }: BoxProps) => {
   return (
      <Box>
         <Header />
         <Box sx={{ p: 4 }}>{children}</Box>
         <SocialMenu />
      </Box>
   );
};
