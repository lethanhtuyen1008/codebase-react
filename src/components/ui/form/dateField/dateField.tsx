import React from 'react';
import { Controller } from 'react-hook-form';
import DatePicker from 'src/components/ui/datePicker';
import { Props } from './types';
import { useTranslation } from 'react-i18next';

const DateField = <E extends unknown>(props: Props<E>) => {
  const { t } = useTranslation();
  const { name, helperText, ...others } = props;

  return (
    <Controller
      name={name}
      render={({ field: { value, onChange, onBlur, ref }, fieldState: { invalid, error } }) => (
        <DatePicker
          {...others}
          inputRef={ref}
          error={invalid}
          helperText={invalid ? t(error?.message || '') : helperText}
          value={value || ''}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    />
  );
};

export default DateField;
