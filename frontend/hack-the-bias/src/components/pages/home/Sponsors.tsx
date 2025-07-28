'use client';

import { Box, Typography } from '@mui/material';

// const sponsors = [
//   { name: 'TechCorp', logo: '/sponsors/techcorp.png' },
//   { name: 'OpenAI', logo: '/sponsors/openai.png' },
//   { name: 'DevHub', logo: '/sponsors/devhub.png' },
//   { name: 'CloudBase', logo: '/sponsors/cloudbase.png' },
//   // Add more sponsors here
// ];

export default function SponsorsSection() {
  return (
    <Box py={2} textAlign="center">
      <Typography variant="h4" gutterBottom>
        Our Sponsors
      </Typography>
      <Typography variant="body1" color="text.secondary">
        We&apos;re grateful for the support of these incredible organizations.
      </Typography>
      {/* Bring Back when we get sponsors */}
      {/* <SponsorEcosystemDisplay sponsors={sponsors} /> */}
    </Box>
  );
}
