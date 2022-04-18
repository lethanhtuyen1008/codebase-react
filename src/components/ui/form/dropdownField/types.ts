import { Props as DropdownProps } from 'src/components/ui/dropdown';

export type Props<E> = DropdownProps<E> & {
  name: string;
};
