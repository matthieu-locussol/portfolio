import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';
import { Header } from './Header';

export const Layout = ({ children }: PropsWithChildren<{}>) => {
   return (
      <Box>
         <Header />
         <Box sx={{ p: 4 }}>{children}</Box>
      </Box>
   );
};
