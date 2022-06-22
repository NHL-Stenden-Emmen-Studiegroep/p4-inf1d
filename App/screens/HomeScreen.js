import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { TimerScreen } from '../components/Pomodoro/Timer';
import { StateContext } from '../components/StateContext';

export default function HomeScreen({ navigation }) {
  const [hardwareIp, setHardwareIp] = useContext(StateContext);

  const onStart = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{hardwareIpi}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TimerScreen nav={navigation} onStart={onStart} />
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
