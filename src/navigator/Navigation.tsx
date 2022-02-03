import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { InicioScreen } from '../screens/InicioScreen';

const Stack = createStackNavigator();

export const Navigation = ()=> {
    return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
    >
      <Stack.Screen name="Inicio" component={ InicioScreen } />
      <Stack.Screen name="Home" component={ HomeScreen} />
    </Stack.Navigator>
    )
}
