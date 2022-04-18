import * as React from 'react';
import BaseRoute from './baseRoute';
import { RouteProps } from './types';

export const PublicRoute = (props: RouteProps) => {
  return <BaseRoute {...props} />;
};
