'use client';

import { Box, Typography } from '@mui/material';
import GradientText from '@/components/ui/GradientText';
import DesktopTimeline from './DesktopTimeline';
import MobileTimeline from './MobileTimeline';

export default function HowItWorksSection() {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: '1000px',
        mx: 'auto',
        mt: 4,
        px: 3,
        textAlign: 'center',
      }}
    >
      <GradientText
        variant="h4"
        sx={{
          mb: 2,
        }}
      >
        How It Works
      </GradientText>

      <Typography variant="body1" sx={{ mb: 6, color: 'rgba(0,0,0,0.65)' }}>
        From idea to impact — here&apos;s what your Hack The Bias journey looks
        like:
      </Typography>

      {/* Desktop Timeline */}
      <DesktopTimeline />

      {/* Mobile Timeline */}
      <MobileTimeline />
    </Box>
  );
}
