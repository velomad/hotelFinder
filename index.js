import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';

const HotelFinderApp = () => {
  return <App />;
};

AppRegistry.registerComponent(appName, () => HotelFinderApp);
