'use client';

import { Typography, Container, Box } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState(0);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(to right, #B7C4FC, #F7D8F6)',
        color: '#222',
        textAlign: 'center',
        py: 2,
        fontSize: '0.875rem',
        borderTop: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0 -2px 6px rgba(0,0,0,0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          © {year} Hack the Bias. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
