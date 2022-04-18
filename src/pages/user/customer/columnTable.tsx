import React from 'react';
import { Column } from 'material-table';

import { User } from 'src/types/user';
import { Typography } from '@mui/material';

export const ColumsTable = () => {
  const columns: Column<User.UserInfo>[] = [
    {
      title: 'ID',
      field: 'id',
      width: 150,
      render: (rowData: User.UserInfo) => {
        return <div>{rowData.id}</div>;
      },
    },
    {
      title: 'Email',
      field: 'email',
      width: 150,
      render: (rowData: User.UserInfo) => {
        return <Typography sx={{ whiteSpace: 'nowrap' }}>{rowData.email}</Typography>;
      },
    },
    {
      title: 'Họ và tên',
      field: 'name',
      render: (rowData: User.UserInfo) => {
        return <Typography>{`${rowData?.firstName || ''} ${rowData?.lastName || ''}`}</Typography>;
      },
    },
  ];
  return {
    columns,
  };
};
