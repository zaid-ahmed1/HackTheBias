'use client';

import { Box, Container } from '@mui/material';
import SponsorsHero from './SponsorsHero';
import EventStats from './EventStats';
import WhyUs from './WhyUs';
import Support from './Support';
import FinalCallToAction from './FinalCallToAction';

export default function ForSponsors() {
  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <SponsorsHero />
        <EventStats />
        <WhyUs />
        <Support />
        {/* <CurrentSponsors /> */}
        <FinalCallToAction />
      </Box>
    </Container>
  );
}
