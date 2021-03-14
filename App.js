import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {Platform} from 'react-native';
import AppNavigator from './app/navigation/AppNavigator';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import Store from './app/store';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={Store}>
      <AppNavigator />
    </Provider>
  );
};

export default () => {
  return <App />;
};
