import { Options } from 'material-table';
import Colors from 'src/themes/colors';

export const options: Options<any> = {
  showTitle: false,
  searchFieldAlignment: 'left',
  emptyRowsWhenPaging: false,
  columnsButton: true,
  sorting: true,
  exportButton: true,
  actionsColumnIndex: 100,
  pageSize: 10,
  pageSizeOptions: [10, 25, 50],
  rowStyle: (_rowData: any, index) => ({
    backgroundColor: index % 2 === 0 ? Colors.grey200 : '#fafafa',
  }),
};
