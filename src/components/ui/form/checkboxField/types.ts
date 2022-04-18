import { FormControlLabelProps } from '@mui/material';
import { Props as CheckboxProps } from 'src/components/ui/checkbox';

export type Props = CheckboxProps &
  Pick<FormControlLabelProps, 'onChange' | 'onBlur'> & {
    label?: string;
    name: string;
  };
