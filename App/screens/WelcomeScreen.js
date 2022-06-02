import { Text, View } from "../components/Themed";
import Background from "../components/Background";
import { StyleSheet } from 'react-native';
import Colors from "../constants/Colors";


export function WelcomeScreen() {
    return (
        <View style={styles.container}>
        <Background style={styles.background} />
        <Text style={styles.text}>Welcome to our Cubic Calender App!</Text>
        </View>
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
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        color: Colors.light.textColorWhite,
    }

})