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
      divider: 'rgba(136, 146, 176, 0.15)',
   },
   typography: {
      fontFamily:
         'Poppins, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif',
   },
   components: {
      MuiCssBaseline: {
         styleOverrides: {
            body: {
               backgroundColor: DARK_BACKGROUND_DEFAULT,
               transition: 'background-color 0.25s ease',
            },
         },
      },
      MuiButton: {
         styleOverrides: {
            root: {
               fontSize: 18,
               fontFamily: 'Jost',
               textTransform: 'none',
               borderRadius: 8,
               ':hover': {
                  color: DARK_PRIMARY_MAIN,
               },
            },
            outlined: {
               fontFamily: 'Fira Code',
               fontWeight: 400,
               fontSize: 14,
               borderColor: DARK_PRIMARY_MAIN,
               borderWidth: 1.5,
               ':hover': {
                  borderWidth: 1.5,
                  backgroundColor: 'rgba(100, 255, 218, 0.06)',
               },
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
      MuiCard: {
         styleOverrides: {
            root: {
               borderRadius: 10,
               borderColor: 'rgba(136, 146, 176, 0.15)',
               backgroundColor: DARK_BACKGROUND_PAPER,
               boxShadow: 'rgb(2 12 27 / 40%) 0px 2px 8px, rgb(2 12 27 / 30%) 0px 1px 3px',
               transition: 'box-shadow 0.2s ease, transform 0.2s ease',
            },
         },
      },
      MuiChip: {
         styleOverrides: {
            root: {
               borderRadius: 6,
               fontWeight: 600,
            },
         },
      },
      MuiAppBar: {
         styleOverrides: {
            root: {
               backdropFilter: 'blur(12px)',
               backgroundColor: 'rgba(10, 25, 47, 0.85)',
            },
         },
      },
      MuiDivider: {
         styleOverrides: {
            root: {
               borderColor: 'rgba(136, 146, 176, 0.15)',
            },
         },
      },
   },
});
