import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../../constants/Colors";

type CancelButtonProps = {
    func?: CallableFunction
}

const Cancel = ({func}: CancelButtonProps) => {
    return (
        <Pressable style={Styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '90%' }}>
                <Text style={Styles.text}>Cancel</Text>
            </View>
        </Pressable>
    );
}

const Styles = StyleSheet.create({
    container: {
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: Colors.light.textColorBlack,
        fontWeight: '700'
    }
});

export default Cancel;