'use client';

import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

export const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'Robogals', href: '/robogals' },
  { label: 'For Sponsors', href: '/sponsors' },
  { label: 'FAQ', href: '/faq' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: 'rgba(21, 49, 102, 0.85)',
          backdropFilter: 'blur(4px)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 4 } }}>
          {/* Logo */}
          <Box
            display="flex"
            alignItems="center"
            component={Link}
            href="/"
            sx={{ textDecoration: 'none' }}
          >
            <Image
              src="/mascots/mascot_blue.svg"
              alt="Hack the Bias Logo"
              width={isMobile ? 50 : 60}
              height={isMobile ? 50 : 60}
              style={{ marginRight: '8px' }}
            />
            <Typography
              variant="h6"
              fontWeight={600}
              color="background.paper"
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                display: { xs: 'none', sm: 'block' },
              }}
            >
              Hack the Bias
            </Typography>
            <Typography
              variant="h6"
              fontWeight={600}
              color="background.paper"
              sx={{
                fontSize: '1rem',
                display: { xs: 'block', sm: 'none' },
              }}
            >
              HTB
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <NavbarDesktop />

          {/* Mobile Hamburger Menu */}
          <NavbarMobile
            mobileOpen={mobileOpen}
            onDrawerToggle={handleDrawerToggle}
            onNavClick={handleMobileNavClick}
          />
        </Toolbar>
      </AppBar>
    </>
  );
}
