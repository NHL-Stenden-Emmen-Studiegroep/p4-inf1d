import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import CalendarScreen from '../screens/calendarscreen/CalendarScreen';
import ModelScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { BottomTabNavigator } from './BottomTabNavigator';
import AddMeeting from '../screens/calendarscreen/AddMeeting';
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
    <Stack.Navigator initialRouteName='Calendar'>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="Calendar" component={CalendarScreen} />
      <Stack.Screen name="AddMeeting" component={AddMeeting} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModelScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}