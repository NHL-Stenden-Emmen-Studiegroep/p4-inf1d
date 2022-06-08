import Background from "../components/Background";
import { View, Text } from "../components/Themed";
import { StyleSheet, Pressable } from 'react-native';
import Colors from "../constants/Colors";

export function ConnectScreen() {
    return (
        <>
        <Background style={styles.background} />
        <View style={styles.container}>
            <Text style={styles.text}>Selecteer uw Wifi Netwerk</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate("Connect")}>
            <Text style={styles.text}>Submit</Text>
          </Pressable>
        </View>
        </>
    )
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
      bottom: 300,
    },
})