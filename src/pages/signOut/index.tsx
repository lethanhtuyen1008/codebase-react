import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { CookieKey } from 'src/commons/cookieKey';
import { cookieProvider } from 'src/providers/cookieProvider';
import { RouteName } from 'src/routers/routeName';

const SignOut = () => {
  React.useEffect(() => {
    cookieProvider.delete(CookieKey.ACCESS_TOKEN);
  }, []);

  return <Redirect to={{ pathname: RouteName.SIGN_IN }} />;
};

export default SignOut;
