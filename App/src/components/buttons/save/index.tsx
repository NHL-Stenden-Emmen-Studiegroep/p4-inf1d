import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../../constants/Colors";

type SaveButtonProps = {
    func: CallableFunction
}

const Save = ({func}: SaveButtonProps) => {
    return (
        <Pressable style={Styles.container} onPress={() => func()}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '90%' }}>
                <Text style={Styles.text}>Save</Text>
            </View>
        </Pressable>
    );
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.colorBlue700,
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: Colors.light.textColorWhite,
        fontWeight: '700',
    }
});

export default Save;