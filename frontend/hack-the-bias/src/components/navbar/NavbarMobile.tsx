'use client';

import Link from 'next/link';
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import Image from 'next/image';
import { navigationItems } from './Navbar';
import PreRegisterButton from '@/components/ui/PreRegisterButton';

interface NavbarMobileProps {
  mobileOpen: boolean;
  onDrawerToggle: () => void;
  onNavClick: () => void;
}

export default function NavbarMobile({
  mobileOpen,
  onDrawerToggle,
  onNavClick,
}: NavbarMobileProps) {
  return (
    <>
      {/* Mobile Hamburger Menu Button */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={onDrawerToggle}
        sx={{ display: { md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>

      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={onDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            backgroundColor: '#153166',
            color: 'white',
          },
        }}
      >
        <DrawerContent onNavClick={onNavClick} onClose={onDrawerToggle} />
      </Drawer>
    </>
  );
}

function DrawerContent({
  onNavClick,
  onClose,
}: {
  onNavClick: () => void;
  onClose: () => void;
}) {
  return (
    <Box sx={{ pt: { xs: 9, sm: 10 } }}>
      {/* Drawer Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          pb: 2,
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Box display="flex" alignItems="center">
          <Image
            src="/mascots/mascot_blue.svg"
            alt="Hack the Bias Logo"
            width={40}
            height={40}
            style={{ marginRight: '8px' }}
          />
          <Typography variant="h6" fontWeight={600}>
            Hack the Bias
          </Typography>
        </Box>
        <IconButton onClick={onClose} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Navigation Items */}
      <List sx={{ pt: 1 }}>
        {navigationItems.map((item) => (
          <ListItem
            key={item.href}
            component={Link}
            href={item.href}
            onClick={onNavClick}
            sx={{
              py: 1.5,
              px: 2,
              textDecoration: 'none',
              color: 'white',
              transition: '0.2s',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontSize: '1.1rem',
                fontWeight: 500,
              }}
            />
          </ListItem>
        ))}
      </List>

      {/* Pre-Register Button */}
      <Box sx={{ px: 2, mt: 2 }}>
        <PreRegisterButton
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#B7C4FC',
            color: '#153166',
            fontWeight: 600,
            py: 1.5,
            borderRadius: '12px',
            '&:hover': {
              backgroundColor: '#A0B4FB',
            },
          }}
        >
          Pre-Register Now
        </PreRegisterButton>
      </Box>
    </Box>
  );
}
