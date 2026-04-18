import type { Theme } from '@emotion/react';
import { createTheme } from '@mui/material';
import {
   FONT_BODY,
   FONT_HEADING,
   FONT_MONO,
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
      fontFamily: FONT_BODY,
      h1: { fontFamily: FONT_HEADING, fontWeight: 700, fontSize: '3.25rem', letterSpacing: '-0.02em', lineHeight: 1.15 },
      h2: { fontFamily: FONT_HEADING, fontWeight: 600, fontSize: '2.75rem', letterSpacing: '-0.015em', lineHeight: 1.2 },
      h3: { fontFamily: FONT_HEADING, fontWeight: 600, fontSize: '2rem', letterSpacing: '-0.01em', lineHeight: 1.3 },
      h4: { fontFamily: FONT_HEADING, fontWeight: 600, fontSize: '1.5rem', lineHeight: 1.35 },
      h5: { fontFamily: FONT_HEADING, fontWeight: 600, fontSize: '1.25rem', lineHeight: 1.4 },
      h6: { fontFamily: FONT_HEADING, fontWeight: 600, fontSize: '1.125rem', lineHeight: 1.4 },
      subtitle1: { fontSize: '1.125rem', lineHeight: 1.7 },
      subtitle2: { fontWeight: 500, fontSize: '0.875rem', lineHeight: 1.6 },
      body1: { fontSize: '1rem', lineHeight: 1.7 },
      body2: { fontSize: '0.875rem', lineHeight: 1.65 },
      overline: { fontFamily: FONT_MONO, fontWeight: 400, fontSize: '0.875rem', letterSpacing: '0.04em', textTransform: 'none' as const },
      button: { fontFamily: FONT_HEADING, fontWeight: 500, fontSize: '1rem' },
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
               fontFamily: FONT_HEADING,
               textTransform: 'none',
               borderRadius: 8,
               ':hover': {
                  color: LIGHT_PRIMARY_MAIN,
               },
            },
            outlined: {
               fontFamily: FONT_MONO,
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
