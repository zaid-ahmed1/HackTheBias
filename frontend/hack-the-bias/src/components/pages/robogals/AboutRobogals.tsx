import { Box, Typography, Divider } from '@mui/material';
import GradientText from '@/components/ui/GradientText';

export default function AboutRobogals() {
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
        About Robogals
      </GradientText>

      <Divider
        sx={{
          width: '60px',
          height: '4px',
          mx: 'auto',
          mb: 4,
          borderRadius: 2,
          background: '#BCEAF8',
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
        Robogals is a non-profit, student-run organization operating in over 10
        countries, tallying up to more than 30 chapters internationally. With
        the aim of increasing diversity in STEM-related careers, Robogals
        UCalgary works in partnership with several Calgary schools and the
        Calgary Public Library to host a variety of workshops ranging from
        building baking soda and vinegar rockets to coding MBots and Arduinos,
        appealing to a range of elementary-aged students.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: 'rgba(0,0,0,0.75)',
          lineHeight: 1.8,
          fontSize: '1.1rem',
        }}
      >
        While staying true to the organization&apos;s founding focus of
        encouraging an inclusive environment in STEM for young girls, Robogals
        UCalgary has been inspired to expand its reach in recent years.
      </Typography>
    </Box>
  );
}
