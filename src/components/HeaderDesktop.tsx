import { Box, Button, Toolbar, ToolbarProps } from '@mui/material';
import { useRouter } from 'next/router';
import { ColorModeButton } from './ColorModeButton';
import type { MenuItem } from './Header';
import { Logo } from './Logo';
import { ResumeButton } from './ResumeButton';

interface HeaderDesktopProps extends ToolbarProps {
   items: MenuItem[];
}

export const HeaderDesktop = ({ items, ...rest }: HeaderDesktopProps) => {
   const router = useRouter();

   return (
      <Toolbar disableGutters {...rest}>
         <Box sx={{ alignItems: 'center', pr: 1, pl: 1 }}>
            <Logo size={42} />
         </Box>
         <Box sx={{ flexGrow: 1 }}>
            {items.map((item) => (
               <Button
                  key={item.name}
                  disabled={item.href === router.pathname}
                  href={item.href}
                  size="medium"
                  color="secondary"
                  sx={{ ml: 2 }}>
                  {item.href === router.pathname && '▹ '}
                  {item.name}
               </Button>
            ))}
         </Box>
         <Box>
            <ColorModeButton />
            <ResumeButton lang="EN" />
            <ResumeButton lang="FR" />
         </Box>
      </Toolbar>
   );
};
