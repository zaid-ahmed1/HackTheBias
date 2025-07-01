'use client';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { ReactNode } from 'react';
import { CacheProvider } from '@emotion/react';
import emotionCache from './EmotionCache';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#153166', contrastText: '#ffffff' }, // Delft Blue
    secondary: { main: '#B7C4FC' }, // Periwinkle
    background: {
      default: '#FAF8D1', // Cream
      paper: '#ffffff',
    },
    info: { main: '#BCEAF8' }, // Non-Photo Blue
    warning: { main: '#F7D8F6' }, // Pale Purple
  },
  shape: {
    borderRadius: 12,
  },
});

export default function ClientThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
