import { useCallback, useState } from 'react';

export type RequestSignIn = {
  email: string;
  password: string;
};

export type ResponseSignIn = {
  accessToken: string;
};

export function signIn(_request: RequestSignIn): Promise<ResponseSignIn> {
  return new Promise((rev) => {
    rev({ accessToken: 'token' });
  });
}

const useSignIn = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const mutate = useCallback(async (request: RequestSignIn) => {
    setLoading(true);
    return await signIn(request).finally(() => setLoading(false));
  }, []);

  return {
    mutate,
    isLoading,
  };
};

export default useSignIn;
