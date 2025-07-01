'use client';

import { Typography, Container, Box } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        marginTop: 'auto',
        paddingY: 3,
        backgroundColor: 'warning.main',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          © {year} HackTheBias. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
