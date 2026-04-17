import { Box, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { useColorMode } from '../contexts/ColorModeContext';
import { HeaderDesktop } from './HeaderDesktop';
import { HeaderMobile } from './HeaderMobile';

export interface MenuItem {
   name: string;
   href: string;
}

const items: MenuItem[] = [
   { name: 'About', href: '/about' },
   { name: 'Work', href: '/work' },
   { name: 'Portfolio', href: '/portfolio' },
   { name: 'Articles', href: '/articles' },
   { name: 'Contact', href: '/contact' },
];

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
            backgroundColor:
               colorMode === 'dark'
                  ? 'rgba(10, 25, 47, 0.85)'
                  : 'rgba(247, 244, 239, 0.85)',
            backdropFilter: 'blur(12px)',
            boxShadow:
               colorMode === 'dark'
                  ? 'rgb(2 12 27 / 60%) 0px 4px 16px, rgb(2 12 27 / 40%) 0px 1px 4px'
                  : 'rgba(46, 48, 71, 0.08) 0px 4px 16px, rgba(46, 48, 71, 0.04) 0px 1px 4px',
         }}
      >
         <Box sx={{ pl: { xs: 2, sm: 3 }, pr: { xs: 2, sm: 3 } }}>
            <HeaderDesktop items={items} sx={{ display: { xs: 'none', md: 'flex' } }} />
            <HeaderMobile items={items} sx={{ display: { xs: 'flex', md: 'none' } }} />
         </Box>
      </AppBar>
   );
};
