import { Props as AutocompleteProps } from 'src/components/ui/autoComplete';

export type Props<E> = AutocompleteProps<E> & {
  name: string;
};
