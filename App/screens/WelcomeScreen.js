import { Text, View } from "../components/Themed";
import Background from "../components/Background";
import { StyleSheet, Button } from 'react-native';
import Colors from "../constants/Colors";
import Swiper from 'react-native-swiper';



export function WelcomeScreen() {
    return (
        <>
        <Background style={styles.background} />
         <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide}>
          <Text style={styles.text}>Welcome to our Cubic Calender App!</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>In this app you can connect your Cube</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Connect Your device!</Text>
          <Button style={styles.button} title="Connect Your Cube"/>
        </View>
      </Swiper>
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
      zIndex: -100
    },
    slide: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },

    text: {
      color: Colors.light.textColorWhite,
    },

    button: {
      position: 'absolute',
      bottom: 25,
    },

})