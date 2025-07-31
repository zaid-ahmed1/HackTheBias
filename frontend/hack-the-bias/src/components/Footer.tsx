'use client';

import {
  Typography,
  Container,
  Box,
  IconButton,
  Stack,
  Link as MuiLink,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  const [year, setYear] = useState(0);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(to right, #B7C4FC, #F7D8F6)',
        color: '#222',
        textAlign: 'center',
        py: 3,
        fontSize: '0.875rem',
        borderTop: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0 -2px 6px rgba(0,0,0,0.1)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Centered Text */}
          <Typography variant="body2" color="textSecondary" align="center">
            © {year} Hack the Bias. All rights reserved.
          </Typography>
        </Box>
      </Container>

      {/* Right-aligned Social Media Icons - positioned relative to full footer width */}
      <Box
        sx={{
          position: 'absolute',
          right: { xs: 16, sm: 24, md: 32, lg: 48 }, // Responsive right padding
          top: '50%',
          transform: 'translateY(-50%)',
          display: { xs: 'none', sm: 'flex' },
          gap: 1,
        }}
      >
        <IconButton
          component={MuiLink}
          href="https://www.instagram.com/hackthebias.ucalgary/"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
          sx={{
            color: '#E1306C',
            '&:hover': {
              backgroundColor: 'rgba(225, 48, 108, 0.1)',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease',
            p: 0.5,
          }}
        >
          <FaInstagram size={20} />
        </IconButton>
        <IconButton
          component={MuiLink}
          href="https://www.linkedin.com/company/hack-the-bias/"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          sx={{
            color: '#0077B5',
            '&:hover': {
              backgroundColor: 'rgba(0, 119, 181, 0.1)',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease',
            p: 0.5,
          }}
        >
          <FaLinkedin size={20} />
        </IconButton>
        <IconButton
          component={MuiLink}
          href="https://discord.gg/tpqqkYp9jT"
          target="_blank"
          rel="noopener"
          aria-label="Discord"
          sx={{
            color: '#5865F2',
            '&:hover': {
              backgroundColor: 'rgba(88, 101, 242, 0.1)',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease',
            p: 0.5,
          }}
        >
          <FaDiscord size={20} />
        </IconButton>
      </Box>

      {/* Mobile: Show icons centered below copyright */}
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          justifyContent: 'center',
          mt: 2,
        }}
      >
        <Stack direction="row" spacing={1}>
          <IconButton
            component={MuiLink}
            href="https://instagram.com/hackthebias"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            sx={{
              color: '#E1306C',
              '&:hover': {
                backgroundColor: 'rgba(225, 48, 108, 0.1)',
                transform: 'scale(1.1)',
              },
              transition: 'all 0.3s ease',
              p: 0.5,
            }}
          >
            <FaInstagram size={20} />
          </IconButton>
          <IconButton
            component={MuiLink}
            href="https://linkedin.com/company/hackthebias"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            sx={{
              color: '#0077B5',
              '&:hover': {
                backgroundColor: 'rgba(0, 119, 181, 0.1)',
                transform: 'scale(1.1)',
              },
              transition: 'all 0.3s ease',
              p: 0.5,
            }}
          >
            <FaLinkedin size={20} />
          </IconButton>
          <IconButton
            component={MuiLink}
            href="https://discord.gg/hackthebias"
            target="_blank"
            rel="noopener"
            aria-label="Discord"
            sx={{
              color: '#5865F2',
              '&:hover': {
                backgroundColor: 'rgba(88, 101, 242, 0.1)',
                transform: 'scale(1.1)',
              },
              transition: 'all 0.3s ease',
              p: 0.5,
            }}
          >
            <FaDiscord size={20} />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}
