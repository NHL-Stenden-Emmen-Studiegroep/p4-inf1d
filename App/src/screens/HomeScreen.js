import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
<<<<<<<< HEAD:App/src/screens/ExampleScreen.tsx
import { RootTabScreenProps } from '../../types';
========
import { TimerScreen } from '../components/Pomodoro/Timer';
import { StateContext } from '../components/StateContext';

import axios from 'axios';

export default function HomeScreen() {
  const [hardwareIp, _] = useContext(StateContext);
>>>>>>>> 0162c8a23e9022973e2fc094f7074b95ef381f3d:App/src/screens/HomeScreen.js

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{hardwareIp}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TimerScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
