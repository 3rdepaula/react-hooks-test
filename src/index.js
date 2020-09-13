import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './Navigation/Routes'

import { Provider } from 'react-redux';
import  store  from './Redux/Store/store';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
