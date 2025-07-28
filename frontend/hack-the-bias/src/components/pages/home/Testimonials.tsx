'use client';

import GradientText from '@/components/ui/GradientText';
import { Box, Typography, Grid, Paper, Avatar } from '@mui/material';

const testimonials = [
  {
    name: 'Alex Johnson',
    role: '2024 HackTheBias Participant',
    quote:
      "HackTheBias was one of the most inclusive and inspiring hackathons I've ever attended. I met amazing people and built something that truly mattered.",
    avatar: '/testimonials/alex.jpg',
  },
  {
    name: 'Sofia Lin',
    role: 'Mentor & Sponsor',
    quote:
      'It was incredible seeing the creativity and diversity of the teams. Supporting HackTheBias aligns perfectly with our values.',
    avatar: '/testimonials/sofia.jpg',
  },
  {
    name: 'Marcus Lee',
    role: 'Winning Team Member',
    quote:
      'From the mentors to the workshops, everything was top-notch. I walked away with new skills, new friends, and a renewed sense of purpose.',
    avatar: '/testimonials/marcus.jpg',
  },
];

export default function TestimonialsSection() {
  return (
    <Box py={2}>
      <GradientText variant="h4" align="center" gutterBottom>
        What People Are Saying
      </GradientText>
      <Typography variant="body1" color="text.secondary" align="center" mb={6}>
        Hear from our past participants, mentors, and supporters.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((t, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Paper
              elevation={4}
              sx={{
                p: 4,
                borderRadius: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                background: '#fff',
              }}
            >
              <Typography variant="body1" fontStyle="italic">
                “{t.quote}”
              </Typography>
              <Box display="flex" alignItems="center" mt="auto" gap={2}>
                <Avatar src={t.avatar} alt={t.name} />
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {t.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t.role}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
