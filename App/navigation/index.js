import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { DrawerNavigator } from './DrawerNavigator';
import { LoadingScreen } from '../screens/LoadingScreen';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { ConnectScreen } from '../screens/ConnectScreen';

export default function Navigation({ colorScheme }) {
  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

export function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Loading" screenOptions={{ gestureEnabled: false }}>
      <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Root" component={DrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Connect" component={ConnectScreen} options={{ headerShown: true }} />
    </Stack.Navigator>
  );
}
