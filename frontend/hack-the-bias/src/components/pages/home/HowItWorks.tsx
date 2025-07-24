'use client';

import { Box, Typography, Paper, Grid } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import GroupsIcon from '@mui/icons-material/Groups';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const steps = [
  {
    icon: <LightbulbIcon sx={{ fontSize: 40, color: '#153166' }} />,
    title: 'Pick a Challenge',
    description:
      'Choose from a list of curated prompts focused on justice, equity, health, and accessibility.',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 40, color: '#153166' }} />,
    title: 'Form a Team',
    description:
      'Collaborate with passionate hackers, designers, and changemakers to brainstorm bold solutions.',
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 40, color: '#153166' }} />,
    title: 'Build & Launch',
    description:
      'Turn your idea into reality in 36 hours. Present your project to judges and make your impact.',
  },
];

export default function HowItWorksSection() {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: '1100px',
        mx: 'auto',
        mt: 4,
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
        How It Works
      </Typography>

      <Typography variant="body1" sx={{ mb: 6, color: 'rgba(0,0,0,0.65)' }}>
        From idea to impact — here’s what your HackTheBias journey looks like:
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {steps.map((step, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Paper
              elevation={6}
              sx={{
                p: 4,
                borderRadius: 4,
                height: '100%',
                backgroundColor: '#ffffffd0',
                backdropFilter: 'blur(6px)',
              }}
            >
              <Box mb={2}>{step.icon}</Box>
              <Typography variant="h6" fontWeight={600} mb={1}>
                {step.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {step.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
