import { useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { useColorMode } from '../contexts/ColorModeContext';
import { ColorModeButton } from './ColorModeButton';
import { Logo } from './Logo';
import { ResumeButton } from './ResumeButton';

const pages = ['About', 'Work', 'Portfolio', 'Articles', 'Contact'];

export const Header = () => {
   const theme = useTheme();
   const { colorMode } = useColorMode();

   return (
      <AppBar
         elevation={0}
         position="static"
         sx={{
            pt: 0.5,
            pb: 0.5,
            borderTop: `4px solid ${theme.palette.primary.main}`,
            backgroundColor: theme.palette.background.default,
            boxShadow:
               colorMode === 'dark'
                  ? 'rgb(2 12 27 / 70%) 0px 10px 30px -10px'
                  : 'rgb(2 12 27 / 70%) 0px 2px 9px -3px',
         }}>
         <Container maxWidth="xl">
            <Toolbar disableGutters>
               <Box
                  sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', pr: 2, pl: 2 }}>
                  <Logo size={42} />
               </Box>
               <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  {pages.map((page) => (
                     <Button size="medium" color="secondary" key={page} sx={{ ml: 2 }}>
                        {page}
                     </Button>
                  ))}
               </Box>
               <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <ColorModeButton />
                  <ResumeButton lang="EN" />
                  <ResumeButton lang="FR" />
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   );
};
