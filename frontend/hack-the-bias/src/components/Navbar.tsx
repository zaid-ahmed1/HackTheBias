'use client';

import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Image from 'next/image';

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        background: 'rgba(21, 49, 102, 0.85)', // Delft Blue with opacity
        backdropFilter: 'blur(4px)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
        <Box
          display="flex"
          alignItems="center"
          component={Link}
          href="/"
          sx={{ textDecoration: 'none' }}
        >
          <Image
            src="/pixel.svg"
            alt="HackTheBias Logo"
            width={60}
            height={60}
            style={{ marginRight: '8px' }}
          />
          <Typography variant="h6" fontWeight={600} color="background.paper">
            HackTheBias
          </Typography>
        </Box>
        <Box display="flex" gap={2}>
          <NavButton href="/">Home</NavButton>
          <NavButton href="/about">About</NavButton>
          <NavButton href="/sponsors">For Sponsors</NavButton>
          <NavButton href="/faq">FAQ</NavButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

function NavButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Button
      component={Link}
      href={href}
      sx={{
        color: '#fff',
        fontWeight: 500,
        px: 2.5,
        py: 1,
        borderRadius: '12px',
        textTransform: 'none',
        transition: '0.3s',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          boxShadow: '0 0 6px rgba(255, 255, 255, 0.4)',
        },
      }}
    >
      {children}
    </Button>
  );
}
