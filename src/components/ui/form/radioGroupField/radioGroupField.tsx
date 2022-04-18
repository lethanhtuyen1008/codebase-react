import React from 'react';
import { Controller } from 'react-hook-form';
import RadioGroup from 'src/components/ui/radioGroup';
import { Props } from './types';
import { useTranslation } from 'react-i18next';

const RadioGroupField = <E extends unknown = string | number>(props: Props<E>) => {
  const { t } = useTranslation();
  const { name, helperText, ...others } = props;

  return (
    <Controller
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { invalid, error } }) => (
        <RadioGroup
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

export default RadioGroupField;
