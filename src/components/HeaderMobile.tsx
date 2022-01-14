import { Box, Toolbar, ToolbarProps } from '@mui/material';
import { ColorModeButton } from './ColorModeButton';
import type { MenuItem } from './Header';
import { Logo } from './Logo';
import { MenuButton } from './MenuButton';

interface HeaderMobileProps extends ToolbarProps {
   items: MenuItem[];
}

export const HeaderMobile = ({ items, ...rest }: HeaderMobileProps) => {
   return (
      <Toolbar disableGutters {...rest}>
         <Box sx={{ alignItems: 'center', flexGrow: 1 }}>
            <Logo size={42} />
         </Box>
         <Box>
            <ColorModeButton />
            <MenuButton items={items} />
         </Box>
      </Toolbar>
   );
};
