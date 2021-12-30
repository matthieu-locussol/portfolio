import { Theme } from '@emotion/react';
import { createTheme } from '@mui/material';

export const lightTheme: Theme = createTheme({
   palette: {
      mode: 'light',
      primary: {
         main: '#24BF9A',
      },
      secondary: {
         main: '#0B192F',
      },
      background: {
         default: '#F3F7F9',
         paper: '#FFFFFF',
      },
      text: {
         primary: '#212529',
         secondary: '#6B7280',
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
                  color: '#24BF9A',
               },
            },
         },
      },
   },
});
