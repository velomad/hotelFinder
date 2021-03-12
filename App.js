import 'react-native-gesture-handler';
import * as React from 'react';
import {Provider} from 'react-redux';
import Store from './app/store';

import AppNavigator from './app/navigation/AppNavigator';

const App = () => {
  return (
    <Provider store={Store}>
      <AppNavigator />
    </Provider>
  );
};

export default () => {
  return <App />;
};
