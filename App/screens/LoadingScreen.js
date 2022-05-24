import { Text, View } from "../components/Themed";
import { StyleSheet } from 'react-native';
import {Logo} from "../components/Logo";
import Colors from "../constants/Colors";


export function LoadingScreen() {
    return (

    <View style={styles.container}>
        <View style={[styles.circleTL, styles.circle]}></View>
        <View style={[styles.circleTR, styles.circle]}></View>
        <Logo width="150px" height="150px"/>
        <Text style={styles.text}>Loading...</Text>
        <View style={[styles.circleBL, styles.circle]}></View>
        <View style={[styles.circleBR, styles.circle]}></View>
    </View>
    )
}

const rad = 700;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    img: {
        height: 50,
    },

    text: {
        color: Colors.light.textColorWhite,
    },

    circle: {
        height: rad,
        width: rad,
        borderRadius: rad,
        position: "absolute",
    },

    circleTL: {
        backgroundColor: Colors.light.colorBlue700,
        top: -150,
        left: -300,
        zIndex: -5
    },

    circleTR: {
        backgroundColor: Colors.light.bgColorWhite,
        top: -300,
        right: -400,
        zIndex: -3,
    },

    circleBR: {
        backgroundColor: Colors.light.colorBlue500,
        bottom : -150,
        right: -350,
        zIndex: -4,
    },

    circleBL: {
        backgroundColor: Colors.light.bgColorWhite,
        bottom: -400,
        left: -450,
        zIndex: -3,
    }
})