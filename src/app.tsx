import { AppAuthProvider } from 'src/providers/authProvider';
import { AuthContext } from '@devblock/react-auth/dist/context';
import { AuthProvider } from '@devblock/react-auth/dist/core';
import React from 'react';
import { Provider } from 'react-redux';
import { Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCommonStyles from 'src/themes/styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CookieKey } from './commons/cookieKey';
import { apiClient } from './providers/axiosProvider';
import { store } from './redux/store';
import BaseRoute from './routers/baseRoute';
import { NotFoundRoute } from './routers/notFoundRoute';
import { RouteName } from './routers/routeName';
import { ReactQueryDevtools } from 'react-query-devtools';
import { ReactQueryCacheProvider, QueryCache } from 'react-query';
import AmiContextProvider from 'src/ami/amiContextProvider';
import AlertContainer from 'src/components/ui/alertContainer';
import Layout from 'src/layout';

const authProvider: AuthProvider = new AppAuthProvider({
  axiosClient: apiClient,
  accessTokenKey: CookieKey.ACCESS_TOKEN,
  refreshTokenKey: CookieKey.REFRESH_TOKEN,
});

const App = () => {
  const classes = useCommonStyles();
  const queryCache = new QueryCache({
    defaultConfig: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <AmiContextProvider>
      <Provider store={store}>
        <ReactQueryCacheProvider queryCache={queryCache}>
          <AuthContext.Provider value={{ provider: authProvider }}>
            <Switch>
              <Layout>
                <BaseRoute exact path={RouteName.PROFILE} componentPath={'pages/profile'} />
                <BaseRoute exact path={RouteName.CUSTOMER} componentPath={'pages/user/customer'} />
                <BaseRoute exact path={RouteName.SIGN_IN} componentPath={'pages/login'} />
                <BaseRoute exact path={RouteName.SIGN_OUT} componentPath={'pages/signOut'} />
                <BaseRoute exact path={RouteName.HOME} componentPath={'pages/home'} />
                <BaseRoute exact path={RouteName.DASHBOARD} componentPath={'pages/dashboard'} />
                <BaseRoute exact path={RouteName.PRODUCT} componentPath={'pages/product'} />
                <BaseRoute exact path={RouteName.CONTACTS} componentPath={'pages/contacts'} />
                <BaseRoute exact path={RouteName.ABOUT} componentPath={'pages/about'} />
                <BaseRoute exact path={RouteName.CART} componentPath={'pages/cart'} />
                <BaseRoute exact path={RouteName.LOGIN} componentPath={'pages/login'} />
              </Layout>
              <NotFoundRoute />
            </Switch>
            <ToastContainer className={classes.toastify} />
            <AlertContainer />
          </AuthContext.Provider>

          <ReactQueryDevtools initialIsOpen />
        </ReactQueryCacheProvider>
      </Provider>
    </AmiContextProvider>
  );
};

export default App;
