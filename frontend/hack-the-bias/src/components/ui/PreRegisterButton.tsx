'use client';

import { Button, ButtonProps } from '@mui/material';
import { useState } from 'react';
import PreRegisterModal from './PreRegisterModal';

interface PreRegisterButtonProps extends Omit<ButtonProps, 'onClick'> {
  children: React.ReactNode;
}

export default function PreRegisterButton({
  children,
  ...props
}: PreRegisterButtonProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button {...props} onClick={() => setModalOpen(true)}>
        {children}
      </Button>
      <PreRegisterModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
