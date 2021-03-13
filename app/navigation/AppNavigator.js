import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import {Onboarding} from '../screens';

// Auth navigation
import AuthNavigator from './AuthNavigator';
import Home from '../screens/Home/Home';
import {connect} from 'react-redux';

// screen for stack & tabs
const Stack = createStackNavigator();

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Onboarding screen */}
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />

        {/* siginin == true ? stack for auth  :  tabs for authenticed user */}

        {props.isAuth === false ? (
          <Stack.Screen
            name="Auth"
            component={AuthNavigator}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen name="Home" component={Home} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = ({authState}) => ({
  isAuth: authState.isAuth,
});

export default connect(mapStateToProps)(AppNavigator);
