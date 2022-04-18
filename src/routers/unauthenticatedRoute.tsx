import * as React from 'react';
import BaseRoute from './baseRoute';
import { RouteProps } from './types';
import { Redirect } from 'react-router-dom';
import { RouteName } from './routeName';
import { cookieProvider } from 'src/providers/cookieProvider';
import { CookieKey } from 'src/commons/cookieKey';

export const UnauthenticatedRoute = (props: RouteProps) => {
  if (cookieProvider.get(CookieKey.ACCESS_TOKEN)) {
    return <Redirect to={{ pathname: RouteName.DASHBOARD }} />;
  }

  return <BaseRoute {...props} />;
};

export default UnauthenticatedRoute;
