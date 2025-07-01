// app/theme/ThemeRegistry.tsx
'use client';
import { useState } from 'react';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode } from 'react';

// This implementation is directly from the official MUI documentation for the Next.js App Router.
// https://mui.com/material-ui/integrations/nextjs/

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

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: 'mui-styles' });
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
