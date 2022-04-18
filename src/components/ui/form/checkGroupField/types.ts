import { Props as CheckGroupProps } from 'src/components/ui/checkGroup/types';

export type Props<E> = Omit<CheckGroupProps<E>, 'value'> & {
  name: string;
};
