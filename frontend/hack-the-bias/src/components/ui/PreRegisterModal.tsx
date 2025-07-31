'use client';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Snackbar,
  Alert,
} from '@mui/material';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

interface PreRegisterModalProps {
  open: boolean;
  onClose: () => void;
}

export default function PreRegisterModal({
  open,
  onClose,
}: PreRegisterModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [captchaToken, setCaptchaToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !captchaToken) {
      setError('Please fill all fields and verify you are human.');
      return;
    }

    setLoading(true);

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
        const result = await res.json();

        if (result.status === 'already_registered') {
          setAlreadyRegistered(true);
        } else {
          setSubmitted(true);
        }

        // Reset form and close dialog
        setFormData({ name: '', email: '' });
        setCaptchaToken('');
        onClose();
      } else {
        const err = await res.text();
        setError(err || 'Failed to submit.');
      }
    } catch {
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (loading) return;
    setFormData({ name: '', email: '' });
    setCaptchaToken('');
    setError('');
    onClose();
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Pre-Register for Hack the Bias 2026</DialogTitle>
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
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onChange={(token: any) => setCaptchaToken(token || '')}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} disabled={loading}>
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
          Thanks! You&apos;re now on the list. A welcome email will be sent to
          your inbox shortly.
        </Alert>
      </Snackbar>

      <Snackbar
        open={alreadyRegistered}
        autoHideDuration={6000}
        onClose={() => setAlreadyRegistered(false)}
      >
        <Alert severity="info">
          This Email is Already Pre-Registered! Stay Tuned for more information.
        </Alert>
      </Snackbar>
    </>
  );
}
