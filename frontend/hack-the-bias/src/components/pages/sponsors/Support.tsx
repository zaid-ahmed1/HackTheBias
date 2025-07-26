import { School } from '@mui/icons-material';
import { Typography, Paper } from '@mui/material';
import { Box, Grid } from '@mui/system';

export default function Support() {
  return (
    <Box sx={{ mb: 8 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
      >
        Where Your Support Goes
      </Typography>

      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="body1" paragraph>
            Your sponsorship directly fuels the success of Hack the Bias. Funds
            are allocated to cover essential event logistics such as venue
            booking and internal operations.
          </Typography>
          <Typography variant="body1" paragraph>
            A significant portion goes toward creating an unforgettable
            experience for participants, including engaging educational
            workshops, fun activities, high-quality meals, impactful marketing,
            and exciting prizes.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            elevation={2}
            sx={{
              p: 4,
              borderRadius: 3,
              bgcolor: 'primary.main',
              color: 'white',
              textAlign: 'center',
            }}
          >
            <School fontSize="large" sx={{ mb: 2 }} />
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Promoting Equity & Accessibility
            </Typography>
            <Typography variant="body2">
              We&apos;re designing multiple tracks tailored to different
              experience levels, ensuring both beginners and advanced hackers
              feel supported, challenged, and empowered.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
