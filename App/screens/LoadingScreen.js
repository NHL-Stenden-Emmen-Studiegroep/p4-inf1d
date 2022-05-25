import { Text, View } from "../components/Themed";
import { ImageBackground, StyleSheet } from 'react-native';
import {Logo} from "../components/Logo";
import Colors from "../constants/Colors";
import Background from "../components/Background";


export function LoadingScreen() {
    return (
    <View style={styles.container}>
        <Background style={styles.background} />
        <Logo width="150px" height="150px" />
        <Text style={styles.text}>Loading...</Text>
    </View>
    )
}

// setTimeout(function(){
// window.location.href = './HomeScreen.js';
// }, 5000);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 16,
        bottom: 0,
        zIndex: -100
    },
    img: {
        height: 50,
    },
    text: {
        // fontFamily: 'montserrat',
        color: Colors.light.textColorWhite,
    },
})