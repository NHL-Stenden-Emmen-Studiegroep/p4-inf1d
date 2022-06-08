import Background from "../components/Background";
import { View, Text } from "../components/Themed";
import { StyleSheet, Pressable, TextInput } from 'react-native';
import Colors from "../constants/Colors";

export function ConnectScreen({navigation}) {
    return (
      <>
        <Background style={styles.background} />
        <View style={styles.container}>
          <View style={styles.flex}>
            <TextInput style={styles.input} placeholder="Wifi SSID" />
          </View>
          <View style={styles.flex}>
            <TextInput style={styles.input} placeholder="Wifi Wachtwoord" />
          </View>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Root')}>
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
    display: "flex",
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

  button: {
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      backgroundColor: Colors.light.colorBlue700,
      position: "absolute",
      bottom: 270,
    },
})