import MaterialTextField from '@mui/material/TextField';
import React from 'react';
import { Props } from './types';

export const TextField = (props: Props) => {
  return (
    <MaterialTextField
      variant='standard'
      margin='normal'
      fullWidth
      {...props}
      sx={{
        '& .MuiOutlinedInput-notchedOutline': {
          border: (theme) => `solid 1px ${theme.palette.divider}`,
        },
        ...props.sx,
      }}
    />
  );
};

export default TextField;
