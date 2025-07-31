'use client';

import { ReactNode, useRef, useEffect, useState } from 'react'; // Change useLayoutEffect to useEffect
import Navbar from './navbar/Navbar';
import Footer from './Footer';

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = useState(0);

  // Use useEffect instead of useLayoutEffect
  // This will ensure the initial render on the client matches the server.
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
      }}
    >
      <div ref={navbarRef}>
        <Navbar />
      </div>
      <div
        style={{
          flex: 1,
          marginTop: navHeight, // This will be 0 initially, and then update after the client renders
          animation: 'animatedRadial 20s ease infinite',
          background: `
            radial-gradient(circle at 20% 20%, #B7C4FC 0%, transparent 30%),
            radial-gradient(circle at 80% 30%, #BCEAF8 0%, transparent 40%),
            radial-gradient(circle at 50% 80%, #F7D8F6 0%, transparent 25%),
            #FAF8D1`,
          backgroundSize: '200% 200%',
          padding: '2rem',
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}
