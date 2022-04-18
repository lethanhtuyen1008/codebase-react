import React from 'react';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Checkbox from 'src/components/ui/checkbox';
import { Props } from './types';

const CheckGroupField = (props: Props) => {
  const { t } = useTranslation();
  const { name, helperText, ...others } = props;

  return (
    <Controller
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { invalid, error } }) => (
        <Checkbox
          {...others}
          value={value}
          error={invalid}
          helperText={invalid ? t(error?.message || '') : helperText}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    />
  );
};

export default CheckGroupField;
