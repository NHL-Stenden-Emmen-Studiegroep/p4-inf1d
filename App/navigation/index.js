/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import CalendarScreen from '../screens/CalendarScreen';
import ModelScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { BottomTabNavigator } from './BottomTabNavigator';
import {LoadingScreen} from '../screens/LoadingScreen';
import { WelcomeScreen } from '../screens/WelcomeScreen';

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
    <Stack.Navigator>
      <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: true }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="Modal" component={ModelScreen} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        
        <Stack.Screen name="Calendar" component={CalendarScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
