import { Autocomplete } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Checkbox from '../checkbox';
import TextField from '../textField';
import { Props } from './types';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { isEqual } from 'lodash';
export * from './types';

const getItemDefault = (item: any) => `${item}`;

const AutoComplete = <E extends unknown = string | number>(props: Props<E>) => {
  const {
    label,
    options,
    getItemLabel = getItemDefault,
    error,
    helperText,
    required,
    multiple = false,
    value,
    ...others
  } = props;
  const [itemList, setItemList] = useState<E[]>(() => (Array.isArray(options) ? options : []));

  useEffect(() => {
    if (!Array.isArray(options)) {
      options().then(setItemList);
      return;
    }

    setItemList(options);
  }, [options]);

  return (
    <Autocomplete
      id='checkboxes-tags-demo'
      options={itemList}
      getOptionLabel={(option: E) => getItemLabel(option)?.toString() || ''}
      renderOption={(props, option: E, { selected }) => {
        if (multiple) {
          return (
            <li {...props}>
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
                checkedIcon={<CheckBoxIcon fontSize='small' />}
                checked={selected}
              />
              {getItemLabel(option)}
            </li>
          );
        }

        return <li {...props}>{getItemLabel(option)}</li>;
      }}
      loading
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant='outlined'
          required={required}
          error={error}
          helperText={helperText}
        />
      )}
      multiple={multiple}
      value={
        Array.isArray(value)
          ? itemList.filter((item) => value.some((it) => isEqual(item, it)))
          : value
      }
      {...others}
    />
  );
};

export default AutoComplete;
