import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from '../components/Themed';
import HomeScreen from '../screens/HomeScreen';

/**
 * Home
 * Calendar
 * Notes
 * To-Do
 * Settings
 */

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Calendar" component={PlaceHolderComp} />
      <Drawer.Screen name="Notes" component={PlaceHolderComp} />
      <Drawer.Screen name="To-Do" component={PlaceHolderComp} />
      <Drawer.Screen name="Settings" component={PlaceHolderComp} />
    </Drawer.Navigator>
  );
}

function PlaceHolderComp() {
  return <Text>test</Text>;
}
