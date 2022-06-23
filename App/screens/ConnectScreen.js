import { useState, useContext } from 'react';
import Background from '../components/Background';
import { View, Text } from '../components/Themed';
import { StyleSheet, Pressable, TextInput } from 'react-native';
import Colors from '../constants/Colors';
import { StateContext } from '../components/StateContext';
import { useStorage } from '../hooks/useStorage';
import { validateIp } from '../constants/Regex';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import axios from 'axios';

export function ConnectScreen({ navigation }) {
  const [_, writeItemToStorage] = useStorage('@storage_quickstart');
  const [__, setHardwareIp] = useContext(StateContext);
  const { getItem: getStorageIp, setItem: setStorageIp } = useAsyncStorage('@storage_ip');

  const [error, setError] = useState(null);
  const [userInput, setUserInput] = useState('192.168.2.1');

  const handleSubmit = () => {
    if (validateIp(userInput)) {
      axios({ method: 'get', url: `http://` + userInput + `:8000/` })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setHardwareIp(userInput);
            setStorageIp(userInput);
            writeItemToStorage('false');

            setError(null);
            setUserInput('192.168.2.1');

            navigation.navigate('Root', { screen: 'Home' });
          } else {
            setError('Er ging iets fout probeer het opnieuw');
          }
        })
        .catch((rej) => {
          console.error(rej);
          setError('Er kan geen verbinding worden gemaakt met de cubes.');
        });
    } else {
      setError('Het ingevoerde ip is niet geldig');
    }
  };

  return (
    <>
      <Background style={styles.background} />
      <View style={styles.container}>
        <View style={styles.flex}>
          <Text style={styles.text}>Voer hier de IP address in</Text>
          {error && <Text style={styles.textError}>{error}</Text>}
        </View>
        <View style={styles.flex}>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setUserInput(value)}
            keyboardType={'default'}
            placeholder={userInput}
          />
        </View>
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.text}>Submit</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 16,
    bottom: 0,
    zIndex: -100,
  },

  flex: {
    display: 'flex',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 35,
    width: 160,
    backgroundColor: Colors.light.textColorWhite,
    margin: 12,
    padding: 10,
    borderWidth: 0,
    borderRadius: 4,
  },

  text: {
    color: Colors.light.textColorWhite,
  },

  textError: {
    color: 'red',
  },

  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: Colors.light.colorBlue700,
    position: 'absolute',
    bottom: 270,
  },
});
