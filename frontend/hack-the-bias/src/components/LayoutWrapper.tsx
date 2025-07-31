'use client';

import { ReactNode, useRef, useEffect, useState } from 'react';
import Navbar from './navbar/Navbar';
import Footer from './Footer';

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      setNavHeight(navbarRef.current.offsetHeight + 8);
    }
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        overflow: 'hidden', // Prevent horizontal scroll
      }}
    >
      <div ref={navbarRef}>
        <Navbar />
      </div>
      <div
        style={{
          flex: 1,
          marginTop: navHeight,
          animation: 'animatedRadial 20s ease infinite',
          background: `
            radial-gradient(circle at 20% 20%, #B7C4FC 0%, transparent 30%),
            radial-gradient(circle at 80% 30%, #BCEAF8 0%, transparent 40%),
            radial-gradient(circle at 50% 80%, #F7D8F6 0%, transparent 25%),
            #FAF8D1`,
          backgroundSize: '200% 200%',
          padding: '2rem',
          overflow: 'hidden', // Prevent content overflow
          width: '100%', // Ensure it doesn't exceed viewport
          maxWidth: '100vw', // Additional safety
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}
