import { ThemeProvider } from '@mui/material';
import type { PropsWithChildren } from 'react';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { darkTheme } from '../theme/dark';
import { lightTheme } from '../theme/light';

type ThemeType = 'light' | 'dark';

type ColorModeContextInterface = {
   colorMode: ThemeType;
   toggleColorMode: () => void;
};

export const ColorModeContext = React.createContext<ColorModeContextInterface>({
   colorMode: 'dark',
   toggleColorMode: () => {},
});

export const useColorMode = () => useContext(ColorModeContext);

export const ColorModeProvider = ({ children }: PropsWithChildren<{}>) => {
   const [colorMode, setColorMode] = useState<ThemeType>('dark');

   const toggleColorMode = () => {
      const newColorMode = colorMode === 'dark' ? 'light' : 'dark';

      setColorMode(newColorMode);
      window.localStorage.setItem('colorMode', newColorMode);
   };

   const state: ColorModeContextInterface = { colorMode, toggleColorMode };

   const colorTheme = useMemo(() => {
      if (colorMode === 'dark') {
         return darkTheme;
      }

      return lightTheme;
   }, [colorMode]);

   useEffect(() => {
      const preference = window.localStorage.getItem('colorMode') as ThemeType;

      if (preference !== null && preference !== colorMode) {
         setColorMode(preference);
      }
   }, []);

   return (
      <ColorModeContext.Provider value={state}>
         <ThemeProvider theme={colorTheme}>{children}</ThemeProvider>
      </ColorModeContext.Provider>
   );
};
