import { Theme } from '@emotion/react';
import { createTheme } from '@mui/material';
import {
   LIGHT_BACKGROUND_DEFAULT,
   LIGHT_BACKGROUND_PAPER,
   LIGHT_PRIMARY_MAIN,
   LIGHT_SECONDARY_MAIN,
   LIGHT_TEXT_PRIMARY,
   LIGHT_TEXT_SECONDARY,
} from './constants';

export const lightTheme: Theme = createTheme({
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
   },
   typography: {
      fontFamily: "'Jost', sans-serif",
   },
   components: {
      MuiButton: {
         styleOverrides: {
            root: {
               fontSize: 18,
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
   },
});
