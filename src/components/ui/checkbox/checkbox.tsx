import { Checkbox as MaterialCheckbox, FormControl, FormControlLabel } from '@mui/material';
import React from 'react';
import { Props } from './types';
import FormHelperText from '../formHelperText';

export default function Checkbox(props: Props) {
  const { label, checked, onChange, onBlur, error, helperText, ...others } = props;

  return (
    <FormControl error={!!error}>
      <FormControlLabel
        control={<MaterialCheckbox checked={checked} {...others} color='primary' />}
        label={label || ''}
        onChange={onChange}
        onBlur={onBlur}
      />
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </FormControl>
  );
}
