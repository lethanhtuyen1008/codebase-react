import { Props as AlertDialogProps } from '../alertDialog/types';
import { Dispatch, SetStateAction } from 'react';

export interface AlertOptions extends AlertDialogProps {
  id: string;
}

export interface AlertContainerHandler {
  setAlertList: Dispatch<SetStateAction<AlertOptions[]>>;
}
