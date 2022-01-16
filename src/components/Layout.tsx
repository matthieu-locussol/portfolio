import { Box, BoxProps } from '@mui/material';
import { Header } from './Header';

export const Layout = ({ children }: BoxProps) => {
   return (
      <Box>
         <Header />
         <Box sx={{ p: 4 }}>{children}</Box>
      </Box>
   );
};
