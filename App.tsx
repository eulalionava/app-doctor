import 'react-native-gesture-handler';
import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigator/Navigation';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export const App =()=> {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  )
}
