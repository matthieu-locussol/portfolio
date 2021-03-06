import type { Theme } from '@emotion/react';
import { createTheme } from '@mui/material';
import {
   DARK_BACKGROUND_DEFAULT,
   LIGHT_BACKGROUND_DEFAULT,
   LIGHT_BACKGROUND_PAPER,
   LIGHT_PRIMARY_MAIN,
   LIGHT_SECONDARY_MAIN,
   LIGHT_TEXT_PRIMARY,
   LIGHT_TEXT_SECONDARY,
} from './constants';

export const lightTheme: Theme = createTheme({
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
      mode: 'light',
      primary: {
         main: LIGHT_PRIMARY_MAIN,
      },
      secondary: {
         main: LIGHT_SECONDARY_MAIN,
      },
      background: {
         default: LIGHT_BACKGROUND_DEFAULT,
         paper: LIGHT_BACKGROUND_PAPER,
      },
      text: {
         primary: LIGHT_TEXT_PRIMARY,
         secondary: LIGHT_TEXT_SECONDARY,
      },
      action: {
         disabled: LIGHT_PRIMARY_MAIN,
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
                  color: LIGHT_PRIMARY_MAIN,
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
               color: DARK_BACKGROUND_DEFAULT,
            },
         },
      },
   },
});
