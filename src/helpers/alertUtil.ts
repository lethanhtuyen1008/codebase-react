import uniqueId from 'lodash/uniqueId';
import { createRef } from 'react';
import { AlertContainerHandler, AlertOptions } from 'src/components/ui/alertContainer/types';
import { AlertResult } from 'src/components/ui/alertDialog/types';

export const alertContainerRef = createRef<AlertContainerHandler>();

function show<D = any>(options: Omit<AlertOptions, 'id' | 'onResult'>) {
  return new Promise<AlertResult<D>>((resolve) => {
    alertContainerRef.current?.setAlertList((prevList: any) => [
      ...prevList,
      {
        id: uniqueId('alert_'),
        onResult: resolve,
        ...options,
      },
    ]);
  });
}

export default {
  show,
};
