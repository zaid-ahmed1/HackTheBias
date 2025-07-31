'use client';

import Link from 'next/link';
import { Button, Box } from '@mui/material';
import { navigationItems } from './Navbar';

export default function NavbarDesktop() {
  return (
    <Box display={{ xs: 'none', md: 'flex' }} gap={2}>
      {navigationItems.map((item) => (
        <NavButton key={item.href} href={item.href}>
          {item.label}
        </NavButton>
      ))}
    </Box>
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
