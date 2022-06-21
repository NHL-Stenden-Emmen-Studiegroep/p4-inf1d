import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { StateContext } from '../components/StateContext';

export default function HomeScreen() {
  const [hardwareIp, setHardwareIp] = useContext(StateContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home {hardwareIp}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
