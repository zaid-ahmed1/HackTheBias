'use client';

import GradientText from '@/components/ui/GradientText';
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
      <GradientText
        variant="h2"
        sx={{
          fontWeight: 700,
          fontSize: { xs: '2.5rem', md: '4rem' },
        }}
      >
        Empowering Change Through Innovation
      </GradientText>

      <Typography
        variant="h6"
        sx={{
          maxWidth: '700px',
          color: 'rgba(0,0,0,0.7)',
          fontWeight: 400,
        }}
      >
        Hack the Bias is a student-run initiative of Robogals UCalgary that challenges developers,
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
        onClick={() => router.push('https://robogalsucalgary.com/')}
      >
        Learn More About Robogals
      </Button>
    </Box>
  );
}
