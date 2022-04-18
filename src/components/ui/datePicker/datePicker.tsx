import React from 'react';
import TextField from '../textField';
import { Props } from './types';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DATE_FORMAT } from 'src/commons/constant';

const DatePicker = <E extends unknown>(props: Props<E>) => {
  const {
    onChange = (_newValue: null | E) => {},
    value,
    helperText,
    error,
    required,
    placeholder,
    ...others
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDatePicker
        label='Date mobile'
        inputFormat={DATE_FORMAT}
        renderInput={(params: any) => (
          <TextField
            {...params}
            variant='outlined'
            error={error}
            helperText={helperText}
            required={required}
            placeholder={placeholder}
            sx={props.sx}
          />
        )}
        value={value}
        onChange={onChange}
        {...others}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
