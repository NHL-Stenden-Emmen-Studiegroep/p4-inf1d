import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { BottomTabNavigator } from './BottomTabNavigator';
import { DrawerNavigator } from './DrawerNavigator';
import ModalScreen from '../screens/ModalScreen';

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
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen name="Root" component={DrawerNavigator} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Settings" component={DrawerNavigator} /> */}
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="Modal" component={ModalScreen} />
    </Stack.Navigator>
  );
}
