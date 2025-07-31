'use client';

import Link from 'next/link';
import { Button, Box } from '@mui/material';
import { navigationItems } from './Navbar';
import PreRegisterButton from '@/components/ui/PreRegisterButton';

export default function NavbarDesktop() {
  return (
    <Box display={{ xs: 'none', md: 'flex' }} gap={2} alignItems="center">
      {navigationItems.map((item: { href: string; label: string }) => (
        <NavButton key={item.href} href={item.href}>
          {item.label}
        </NavButton>
      ))}

      {/* Pre-Register Button */}
      <PreRegisterButton
        variant="contained"
        sx={{
          backgroundColor: '#B7C4FC',
          color: '#153166',
          fontWeight: 600,
          px: 3,
          py: 1,
          borderRadius: '12px',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#A0B4FB',
            transform: 'translateY(-1px)',
          },
          transition: 'all 0.2s ease',
        }}
      >
        Pre-Register
      </PreRegisterButton>
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
