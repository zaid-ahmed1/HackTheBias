import { Star } from '@mui/icons-material';
import { Card, CardContent, Chip, Typography } from '@mui/material';
import { Box, Grid } from '@mui/system';

// Sample sponsor data with actual tiers from the package
const sponsors = [
  {
    id: 1,
    name: 'KPMG',
    logo: '/sponsors/kpmg.png',
    tier: 'Visionary',
    description: 'Leading professional services and advisory firm',
    industry: 'Professional Services',
    website: 'https://kpmg.com',
  },
  {
    id: 2,
    name: 'Cenovus Energy',
    logo: '/sponsors/cenovus.png',
    tier: 'Trailblazer',
    description: 'Innovative energy company driving sustainable solutions',
    industry: 'Energy',
    website: 'https://cenovus.com',
  },
  {
    id: 3,
    name: 'City of Calgary',
    logo: '/sponsors/calgary.png',
    tier: 'Maverick',
    description: 'Supporting innovation and technology in Calgary',
    industry: 'Government',
    website: 'https://calgary.ca',
  },
];

// Bring back as we get sponsors
const getTierColor = (tier: string) => {
  switch (tier) {
    case 'Visionary':
      return '#FFD700';
    case 'Trailblazer':
      return '#F7931E';
    case 'Maverick':
      return '#FF6B35';
    case 'Advocate':
      return '#8B5A8C';
    default:
      return '#8B5A8C';
  }
};

export default function CurrentSponsors() {
  return (
    <Box sx={{ mb: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Our Sponsors
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 600, mx: 'auto' }}
        >
          We&apos;ve proudly partnered with industry leaders who share our
          vision for a more diverse and inclusive tech industry.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {sponsors.map((sponsor) => (
          <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={sponsor.id}>
            <Card
              sx={{
                height: '100%',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
                },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  p: 3,
                  bgcolor: '#fafafa',
                  minHeight: 160,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h6" color="text.secondary">
                  {sponsor.name}
                </Typography>
                <Chip
                  icon={<Star />}
                  label={sponsor.tier}
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    bgcolor: getTierColor(sponsor.tier),
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                />
              </Box>
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {sponsor.description}
                </Typography>
                <Chip
                  label={sponsor.industry}
                  size="small"
                  variant="outlined"
                  sx={{ color: '#8B5A8C', borderColor: '#8B5A8C' }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
