import { Typography, Paper } from '@mui/material';
import { Box, Grid } from '@mui/system';

const eventStats = [
  { label: 'Event Style', value: '36 Hours, In Person & Virtual' },
  { label: 'Date', value: 'January 16th-18th, 2026' },
  {
    label: 'Participants',
    value: 'University + High Schools Students',
  },
  { label: 'Focus', value: 'Systemic Bias, Equity, Inclusion' },
];

export default function EventStats() {
  return (
    <Box sx={{ mb: 8 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
      >
        Event at a Glance
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
        {eventStats.map((stat, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                textAlign: 'center',
                borderRadius: 3,
                height: 200,
                width: { xs: '100%', sm: 280 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                color="primary.main"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  lineHeight: 1.2,
                  mt: 1,
                  textAlign: 'center',
                  wordBreak: 'break-word',
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  lineHeight: 1.3,
                  textAlign: 'center',
                  maxWidth: '100%',
                  wordBreak: 'break-word',
                  mb: 1,
                }}
              >
                {stat.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
