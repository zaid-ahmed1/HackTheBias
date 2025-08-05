import { Box, Typography, Button } from '@mui/material';
import { Launch } from '@mui/icons-material';
import GradientText from '@/components/ui/GradientText';

export default function RobogalsHero() {
  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        py: { xs: 6, md: 8 },
        px: 3,
        gap: 4,
      }}
    >
      <GradientText
        variant="h2"
        sx={{
          fontWeight: 700,
          fontSize: { xs: '2.5rem', md: '4rem' },
          mb: 2,
        }}
      >
        Robogals UCalgary
      </GradientText>

      <Typography
        variant="h5"
        sx={{
          maxWidth: '600px',
          color: 'rgba(0,0,0,0.75)',
          fontWeight: 500,
          mb: 2,
        }}
      >
        Mission: Inspire, Empower and Engage!
      </Typography>

      <Button
        variant="contained"
        size="large"
        endIcon={<Launch />}
        href="https://robogalsucalgary.com/"
        target="_blank"
        rel="noopener noreferrer"
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
        Visit Robogals Website
      </Button>
    </Box>
  );
}
