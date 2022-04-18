import { useEffect } from 'react';
import { Props } from 'src/types/hooks/useTokenExpired';

let interval: any = null;

const useTokenClearedCheckingInterval = (props: Props) => {
  const { authProvider, onTokenCleared } = props;

  useEffect(() => {
    interval = setInterval(() => {
      if (!authProvider.provider.isSignedIn()) {
        onTokenCleared();
        clearInterval(interval);
      }
    }, 60 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [authProvider, onTokenCleared]);
};

export default useTokenClearedCheckingInterval;
