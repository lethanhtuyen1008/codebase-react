import { AuthContextProps } from '@devblock/react-auth/dist/context';

export interface Props {
  authProvider: AuthContextProps;
  onTokenCleared(): void;
}
