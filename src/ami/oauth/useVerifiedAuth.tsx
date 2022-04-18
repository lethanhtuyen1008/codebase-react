import { useState } from 'react';
import { RouteProps } from 'react-router';
import { PropsBase } from 'src/types/propsBase';
import { useAmiAuthState } from 'src/ami/oauth/useAmiAuthState';

export type ResponseAuthType = {
  provider: string;
  email: string;
  user_name: string;
  exp: string;
  issued: string;
};

const coreApiUrl = process.env.API_ENDPOINT_LOGIN;
const appUrl = process.env.APP_URL || `${window.location.origin}`;

type VerificationState = {
  isCurrentlyVerifying: boolean;
  rawAuth: string | undefined;
  verifiedResponseAuth: ResponseAuthType | undefined;
};

export default function useVerifiedAuth(): VerificationState {
  const { amiAuthState } = useAmiAuthState();
  const [verificationState, setVerificationState] = useState<VerificationState>({
    isCurrentlyVerifying: true,
    rawAuth: undefined,
    verifiedResponseAuth: undefined,
  });

  if (amiAuthState?.token) {
    if (verificationState.isCurrentlyVerifying && !verificationState.verifiedResponseAuth) {
      setVerificationState({
        isCurrentlyVerifying: false,
        rawAuth: amiAuthState.token || undefined,
        verifiedResponseAuth: amiAuthState.verifiedResponseAuth as ResponseAuthType,
      });
    }

    return verificationState;
  } else {
    return {
      isCurrentlyVerifying: false,
      rawAuth: undefined,
      verifiedResponseAuth: undefined,
    };
  }
}

export interface PropsWithFallback extends RouteProps {
  fallback: string;
}

export const LoginRedirect = (props: { providerName?: string }) => {
  const { providerName } = props;

  const oauthLoginURL = `${coreApiUrl}/api/TokenAuth/ExternalLogin?provider=${
    providerName || 'azuread'
  }&returnUrl=${appUrl}/oauth/receive_token`;

  return ExternalRedirect({
    url: oauthLoginURL,
  });
};

export const ExternalRedirect = ({ url }: { url: string }) => {
  window.location.href = url;
  return null;
};

export interface PropsWithToken extends PropsBase {
  token: ResponseAuthType;
}
