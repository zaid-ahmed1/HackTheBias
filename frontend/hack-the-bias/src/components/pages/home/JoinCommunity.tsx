'use client';

import {
  Box,
  Typography,
  IconButton,
  Stack,
  Link as MuiLink,
} from '@mui/material';
import { FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';

export default function JoinCommunity() {
  return (
    <Box
      py={0}
      sx={{
        background: 'linear-gradient(135deg, #153166, #B7C4FC)',
        color: 'white',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
      }}
    >
      <Box
        sx={{
          maxWidth: '900px',
          mx: 'auto',
          textAlign: 'center',
          p: { xs: 4, md: 6 },
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Join the Hack The Bias Community
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
          Connect with hackers, organizers, and supporters from around the
          world. Stay in the loop on events, news, and updates.
        </Typography>

        <Stack direction="row" spacing={4} justifyContent="center">
          <IconButton
            component={MuiLink}
            href="https://www.instagram.com/hackthebias.ucalgary/"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                transform: 'scale(1.1)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <FaInstagram size={32} />
          </IconButton>
          <IconButton
            component={MuiLink}
            href="https://www.linkedin.com/company/hack-the-bias/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                transform: 'scale(1.1)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <FaLinkedin size={32} />
          </IconButton>
          <IconButton
            component={MuiLink}
            href="https://discord.gg/tpqqkYp9jT"
            target="_blank"
            rel="noopener"
            aria-label="Discord"
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                transform: 'scale(1.1)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <FaDiscord size={32} />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}
