'use client';

import { Box, Typography } from '@mui/material';
import SponsorEcosystemDisplay from '@/components/ThreeJs/SponsorCard';
import GradientText from '@/components/ui/GradientText';

const sponsors = [
  {
    name: 'Arcurve',
    logo: '/sponsors/arcurve.png',
    url: 'https://arcurve.com/',
  },
];

export default function SponsorsSection() {
  return (
    <Box py={2} textAlign="center">
      <GradientText variant="h4" gutterBottom>
        Our Sponsors
      </GradientText>
      <Typography variant="body1" color="text.secondary">
        We&apos;re grateful for the support of these incredible organizations.
      </Typography>
      <SponsorEcosystemDisplay sponsors={sponsors} />
    </Box>
  );
}
