import * as React from 'react';
import { Redirect } from 'react-router-dom';
import BaseRoute from './baseRoute';
import { RouteProps } from './types';
import { RouteName } from './routeName';
import { cookieProvider } from 'src/providers/cookieProvider';
import { CookieKey } from 'src/commons/cookieKey';

export const AuthenticatedRoute = (props: RouteProps) => {
  if (!cookieProvider.get(CookieKey.ACCESS_TOKEN)) {
    return <Redirect to={{ pathname: RouteName.SIGN_IN }} />;
  }

  return <BaseRoute {...props} />;
};

export default AuthenticatedRoute;
