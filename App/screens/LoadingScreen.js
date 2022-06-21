import { useEffect, useCallback, useContext } from 'react';
import { Text, View } from '../components/Themed';
import { StyleSheet } from 'react-native';
import { Logo } from '../components/Logo';
import Colors from '../constants/Colors';
import Background from '../components/Background';
import { version as appVersion } from '../package.json';
import { useStorage } from '../hooks/useStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { validateIp } from '../constants/Regex';
import { StateContext } from '../components/StateContext';

export function LoadingScreen({ navigation }) {
  const [readItemFromStorage] = useStorage('@storage_quickstart');
  const [hardwareIp, setHardwareIp] = useContext(StateContext);

  const checkState = useCallback(async () => {
    readItemFromStorage().then((item) => {
      setTimeout(() => {
        if (item === 'true' || item === null) {
          navigation.navigate('Welcome');
        } else {
          AsyncStorage.getItem('@storage_ip', (_, result) => {
            if (validateIp(result)) setHardwareIp(result);
            navigation.navigate('Root');
          });
        }
      }, 2000);
    });
  }, []);

  useEffect(() => {
    checkState();
  }, []);

  return (
    <View style={styles.container}>
      <Background style={styles.background} />
      <Logo width="150px" height="150px" />
      <Text style={styles.LoadingText}>Loading...</Text>
      <Text style={styles.version}>App version: {appVersion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 16,
    bottom: 0,
    zIndex: -100,
  },
  img: {
    height: 50,
  },
  LoadingText: {
    color: Colors.light.textColorWhite,
    fontFamily: 'roboto',
  },

  version: {
    color: Colors.light.textColorBlack,
    position: 'absolute',
    left: 10,
    bottom: 20,
  },
});
