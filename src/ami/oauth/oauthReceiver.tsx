import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { useAmiAuthState } from 'src/ami/oauth/useAmiAuthState';
import { useLocation } from 'react-router-dom';
import { RouteName } from 'src/routers/routeName';
import { formatResponseOAuth } from 'src/helpers/auth';
import { ActionsTokenTypes } from './amiAuthContext';
import { CookieKey } from 'src/commons/cookieKey';
import { cookieProvider } from 'src/providers/cookieProvider';
import differenceInMinutes from 'date-fns/differenceInMinutes';

const OAuthReceiver = () => {
  const { updateAmiAuth } = useAmiAuthState();
  const location = useLocation();
  const searchString = location.search.substring(1);

  const responseUrl = new URLSearchParams(searchString);
  const accessToken = responseUrl.get(CookieKey.ACCESS_TOKEN);
  const verifiedResponseAuth = formatResponseOAuth(searchString);

  React.useEffect(() => {
    updateAmiAuth({
      type: ActionsTokenTypes.STORE_TOKEN,
      token: accessToken as string,
      verifiedResponseAuth,
    });

    const timeOutExpiredToken = differenceInMinutes(
      new Date(verifiedResponseAuth.exp.toString()),
      new Date(),
    );

    cookieProvider.set(CookieKey.ACCESS_TOKEN, accessToken as string, timeOutExpiredToken);
    cookieProvider.setObject(
      CookieKey.VERIFIED_RESPONSE_AUTH,
      verifiedResponseAuth,
      timeOutExpiredToken,
    );
  }, [accessToken, updateAmiAuth, verifiedResponseAuth]);

  return <Redirect to={RouteName.HOME} />;
};

export default OAuthReceiver;
