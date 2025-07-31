import { Typography, Box } from '@mui/material';
import { Grid } from '@mui/system';
import {
  CalendarToday,
  Group,
  Schedule,
  Psychology,
} from '@mui/icons-material';
import GradientText from '@/components/ui/GradientText';

const eventStats = [
  {
    label: 'Event Style',
    value: '36 Hours, In Person & Virtual',
    icon: <Schedule />,
    gradient: 'linear-gradient(135deg, #153166 0%, #4A6FA5 100%)',
  },
  {
    label: 'Date',
    value: 'January 16th-18th, 2026',
    icon: <CalendarToday />,
    gradient: 'linear-gradient(135deg, #B7C4FC 0%, #8FA9F3 100%)',
  },
  {
    label: 'Participants',
    value: 'University + High School Students',
    icon: <Group />,
    gradient: 'linear-gradient(135deg, #BCEAF8 0%, #7DD3FC 100%)',
  },
  {
    label: 'Focus',
    value: 'Systemic Bias, Equity, Inclusion',
    icon: <Psychology />,
    gradient: 'linear-gradient(135deg, #F7D8F6 0%, #E879F9 100%)',
  },
];

export default function EventStats() {
  return (
    <Box sx={{ mb: 8, pt: 4 }}>
      <GradientText
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
        sx={{ mb: 6 }}
      >
        Event at a Glance
      </GradientText>

      <Grid container spacing={3} justifyContent="center">
        {eventStats.map((stat, index) => (
          <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
            <Box
              sx={{
                background: stat.gradient,
                borderRadius: 4,
                p: 4,
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                height: { xs: '200px', sm: '220px' }, // Fixed height for consistency
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: 4,
                  pointerEvents: 'none',
                },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '100%',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    fontSize: '2.5rem',
                    color: index === 0 ? 'white' : '#153166',
                    mb: 2,
                  }}
                >
                  {stat.icon}
                </Box>

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    mb: 2,
                    color: index === 0 ? 'white' : '#153166',
                    lineHeight: 1.3,
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  {stat.value}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color:
                      index === 0
                        ? 'rgba(255,255,255,0.8)'
                        : 'rgba(21, 49, 102, 0.7)',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
