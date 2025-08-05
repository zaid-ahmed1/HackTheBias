import { Box, Typography, Divider, Button } from '@mui/material';
import { Launch } from '@mui/icons-material';
import GradientText from '@/components/ui/GradientText';

export default function HackTheBiasSection() {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: '900px',
        mx: 'auto',
        px: 3,
        textAlign: 'center',
        py: 4,
      }}
    >
      <GradientText
        variant="h4"
        sx={{
          mb: 2,
        }}
      >
        Hack the Bias
      </GradientText>

      <Divider
        sx={{
          width: '60px',
          height: '4px',
          mx: 'auto',
          mb: 4,
          borderRadius: 2,
          background: '#B7C4FC',
        }}
      />

      <Typography
        variant="body1"
        sx={{
          color: 'rgba(0,0,0,0.75)',
          lineHeight: 1.8,
          mb: 4,
          fontSize: '1.1rem',
        }}
      >
        New to the team&apos;s annual portfolio is Hack the Bias, a free of cost
        hackathon hosted at the University of Calgary&apos;s main campus
        prompting young innovators to design solutions to challenges around
        justice, equity, health, and accessibility.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: 'rgba(0,0,0,0.75)',
          lineHeight: 1.8,
          mb: 4,
          fontSize: '1.1rem',
        }}
      >
        Approaching the second annual Hack the Bias competition in January 2026,
        the team is ambitiously planning on piloting Calgary&apos;s first
        36-hour hackathon, an additional 24 hours from last year&apos;s event.
        For this unique experience, an additional tier has also been added,
        extending the invite from high school and first year undergraduate
        students (Tier 2) to now second year and higher undergraduates as well
        (Tier 1).
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: 'rgba(0,0,0,0.75)',
          lineHeight: 1.8,
          fontWeight: 600,
          mb: 4,
          fontSize: '1.1rem',
        }}
      >
        Pre-registration is now open - come design modern technological
        solutions for inclusion, equity, and change!
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
        Learn More About Robogals
      </Button>
    </Box>
  );
}
