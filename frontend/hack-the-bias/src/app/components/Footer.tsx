import { Typography, Container } from '@mui/material';

export default function Footer() {
  return (
    <footer className="mt-auto py-6 bg-[#F7D8F6]">
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} HackTheBias. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}
