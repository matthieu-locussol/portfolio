import { createTheme, Theme } from '@mui/material';
import {
   DARK_BACKGROUND_DEFAULT,
   DARK_BACKGROUND_PAPER,
   DARK_PRIMARY_MAIN,
   DARK_SECONDARY_MAIN,
   DARK_TEXT_PRIMARY,
   DARK_TEXT_SECONDARY,
} from './constants';

export const darkTheme: Theme = createTheme({
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
   },
});
