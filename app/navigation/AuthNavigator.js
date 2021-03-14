import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import {Login, Signup, Onboarding} from '../screens';

// screen for stack & tabs
const Stack = createStackNavigator();

const AuthNavigator = (props) => {
  return (
    <Stack.Navigator>
      {!props.isOnboarded ? (
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
      ) : (
        <React.Fragment>
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
        </React.Fragment>
      )}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
