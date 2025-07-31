'use client';

import { Box, Container } from '@mui/material';
import SponsorsHero from './SponsorsHero';
import WhyUs from './WhyUs';
import Support from './Support';
import FinalCallToAction from './FinalCallToAction';

export default function ForSponsors() {
  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <SponsorsHero />
        <WhyUs />
        <Support />
        {/* <CurrentSponsors /> */}
        <FinalCallToAction />
      </Box>
    </Container>
  );
}
