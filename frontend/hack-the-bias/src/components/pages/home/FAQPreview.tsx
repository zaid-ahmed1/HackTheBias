'use client';

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import GradientText from '@/components/ui/GradientText';

const faqItems = [
  {
    question: 'Who can participate in Hack the Bias?',
    answer:
      'Hack the Bias is open to everyone! Whether you’re a beginner or an experienced developer, designer, or activist — we welcome all skill levels.',
  },
  {
    question: 'Do I need a team to join?',
    answer:
      'Not at all! You can register solo and join a team at our team formation event at the beginning of the hackathon.',
  },
  {
    question: 'Is Hack the Bias free?',
    answer:
      'Yes, participating in Hack the Bias is completely free. We’ll even provide meals, and some cool swag!',
  },
  {
    question: 'What’s the main theme of the hackathon?',
    answer:
      'The theme centers around social justice and ethical innovation — building tech for inclusion, equity, and change.',
  },
];

export default function FAQPreview() {
  return (
    <Box py={2}>
      <GradientText variant="h4" align="center" gutterBottom>
        Frequently Asked Questions
      </GradientText>
      <Typography variant="body1" align="center" color="text.secondary" mb={4}>
        Got questions? We’ve got answers.
      </Typography>

      <Box maxWidth="800px" mx="auto">
        {faqItems.map((item, index) => (
          <Accordion key={index} disableGutters elevation={1} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        <Box textAlign="center" mt={4}>
          <Button
            variant="outlined"
            component={Link}
            href="/faq"
            sx={{ borderRadius: 2 }}
          >
            See all FAQs
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
