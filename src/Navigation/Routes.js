import React from 'react';
import {useSelector} from 'react-redux';

import StackNavigation from '../Navigation/StackRoutes';
import TabNavigation from '../Navigation/TabRoutes';

const Navigation = () => {
  const isAuth = useSelector((state) => !!state.list.token);

  return (
    <>
      {isAuth && <TabNavigation />}
      {!isAuth && <StackNavigation />}
    </>
  );
};
export default Navigation;
