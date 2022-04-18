export enum AlertAction {
  CANCEL = 0,
  CONFIRM = 1,
}

export interface AlertResult<D = any> {
  action: AlertAction;
  data?: D;
}

export interface Props {
  open?: boolean;
  title?: React.ReactNode;
  variant?: 'danger' | 'info';
  description?: React.ReactNode;
  content?: React.ReactNode;
  showCancelButton?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
  yesNo?: boolean;
  validate?: () => any;
  onResult: (result: AlertResult) => any;
}
