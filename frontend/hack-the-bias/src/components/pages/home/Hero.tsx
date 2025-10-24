'use client';

import GradientText from '@/components/ui/GradientText';
import { Box, Typography } from '@mui/material';

export default function Hero() {

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        py: 3,
        px: 3,
        gap: 7,
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

    </Box>
  );
}
