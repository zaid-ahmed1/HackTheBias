/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import {
  Box,
  Button,
  Typography,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Alert,
} from '@mui/material';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

export default function CallToAction() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [captchaToken, setCaptchaToken] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !captchaToken) {
      setError('Please fill all fields and verify you are human.');
      return;
    }

    setLoading(true); // disable button

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/preregister`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, captchaToken }),
        }
      );

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '' });
        setCaptchaToken('');
        setOpen(false);
      } else {
        const err = await res.text();
        setError(err || 'Failed to submit.');
      }
    } catch {
      setError('Something went wrong.');
    } finally {
      setLoading(false); // re-enable button
    }
  };

  return (
    <Box py={2}>
      <Paper
        elevation={4}
        sx={{
          background: 'linear-gradient(135deg, #153166, #B7C4FC)',
          color: '#fff',
          borderRadius: 4,
          p: { xs: 4, md: 6 },
          maxWidth: '900px',
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Ready to Hack the Bias?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Join changemakers from around the world this January and build
          something that matters.
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => setOpen(true)}
          sx={{ fontWeight: 600, px: 4, py: 1.5, borderRadius: 2 }}
        >
          Pre-register Now
        </Button>
      </Paper>

      {/* Dialog Form */}
      <Dialog
        open={open}
        onClose={() => {
          if (loading) return;

          setOpen(false);
        }}
      >
        <DialogTitle>Pre-register for HackTheBias 2026</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{ my: 1 }}
          />
          <TextField
            fullWidth
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ my: 1 }}
          />
          <Box mt={2} display="flex" justifyContent="center">
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={(token: any) => setCaptchaToken(token || '')}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} disabled={loading}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar Alerts */}
      <Snackbar
        open={!!error}
        autoHideDuration={5000}
        onClose={() => setError('')}
      >
        <Alert severity="error">{error}</Alert>
      </Snackbar>

      <Snackbar
        open={submitted}
        autoHideDuration={5000}
        onClose={() => setSubmitted(false)}
      >
        <Alert severity="success">
          Thanks! You’re now on the list. A welcome E-amil will be sent to your
          inbox shortly
        </Alert>
      </Snackbar>
    </Box>
  );
}
