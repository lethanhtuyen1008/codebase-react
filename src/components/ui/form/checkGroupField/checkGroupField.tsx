import React from 'react';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import CheckGroup from 'src/components/ui/checkGroup';
import { Props } from './types';

const CheckGroupField = <E extends unknown = string | number>(props: Props<E>) => {
  const { t } = useTranslation();
  const { name, helperText, ...others } = props;

  return (
    <Controller
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { invalid, error } }) => (
        <CheckGroup
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
