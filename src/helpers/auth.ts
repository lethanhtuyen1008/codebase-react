import { ResponseAuthType } from 'src/ami/oauth/useVerifiedAuth';

export const formatResponseOAuth = (url: string): ResponseAuthType => {
  const responseUrl = new URLSearchParams(url);

  return {
    email: responseUrl.get('email') as string,
    exp: responseUrl.get('expires') as string,
    issued: responseUrl.get('issued') as string,
    provider: responseUrl.get('provider') as string,
    user_name: responseUrl.get('user_name') as string,
  };
};
