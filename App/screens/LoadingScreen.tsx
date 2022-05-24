import { Text, View } from "../components/Themed";
import { StyleSheet } from 'react-native';
import {Logo} from "../components/Logo";


export function LoadingScreen() {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Loading...<Logo /></Text>

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

    }
})