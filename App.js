import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {Platform, SafeAreaView, StatusBar} from 'react-native';
import AppNavigator from './app/navigation/AppNavigator';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import Store from './app/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={Store}>
      <SafeAreaProvider>
        {/* <StatusBar barStyle="dark-content" translucent /> */}
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default () => {
  return <App />;
};
