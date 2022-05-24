import { StyleSheet, View, Pressable } from "react-native";
import Play from "../../../buttons/play";
import Reset from "../../../buttons/reset";
import timing from "../../../timing/timer";
import { useState } from "react";
import { Timer } from "../../../timing/timer";

type ControlProps = {
    func: CallableFunction,
}

const ControlButtons = ({func}: ControlProps) => {
    const [pause, setPause] = useState(false);

    return (
        <View style={Styles.container}>
            <Play pause={pause} setPause={setPause} func={() => timing(func, setPause)}/>
            <Reset func={() => {Timer.reset(func); setPause(false)}} />
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row', 
        justifyContent: 'space-evenly',
        marginVertical: 30
    }
});

export default ControlButtons;