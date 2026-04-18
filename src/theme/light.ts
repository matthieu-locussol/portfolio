import type { Theme } from '@emotion/react';
import { createTheme } from '@mui/material';
import {
   LIGHT_BACKGROUND_DEFAULT,
   LIGHT_BACKGROUND_PAPER,
   LIGHT_PRIMARY_MAIN,
   LIGHT_SECONDARY_MAIN,
   LIGHT_SHADOW_SM,
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
      divider: 'rgba(46, 48, 71, 0.12)',
   },
   typography: {
      fontFamily:
         'Poppins, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif',
   },
   components: {
      MuiCssBaseline: {
         styleOverrides: {
            body: {
               backgroundColor: LIGHT_BACKGROUND_DEFAULT,
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
                  color: LIGHT_PRIMARY_MAIN,
               },
            },
            outlined: {
               fontFamily: 'Fira Code',
               fontWeight: 400,
               fontSize: 14,
               borderColor: LIGHT_PRIMARY_MAIN,
               borderWidth: 1.5,
               ':hover': {
                  borderWidth: 1.5,
                  backgroundColor: 'rgba(13, 140, 109, 0.06)',
               },
            },
         },
      },
      MuiTypography: {
         styleOverrides: {
            h2: {
               fontWeight: 600,
               color: LIGHT_SECONDARY_MAIN,
            },
         },
      },
      MuiCard: {
         styleOverrides: {
            root: {
               borderRadius: 10,
               borderColor: 'rgba(46, 48, 71, 0.10)',
               backgroundColor: LIGHT_BACKGROUND_PAPER,
               boxShadow: LIGHT_SHADOW_SM,
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
            filled: {
               '&:not(.MuiChip-colorPrimary)': {
                  backgroundColor: 'rgba(13, 140, 109, 0.10)',
                  color: LIGHT_PRIMARY_MAIN,
               },
            },
         },
      },
      MuiAppBar: {
         styleOverrides: {
            root: {
               backdropFilter: 'blur(12px)',
               backgroundColor: 'rgba(247, 244, 239, 0.85)',
            },
         },
      },
      MuiDivider: {
         styleOverrides: {
            root: {
               borderColor: 'rgba(46, 48, 71, 0.12)',
            },
         },
      },
   },
});
