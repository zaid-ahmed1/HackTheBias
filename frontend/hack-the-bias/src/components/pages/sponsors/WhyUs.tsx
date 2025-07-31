import { People, Campaign, EmojiEvents } from '@mui/icons-material';
import { Typography, Paper, Chip } from '@mui/material';
import { Box, Grid } from '@mui/system';

const whyUsReasons = [
  {
    icon: <People color="primary" />,
    title: 'Top Diverse Talent',
    description:
      'Our hackathon attracts a highly motivated and diverse group of university students, with varying educational experiences and individual strengths. Gain early access to innovative thinkers and future leaders.',
    percentage: '69% first-time hackers',
  },
  {
    icon: <Campaign color="primary" />,
    title: 'Amplify Your Brand',
    description:
      'Engage directly with participants, mentors, and industry leaders through speaking opportunities, branded challenges, and booths. Position your organization at the forefront of tech innovation.',
    percentage: 'High brand visibility',
  },
  {
    icon: <EmojiEvents color="primary" />,
    title: 'Showcase Social Impact',
    description:
      'Your sponsorship highlights your role as a socially responsible leader dedicated to fostering innovation that drives real-world change and creates equitable opportunities.',
    percentage: 'Real-world impact',
  },
];

export default function WhyUs() {
  return (
    <Box sx={{ mb: 8 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
      >
        Why Sponsor HackTheBias?
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        color="text.secondary"
        sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}
      >
        An initiative by Robogals UCalgary, building on partnerships with
        industry leaders
      </Typography>

      <Grid container spacing={4}>
        {whyUsReasons.map((reason, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                textAlign: 'center',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                },
              }}
            >
              <Box sx={{ mb: 2 }}>{reason.icon}</Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {reason.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {reason.description}
              </Typography>
              <Chip
                label={reason.percentage}
                color="primary"
                size="small"
                sx={{
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  px: 1,
                  mt: 'auto', // Pushes chip to bottom
                }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
