'use client';

import GradientText from '@/components/ui/GradientText';
import { Box, CircularProgress } from '@mui/material';
import dynamic from 'next/dynamic';

// Dynamically load ThreeCountdown with no SSR to avoid hydration issues
const ThreeCountdown = dynamic(() => import('../../ThreeJs/ThreeCountdown'), {
  ssr: false,
  loading: () => (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={200}
    >
      <CircularProgress />
    </Box>
  ),
});

export default function TimelineSection() {
  // const [participants] = useState(136);

  return (
    <Box
      py={10}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      sx={{ gap: 4 }}
    >
      <GradientText
        sx={{
          mb: 2,
        }}
        variant="h4"
        fontWeight={600}
      >
        Hacking begins in
      </GradientText>

      <Box sx={{ width: '100%', maxWidth: 900, justifyContent: 'center' }}>
        <ThreeCountdown />
      </Box>
      {/* We will bring this back once we setup the actual backend for it */}
      {/* <Typography variant="h6" color="text.secondary">
        {participants.toLocaleString()} participants registered
      </Typography> */}
    </Box>
  );
}
