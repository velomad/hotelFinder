import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

// screens
import {Home} from '../screens';

// Auth navigation
import AuthNavigator from './AuthNavigator';

// Actions
import {setAuthCheckValue} from '../store/action';

// screen for stack & tabs
const Stack = createStackNavigator();

const AppNavigator = (props) => {
  const getAccessTokenFromAsyncStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('@accessToken');
      if (value !== null) {
        // when user is logged in
        props.setAuthCheckValue(true);
      } else {
        // when user is logged out
        setAuthCheckValue(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAccessTokenFromAsyncStorage();
    console.log(props.isAuth);
  }, []);

  return (
    <NavigationContainer>
      {props.isAuth ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
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

export default connect(mapStateToProps, {setAuthCheckValue})(AppNavigator);
