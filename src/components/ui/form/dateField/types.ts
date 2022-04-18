import { Props as DatePickerProps } from 'src/components/ui/datePicker/types';

export type Props<TDate> = DatePickerProps<TDate> & {
  name: string;
};
