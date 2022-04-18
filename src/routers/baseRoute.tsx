import * as React from 'react';
import { Route } from 'react-router-dom';
import { RouteProps } from './types';

export const BaseRoute = (props: RouteProps) => {
  const { path, componentPath, exact = true } = props;
  const ComponentRoute = React.useMemo(() => {
    return React.lazy(() => import(`src/${componentPath}`));
  }, [componentPath]);

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        <React.Suspense fallback={null}>
          <ComponentRoute />
        </React.Suspense>
      )}
    />
  );
};

export default BaseRoute;
