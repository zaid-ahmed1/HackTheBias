'use client';

import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        py: 2,
        px: 3,
        gap: 4,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          fontSize: { xs: '2.5rem', md: '4rem' },
          backgroundImage: `
            linear-gradient(
              90deg,
              #6179e2 0%,
              #7d4c7c 25%,
              #7ad2ed 50%,
              #7d4c7c 75%,
              #6179e2 100%
            )
          `,
          backgroundSize: '200% 100%',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'shimmerLoop 4s ease-in-out infinite',
        }}
      >
        Empowering Change Through Innovation
      </Typography>

      <Typography
        variant="h6"
        sx={{
          maxWidth: '700px',
          color: 'rgba(0,0,0,0.7)',
          fontWeight: 400,
        }}
      >
        Hack The Bias is a youth-led hackathon that challenges developers,
        designers, and dreamers to build tech for social justice, inclusion, and
        equity.
      </Typography>

      <Button
        variant="contained"
        size="large"
        sx={{
          px: 5,
          borderRadius: '999px',
          fontWeight: 600,
          background: '#153166',
          color: '#fff',
          boxShadow: '0 0 10px rgba(0,0,0,0.2)',
          transition: '0.3s ease',
          '&:hover': {
            background: '#1c417f',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
          },
        }}
        onClick={() => router.push('/about')}
      >
        Learn More
      </Button>
    </Box>
  );
}
