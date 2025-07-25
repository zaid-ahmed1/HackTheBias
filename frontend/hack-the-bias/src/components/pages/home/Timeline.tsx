'use client';

import { Box, CircularProgress, Typography } from '@mui/material';
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
      <Typography
        sx={{
          fontWeight: 700,
          mb: 2,
          background: 'linear-gradient(to right, #6179e2, #7d4c7c, #7ad2ed)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        variant="h4"
        fontWeight={600}
      >
        Hacking begins in
      </Typography>

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
