import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {Platform} from 'react-native';
import AppNavigator from './app/navigation/AppNavigator';

const App = () => {


  return <AppNavigator />;
};

export default () => {
  return <App />;
};
