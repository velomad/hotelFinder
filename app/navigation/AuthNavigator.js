import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import {Login, Signup} from '../screens';

// screen for stack & tabs
const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      {/* Onboarding screen */}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
