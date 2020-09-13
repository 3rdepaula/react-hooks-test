import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ForgotPass from '../Pages/ForgotPass';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="screen">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registro" component={Register} />
      <Stack.Screen name="Recuperar Senha" component={ForgotPass} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
