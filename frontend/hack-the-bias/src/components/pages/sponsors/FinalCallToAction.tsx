import { Download } from '@mui/icons-material';
import { Typography, Button } from '@mui/material';
import { Box, Stack } from '@mui/system';

const handleDownloadSponsorshipKit = () => {
  // Create a link element and trigger download
  const link = document.createElement('a');
  link.href = '/sponsors/HackTheBias_2026_Sponsorship_Package.pdf';
  link.download = 'HackTheBias_2026_Sponsorship_Package.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const handleContactSponsorship = () => {
  // Open email client with pre-filled subject and body
  const subject = encodeURIComponent('HackTheBias 2026 Sponsorship Inquiry');
  const body = encodeURIComponent(`Hello HackTheBias Team,

I'm interested in learning more about sponsorship opportunities for HackTheBias 2026.

Please provide additional information about:
- Available sponsorship tiers
- Partnership benefits
- Next steps in the process

Looking forward to hearing from you!

Best regards,
[Your Name]
[Your Company]
[Your Contact Information]`);

  window.open(
    `mailto:partnerships@hackthebias.dev?subject=${subject}&body=${body}`
  );
};

export default function FinalCallToAction() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #8B5A8C 0%, #667eea 100%)',
        borderRadius: 3,
        p: 6,
        textAlign: 'center',
        color: 'white',
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Ready to Make an Impact?
      </Typography>
      <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
        Join us in shaping a more inclusive future through innovative technology
        solutions.
      </Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        justifyContent="center"
      >
        <Button
          variant="contained"
          size="large"
          onClick={handleDownloadSponsorshipKit}
          startIcon={<Download />}
          sx={{
            bgcolor: 'white',
            color: '#8B5A8C',
            '&:hover': { bgcolor: '#f8f9fa' },
            px: 4,
            py: 1.5,
          }}
        >
          Download Sponsorship Kit
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={handleContactSponsorship}
          sx={{
            borderColor: 'white',
            color: 'white',
            '&:hover': {
              borderColor: 'white',
              bgcolor: 'rgba(255,255,255,0.1)',
            },
            px: 4,
            py: 1.5,
          }}
        >
          Contact us
        </Button>
      </Stack>
    </Box>
  );
}
