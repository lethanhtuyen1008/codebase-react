import * as React from 'react';
import { Route } from 'react-router-dom';
import useVerifiedAuth, {
  PropsWithFallback,
  LoginRedirect,
  PropsWithToken,
} from 'src/ami/oauth/useVerifiedAuth';

function AuthenticatedRoute(props: PropsWithFallback) {
  const { isCurrentlyVerifying, verifiedResponseAuth } = useVerifiedAuth();
  const { component, ...restProps } = props;

  const Component: React.ComponentType<PropsWithToken> | React.ComponentType<any> = component!;

  if (isCurrentlyVerifying) {
    return <></>;
  }
  if (!verifiedResponseAuth) {
    return <LoginRedirect />;
  }

  return (
    <Route
      {...restProps}
      render={(propsAuth: any) => <Component {...propsAuth} token={verifiedResponseAuth} />}
    />
  );
}

export default AuthenticatedRoute;
