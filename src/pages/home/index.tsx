import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { OPEN_MENU } from 'src/redux/menu/menuType';
import { RouteName } from 'src/routers/routeName';

const Home = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: OPEN_MENU, open: RouteName.DASHBOARD });
  }, [dispatch]);

  return <Redirect to={RouteName.DASHBOARD} />;
};

export default Home;
