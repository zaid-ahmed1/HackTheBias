import { ReactNode } from 'react';
import ClientThemeProvider from './ClientThemeProvider';

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <ClientThemeProvider>
      {children}
    </ClientThemeProvider>
  );
}