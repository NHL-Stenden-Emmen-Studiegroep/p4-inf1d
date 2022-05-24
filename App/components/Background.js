import Colors from "../constants/Colors";
import { StyleSheet } from 'react-native';
import { View } from "../components/Themed";


const Background = () => {
    return(
        <>
        <View style={[styles.circleBL, styles.circle]}></View>
        <View style={[styles.circleBR, styles.circle]}></View>
        <View style={[styles.circleTL, styles.circle]}></View>
        <View style={[styles.circleTR, styles.circle]}></View>
        </>
    );
}

const rad = 700;

const styles = StyleSheet.create({
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
export default Background;