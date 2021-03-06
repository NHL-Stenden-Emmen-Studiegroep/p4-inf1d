import { Text, View } from '../components/Themed';
import Background from '../components/Background';
import { StyleSheet, Pressable } from 'react-native';
import Colors from '../constants/Colors';
import Swiper from 'react-native-swiper';
import { Logo } from '../components/Logo';

export function WelcomeScreen({ navigation }) {
  return (
    <>
      <Background style={styles.background} />
      <Swiper style={styles.wrapper} loop={false} showsButtons={false}>
        <View style={styles.slide}>
          <Logo width="150px" height="150px" />
          <Text style={styles.text}>Welcome to our Cubic Calender App!</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Connect Your device!</Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Connect')}>
            <Text style={styles.text}>Connect</Text>
          </Pressable>
        </View>
      </Swiper>
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

  slide: {
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
    position: 'absolute',
    bottom: 120,
  },
});
