import { useEffect } from "react";
import { Text, View } from "../components/Themed";
import { StyleSheet } from 'react-native';
import { Logo } from '../components/Logo';
import Colors from '../constants/Colors';
import Background from '../components/Background';
import { version as appVersion } from '../package.json';
import { useStorage } from "../hooks/useStorage";

export function LoadingScreen({navigation}) {
  const [loadQuickstart, writeItemToStorage] = useStorage("@storage_quickstart");

  const checkState = () => {
    setTimeout(() => {
      // if(loadQuickstart === "true" || loadQuickstart === "null") {
        console.log("Loading Welcome Page");
        navigation.navigate("Welcome");
      // } else {
      //   console.log("Loading Home Page");
      //   navigation.navigate("Root");
      // }
      console.log("___________________________________");
    }, 1000);
  }

  useEffect(() => {
    writeItemToStorage("true");
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
