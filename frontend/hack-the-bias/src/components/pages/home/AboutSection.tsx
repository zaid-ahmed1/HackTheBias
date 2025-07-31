'use client';

import { Box, Typography, Divider } from '@mui/material';

export default function AboutSection() {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: '900px',
        mx: 'auto',
        px: 3,
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 2,
          background: 'linear-gradient(to right, #6179e2, #7d4c7c, #7ad2ed)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        About Hack The Bias
      </Typography>

      <Divider
        sx={{
          width: '60px',
          height: '4px',
          mx: 'auto',
          mb: 4,
          borderRadius: 2,
          background: '#BCEAF8',
        }}
      />

      <Typography
        variant="body1"
        sx={{ color: 'rgba(0,0,0,0.75)', lineHeight: 1.8 }}
      >
        Hack the Bias is a community-powered hackathon created for students,
        technologists, and activists who want to build solutions that tackle
        real-world issues. From racial justice to accessibility, our mission is
        to inspire innovation that amplifies underrepresented voices and drives
        positive change.
      </Typography>

      <Typography
        variant="body1"
        sx={{ mt: 3, color: 'rgba(0,0,0,0.75)', lineHeight: 1.8 }}
      >
        Whether you&apos;re a developer, designer, storyteller, or strategist —
        there&apos;s a place for you here. Collaborate, learn, and launch
        meaningful ideas into the world.
      </Typography>
    </Box>
  );
}
