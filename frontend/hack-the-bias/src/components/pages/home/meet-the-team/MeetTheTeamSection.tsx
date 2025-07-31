'use client';

import { Box, Typography } from '@mui/material';
import GradientText from '@/components/ui/GradientText';
import TeamCarousel from './TeamCarousel';
import teamMembers from './teamData';

export default function MeetTheTeamSection() {
  return (
    <Box py={6}>
      <GradientText variant="h4" align="center" gutterBottom>
        Meet The Team
      </GradientText>
      <Typography
        variant="body1"
        color="text.secondary"
        align="center"
        mb={4}
        sx={{ maxWidth: '600px', mx: 'auto' }}
      >
        The passionate students behind Hack The Bias, working to create a more
        inclusive tech community.
      </Typography>

      <TeamCarousel members={teamMembers} />
    </Box>
  );
}
