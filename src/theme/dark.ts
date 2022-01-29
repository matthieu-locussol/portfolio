import type { Theme } from '@emotion/react';
import { createTheme } from '@mui/material';
import {
   DARK_BACKGROUND_DEFAULT,
   DARK_BACKGROUND_PAPER,
   DARK_PRIMARY_MAIN,
   DARK_SECONDARY_MAIN,
   DARK_TEXT_PRIMARY,
   DARK_TEXT_SECONDARY,
   LIGHT_BACKGROUND_DEFAULT,
} from './constants';

export const darkTheme: Theme = createTheme({
   breakpoints: {
      values: {
         xs: 0,
         sm: 600,
         md: 900,
         lg: 1000,
         xl: 1200,
      },
   },
   palette: {
      mode: 'dark',
      primary: {
         main: DARK_PRIMARY_MAIN,
      },
      secondary: {
         main: DARK_SECONDARY_MAIN,
      },
      background: {
         default: DARK_BACKGROUND_DEFAULT,
         paper: DARK_BACKGROUND_PAPER,
      },
      text: {
         primary: DARK_TEXT_PRIMARY,
         secondary: DARK_TEXT_SECONDARY,
      },
      action: {
         disabled: DARK_PRIMARY_MAIN,
      },
   },
   typography: {
      fontFamily:
         'Poppins, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif',
   },
   components: {
      MuiButton: {
         styleOverrides: {
            root: {
               fontSize: 18,
               fontFamily: 'Jost',
               textTransform: 'none',
               ':hover': {
                  color: DARK_PRIMARY_MAIN,
               },
            },
            outlined: {
               fontFamily: 'Fira Code',
               fontWeight: 400,
               fontSize: 14,
            },
         },
      },
      MuiTypography: {
         styleOverrides: {
            h2: {
               fontWeight: 600,
               color: LIGHT_BACKGROUND_DEFAULT,
            },
         },
      },
   },
});
