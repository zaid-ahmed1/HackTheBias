'use client';

import { Box, Button, Typography, Paper } from '@mui/material';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <Box py={2}>
      <Paper
        elevation={4}
        sx={{
          background: 'linear-gradient(135deg, #153166, #B7C4FC)',
          color: '#fff',
          borderRadius: 4,
          p: { xs: 4, md: 6 },
          maxWidth: '900px',
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Ready to Hack the Bias?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Join changemakers from around the world this January and build
          something that matters.
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          size="large"
          component={Link}
          href="/register"
          sx={{
            fontWeight: 600,
            px: 4,
            py: 1.5,
            borderRadius: 2,
          }}
        >
          Sign Up Now
        </Button>
      </Paper>
    </Box>
  );
}
