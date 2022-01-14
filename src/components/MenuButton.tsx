import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
   AppBar,
   Box,
   Dialog,
   Divider,
   Fade,
   IconButton,
   List,
   ListItem,
   ListItemText,
   Toolbar,
   Typography,
   useTheme,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import Link from 'next/link';
import React, { useState } from 'react';
import { useColorMode } from '../contexts/ColorModeContext';
import { ColorModeButton } from './ColorModeButton';
import type { MenuItem } from './Header';
import { Logo } from './Logo';
import { ResumeMobileButton } from './ResumeMobileButton';

const Transition = React.forwardRef(
   (props: TransitionProps & { children: React.ReactElement }, ref: React.Ref<unknown>) => {
      return <Fade ref={ref} {...props} />;
   },
);

interface MenuButtonProps {
   items: MenuItem[];
}

export const MenuButton = ({ items }: MenuButtonProps) => {
   const theme = useTheme();
   const { colorMode } = useColorMode();
   const [open, setOpen] = useState(false);

   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   return (
      <React.Fragment>
         <IconButton color="secondary" sx={{ pl: 1, pr: 1, ml: 2 }} onClick={handleOpen}>
            <MenuIcon />
         </IconButton>
         <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar
               elevation={0}
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
               <Toolbar>
                  <Box sx={{ alignItems: 'center', flexGrow: 1 }}>
                     <Logo size={42} />
                  </Box>
                  <ColorModeButton />
                  <IconButton
                     aria-label="Close menu"
                     edge="end"
                     color="inherit"
                     onClick={handleClose}
                     sx={{ pl: 1, pr: 1, ml: 2, mr: 0 }}>
                     <CloseIcon />
                  </IconButton>
               </Toolbar>
            </AppBar>
            <List
               sx={{
                  mt: 8.5,
                  background: theme.palette.background.default,
                  height: '100%',
               }}>
               {items.map((item) => (
                  <>
                     <Link href={item.href} passHref key={item.name}>
                        <ListItem button sx={{ p: 2 }}>
                           <ListItemText
                              primary={<Typography sx={{ fontSize: 18 }}>{item.name}</Typography>}
                           />
                        </ListItem>
                     </Link>
                     <Divider />
                  </>
               ))}
               <ResumeMobileButton lang="FR" />
               <Divider />
               <ResumeMobileButton lang="EN" />
            </List>
         </Dialog>
      </React.Fragment>
   );
};
