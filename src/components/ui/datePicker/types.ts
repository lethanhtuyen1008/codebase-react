import { MobileDatePickerProps } from '@mui/lab/MobileDatePicker';
import { Noop } from 'react-hook-form';
import { SxProps } from '@mui/system';

export type Props<TDate> = Omit<
  MobileDatePickerProps<TDate>,
  'renderInput' | 'onChange' | 'value'
> & {
  onChange?(newValue: null | TDate): void;
  value?: Date | null;
  error?: boolean;
  helperText?: string;
  onBlur?: Noop;
  required?: boolean;
  fullWidth?: boolean;
  placeholder?: string;
  sx?: SxProps;
};
