import React from 'react';
import { Controller } from 'react-hook-form';
import TextField from 'src/components/ui/textField';
import { Props } from './types';

const FormTextField = (props: Props) => {
  const { name, helperText, ...others } = props;

  return (
    <Controller
      name={name}
      render={({ field: { value, onChange, onBlur, ref }, fieldState: { invalid, error } }) => {
        return (
          <TextField
            {...others}
            inputRef={ref}
            error={invalid}
            helperText={invalid ? error?.message || '' : helperText}
            value={value || ''}
            onChange={onChange}
            onBlur={onBlur}
          />
        );
      }}
    />
  );
};

export default FormTextField;
