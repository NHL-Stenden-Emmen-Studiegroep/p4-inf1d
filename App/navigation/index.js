import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import ModelScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { BottomTabNavigator } from './BottomTabNavigator';
import CalendarOld from '../screens/CalendarOld';
export default function Navigation({ colorScheme }) {
  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="CalendarOld">
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="CalendarOld" component={CalendarOld} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModelScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}