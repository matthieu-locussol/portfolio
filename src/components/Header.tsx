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
            backgroundColor: theme.palette.background.default,
            boxShadow:
               colorMode === 'dark'
                  ? 'rgb(2 12 27 / 100%) 0px 10px 30px -10px'
                  : 'rgb(2 12 27 / 70%) 0px 2px 9px -3px',
         }}
      >
         <Box sx={{ pl: { xs: 2, sm: 3 }, pr: { xs: 2, sm: 3 } }}>
            <HeaderDesktop items={items} sx={{ display: { xs: 'none', md: 'flex' } }} />
            <HeaderMobile items={items} sx={{ display: { xs: 'flex', md: 'none' } }} />
         </Box>
      </AppBar>
   );
};
