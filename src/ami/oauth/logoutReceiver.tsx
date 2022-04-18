import * as React from 'react';
import { ActionsTokenTypes } from 'src/ami/oauth/amiAuthContext';
import { useAmiAuthState } from 'src/ami/oauth/useAmiAuthState';
import { ExternalRedirect } from 'src/ami/oauth/useVerifiedAuth';
import { CookieKey } from 'src/commons/cookieKey';
import { cookieProvider } from 'src/providers/cookieProvider';

const coreApiUrl = process.env.API_ENDPOINT_LOGIN;
const appUrl = process.env.APP_URL || `${window.location.origin}`;

const LogoutReceiver = () => {
  const { updateAmiAuth } = useAmiAuthState();

  React.useEffect(() => {
    cookieProvider.delete(CookieKey.ACCESS_TOKEN);
    cookieProvider.delete(CookieKey.VERIFIED_RESPONSE_AUTH);

    updateAmiAuth({
      type: ActionsTokenTypes.DELETE_TOKEN,
    });
  }, [updateAmiAuth]);

  return (
    <ExternalRedirect
      url={`${coreApiUrl}/api/TokenAuth/SignOut?scheme=azuread&returnUrl=${appUrl}`}
    />
  );
};

export default LogoutReceiver;
