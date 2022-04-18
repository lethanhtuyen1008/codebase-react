import { RouteComponentProps } from 'react-router';
import { MaterialTableProps } from 'material-table';

export interface Match {
  params: any;
}

export interface PropsBase extends RouteComponentProps<any> {}

export interface PropsMaterialTable extends MaterialTableProps<any> {}
