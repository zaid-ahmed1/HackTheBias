'use client';
import createCache from '@emotion/cache';

const emotionCache = createCache({
  key: 'css',
  prepend: true, // Ensures MUI styles are injected first
});

export default emotionCache;
