import * as React from 'react';
import DialogMaterial from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface Props {
  open: boolean;
  onClose?(): void;
  label?: string;
  message: string;
  footerDialog?: React.ReactNode;
}

export default function Dialog({
  label = '',
  onClose = () => {},
  open = false,
  message = '',
  footerDialog,
}: Props) {
  const handleClose = () => {
    onClose();
  };

  return (
    <DialogMaterial
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      {label && <DialogTitle id='alert-dialog-title'>{label}</DialogTitle>}

      <DialogContent>
        <DialogContentText id='alert-dialog-description'>{message}</DialogContentText>
      </DialogContent>

      <DialogActions>{footerDialog}</DialogActions>
    </DialogMaterial>
  );
}
