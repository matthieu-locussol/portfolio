import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/ModeNight';
import { IconButton } from '@mui/material';
import { useColorMode } from '../contexts/ColorModeContext';

export const ColorModeButton = () => {
   const { colorMode, toggleColorMode } = useColorMode();

   return (
      <IconButton
         aria-label="Toggle color mode"
         color="secondary"
         onClick={toggleColorMode}
         sx={{ pl: 1, pr: 1 }}
      >
         {colorMode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
   );
};
