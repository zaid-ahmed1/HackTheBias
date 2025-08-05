import { Box, Typography, Divider } from '@mui/material';
import GradientText from '@/components/ui/GradientText';

export default function ExpandingReach() {
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
        Expanding Our Reach
      </GradientText>

      <Divider
        sx={{
          width: '60px',
          height: '4px',
          mx: 'auto',
          mb: 4,
          borderRadius: 2,
          background: '#F7D8F6',
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
        A more inclusive approach of working towards breaking down accessibility
        barriers in different forms has been adopted, with piloting initiatives
        of travelling to schools located on reserves outside of Calgary. In fall
        2023, we developed a relationship with Nakoda Elementary located on the
        Stoney Reserve in Mînî Thnî, Alberta, and continue to host a full day of
        workshops with different classrooms at the school annually.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: 'rgba(0,0,0,0.75)',
          lineHeight: 1.8,
          fontSize: '1.1rem',
        }}
      >
        We have also recently piloted a project of working with rural, isolated
        communities, shipping workshop kits to Muskoti Elementary School in
        Moberly Lake, British Columbia, expanding the breadth of our outreach
        beyond local communities.
      </Typography>
    </Box>
  );
}
