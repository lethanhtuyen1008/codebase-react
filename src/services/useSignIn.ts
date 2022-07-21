import { useCallback, useState } from 'react';
import { ApiEndpoint } from 'src/commons/apiEndpoint';
import { apiClient } from 'src/providers/axiosProvider';

export type RequestSignIn = {
  email: string;
  password: string;
};

export type ResponeSignIn = {
  accessToken: string;
  email: string;
  refresh_expires: number;
  refreshToken: string;
};

export function signIn(request: RequestSignIn): Promise<ResponeSignIn> {
  return apiClient.post(ApiEndpoint.SIGN_IN, request);
}

const useSignIn = () => {
  const [isLoading, setIsloading] = useState<boolean>(false);

  const mutate = useCallback(async (request: RequestSignIn) => {
    setIsloading(true);
    return await signIn(request).finally(() => setIsloading(false));
  }, []);

  return {
    mutate,
    isLoading,
  };
};

export default useSignIn;
