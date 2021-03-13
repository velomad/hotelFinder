import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import {Home} from '../screens';

// Auth navigation
import AuthNavigator from './AuthNavigator';
import {connect} from 'react-redux';

// screen for stack & tabs
const Stack = createStackNavigator();

const AppNavigator = (props) => {
  const [asyncToken, setAsyncToken] = useState(null);

  const getAccessTokenFromAsyncStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('@accessToken');
      setAsyncToken(value);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(props.viewedOnboarding);
    getAccessTokenFromAsyncStorage();
  }, []);

  return (
    <NavigationContainer>
      {props.isAuth && asyncToken !== null ? (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = ({authState}) => ({
  isAuth: authState.isAuth,
});

export default connect(mapStateToProps)(AppNavigator);
