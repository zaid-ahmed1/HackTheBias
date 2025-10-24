'use client';

import GradientText from '@/components/ui/GradientText';
import PreRegisterButton from '@/components/ui/PreRegisterButton';
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

      <PreRegisterButton
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
      >
        Pre-Register Now
      </PreRegisterButton>

      {/* We will bring this back once we setup the actual backend for it */}
      {/* <Typography variant="h6" color="text.secondary">
        {participants.toLocaleString()} participants registered
      </Typography> */}
    </Box>
  );
}
