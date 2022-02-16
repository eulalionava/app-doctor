import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { IntDoctores } from '../interfaces/IntDoctores';
import { DetailScreen } from '../screens/DetailScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { InicioScreen } from '../screens/InicioScreen';

export type RootStackParam = {
  Inicio:undefined;
  Home:undefined;
  Detail:IntDoctores;
}

const Stack = createStackNavigator<RootStackParam>();

export const Navigation = ()=> {
    return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
    >
      <Stack.Screen name="Inicio" component={ InicioScreen } />
      <Stack.Screen name="Home" component={ HomeScreen} />
      <Stack.Screen name="Detail" component={ DetailScreen } />
    </Stack.Navigator>
    )
}
