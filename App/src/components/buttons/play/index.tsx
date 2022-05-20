import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../../constants/Colors";

const Play = () => {
    const [pause, setPause] = useState(true);
    const togglePause = () => {
        if(pause) {
            setPause(false);
        } else {
            setPause(true);
        }
    }

    if(pause) {
        return (
            <Pressable style={Styles.container} onPress={() => togglePause()}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '90%' }}>
                    <View style={Styles.line}/>
                    <View style={Styles.line}/>
                </View>
            </Pressable>
        );
    } else {
        return (
            <Pressable style={Styles.container} onPress={() => togglePause()}>
                <View style={Styles.triangle}/>
            </Pressable>
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.colorBlue700,
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 15,
        borderRightWidth: 15,
        borderBottomWidth: 25,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        transform: [{ rotate: '90deg' }, { translateY: -3 }],
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: Colors.light.colorWhite,
    },
    line: {
        width: 5,
        height: 25,
        borderRadius: 5,
        backgroundColor: Colors.light.colorWhite
    },
});

export default Play;