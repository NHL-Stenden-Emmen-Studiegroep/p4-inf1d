import { MaterialIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import Colors from '../constants/Colors';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{ drawerActiveTintColor: Colors.light.tint }}>
      <Drawer.Screen name="Home" component={HomeScreen} options={customDrawerOptions.home} />
      <Drawer.Screen name="Calendar" component={HomeScreen} options={customDrawerOptions.calendar} />
      <Drawer.Screen name="Notes" component={HomeScreen} options={customDrawerOptions.notes} />
      <Drawer.Screen name="To-Do" component={HomeScreen} options={customDrawerOptions.todo} />
      <Drawer.Screen name="Settings" component={HomeScreen} options={customDrawerOptions.settings} />
    </Drawer.Navigator>
  );
}

const customDrawerOptions = {
  home: {
    drawerIcon: ({ Color }) => <DrawerIcon name="home" color={Color} />,
  },
  calendar: {
    drawerIcon: ({ Color }) => <DrawerIcon name="calendar-today" color={Color} />,
  },
  notes: {
    drawerIcon: ({ Color }) => <DrawerIcon name="notes" color={Color} />,
  },
  todo: {
    drawerIcon: ({ Color }) => <DrawerIcon name="format-list-bulleted" color={Color} />,
  },
  settings: {
    drawerIcon: ({ Color }) => <DrawerIcon name="settings" color={Color} />,
  },
};

function DrawerIcon(props) {
  return <MaterialIcons size={30} {...props} />;
}
