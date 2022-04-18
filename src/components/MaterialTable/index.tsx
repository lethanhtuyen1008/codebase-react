import MaterialTable from 'material-table';
import { PropsMaterialTable } from './types';
import { options } from 'src/commons/optionTable';
import React from 'react';
import { Paper } from '@mui/material';

export default (props: PropsMaterialTable) => {
  const { isLoading, ...other } = props;

  return (
    <MaterialTable
      components={{
        Container: (propsTable) => (
          <Paper {...propsTable} sx={{ backgroundColor: 'white' }} elevation={0} />
        ),
      }}
      options={options}
      isLoading={isLoading}
      {...other}
    />
  );
};
