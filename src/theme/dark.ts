import { createTheme, Theme } from '@mui/material';
import {
   BACKGROUND_DEFAULT,
   BACKGROUND_PAPER,
   PRIMARY_MAIN,
   SECONDARY_MAIN,
   TEXT_PRIMARY,
   TEXT_SECONDARY,
} from './constants';

export const darkTheme: Theme = createTheme({
   palette: {
      mode: 'dark',
      primary: {
         main: PRIMARY_MAIN,
      },
      secondary: {
         main: SECONDARY_MAIN,
      },
      background: {
         default: BACKGROUND_DEFAULT,
         paper: BACKGROUND_PAPER,
      },
      text: {
         primary: TEXT_PRIMARY,
         secondary: TEXT_SECONDARY,
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
                  color: PRIMARY_MAIN,
               },
            },
         },
      },
   },
});
