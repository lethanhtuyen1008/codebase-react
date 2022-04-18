import * as React from 'react';
import TableContainer from '@mui/material/TableContainer';
import DataTable from 'src/components/MaterialTable';
import { ColumsTable } from './columnTable';
import useListUser from 'src/services/user/useListUser';

const UserPage = () => {
  const { columns } = ColumsTable();

  const { data } = useListUser({ pageIndex: 1, pageSize: 20, type: 2 });

  return (
    <TableContainer>
      <DataTable columns={columns} data={data.data} />
    </TableContainer>
  );
};

export default UserPage;
