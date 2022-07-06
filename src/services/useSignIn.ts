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
  const [data, setData] = useState<ResponeSignIn | null>(null);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<any>({});

  const mutate = useCallback(async (request: RequestSignIn) => {
    setIsSuccess(false);
    setIsError(false);
    setIsloading(false);

    try {
      setIsloading(true);
      const res = await signIn(request);

      setData(res);
      setIsSuccess(true);
    } catch (err) {
      setError(err);
      setIsSuccess(false);
      setIsError(true);
    } finally {
      setIsloading(false);
    }
  }, []);

  return {
    mutate,
    data,
    isLoading,
    isSuccess,
    error,
    isError,
  };
};

export default useSignIn;
