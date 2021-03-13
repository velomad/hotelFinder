import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import AppNavigator from './app/navigation/AppNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  const checkOnBoarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnboarding');
      if (value !== null) {
        setViewedOnboarding(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkOnBoarding();
  }, []);

  return <AppNavigator viewedOnboarding={viewedOnboarding} />;
};

export default () => {
  return <App />;
};
