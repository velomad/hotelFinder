import React from 'react';
import {Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {connect} from 'react-redux';

// screens
import {Onboarding} from '../screens';

// Auth navigation
import AuthNavigator from './AuthNavigator';

// screen for stack & tabs
const Stack = createStackNavigator();

const AppNavigator = (props) => {
    
  console.log('props.token');
  console.log(props.token);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Onboarding screen */}
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Auth"
          component={AuthNavigator}
          options={{headerShown: false}}
        />

        {/* siginin == true ? stack for auth  :  tabs for authenticed user */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = ({authState}) => ({
  token: authState.token,
});

export default connect(mapStateToProps)(AppNavigator);
