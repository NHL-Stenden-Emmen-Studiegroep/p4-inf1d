import { Text, View } from "../components/Themed";
import { StyleSheet } from 'react-native';
import {Logo} from "../components/Logo";
import Colors from "../constants/Colors";
import Background from "../components/Background";


export function LoadingScreen() {
    return (

    <View style={styles.container}>
        <Background />
        <Logo width="150px" height="150px"/>
        <Text style={styles.text}>Loading...</Text>

    </View>
    )
}

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
})