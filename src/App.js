import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { LogBox } from 'react-native';
import Router from './router';
import 'react-native-gesture-handler';
const App = () => {
  LogBox.ignoreLogs(['Warning: ...']);
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
