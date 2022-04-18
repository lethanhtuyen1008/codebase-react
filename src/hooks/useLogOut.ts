import { useCallback } from 'react';
import useAuth from './useAuth';

export const useLogOut = () => {
  const { provider } = useAuth();

  const signOut = useCallback(async () => {
    await provider.signOut();
  }, [provider]);

  return { signOut };
};
