import { AppAuthProvider } from 'src/providers/authProvider';
import useAuthContext from '@devblock/react-auth/dist/hooks/useAuthContext';

export default function useAuth() {
  return useAuthContext() as { provider: AppAuthProvider };
}
