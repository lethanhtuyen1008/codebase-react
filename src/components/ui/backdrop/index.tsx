import { Backdrop as MuiBackdrop, CircularProgress } from '@mui/material';
import * as React from 'react';
import { Props } from './types';

const Backdrop = (props: Props) => {
  if (!props.show) {
    return null;
  }

  return (
    <MuiBackdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
      <CircularProgress color='inherit' />
    </MuiBackdrop>
  );
};

export default Backdrop;
