import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { IntDoctores } from '../interfaces/IntDoctores';
import { DetailScreen } from '../screens/DetailScreen';
import { DoctoresScreen } from '../screens/DoctoresScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { InicioScreen } from '../screens/InicioScreen';

export type RootStackParam = {
  Inicio:undefined;
  Home:undefined;
  Detail:IntDoctores;
  Doctores:undefined;
}

const Stack = createStackNavigator<RootStackParam>();

export const Navigation = ()=> {
    return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
      }}
      
    >
      <Stack.Screen name="Inicio" component={ InicioScreen } />
      <Stack.Screen name="Home" component={ HomeScreen} />
      <Stack.Screen name="Detail" component={ DetailScreen } />
      <Stack.Screen name="Doctores" component={ DoctoresScreen } />
    </Stack.Navigator>
    )
}
