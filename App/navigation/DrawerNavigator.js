import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import Colors from '../constants/Colors';
import { ConnectScreen } from '../screens/ConnectScreen';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerActiveBackgroundColor: Colors.light.colorBlue700,
        drawerActiveTintColor: Colors.light.textColorWhite,
        drawerInactiveTintColor: Colors.light.textColorBlack,
        drawerLabelStyle: {
          marginLeft: -10,
          fontFamily: 'roboto',
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ drawerIcon: ({ Color }) => <DrawerIcon name="home-outline" color={Color} size={22} /> }}
      />
      <Drawer.Screen
        name="Calendar"
        component={HomeScreen}
        options={{ drawerIcon: ({ Color }) => <DrawerIcon name="calendar-outline" color={Color} /> }}
      />
      <Drawer.Screen
        name="Notes"
        component={HomeScreen}
        options={{ drawerIcon: ({ Color }) => <DrawerIcon name="clipboard-outline" color={Color} /> }}
      />
      <Drawer.Screen
        name="To-Do"
        component={HomeScreen}
        options={{ drawerIcon: ({ Color }) => <DrawerIcon name="checkmark-done" color={Color} /> }}
      />
      <Drawer.Screen
        name="Settings"
        component={ConnectScreen}
        options={{ drawerIcon: ({ Color }) => <DrawerIcon name="settings-outline" color={Color} /> }}
      />
    </Drawer.Navigator>
  );
}

function DrawerIcon(props) {
  return <Ionicons size={22} {...props} />;
}
