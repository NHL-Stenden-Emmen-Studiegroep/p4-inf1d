import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../../constants/Colors";
import DefaultStyle from "../buttons";
import timing from '../../timing/timer';

type PlayButtonProps = {
    pause: boolean,
    setPause: CallableFunction,
    func?: CallableFunction
}

const Play = ({pause, setPause, func}: PlayButtonProps) => {
    const togglePause = () => {
        if(pause) {
            setPause(false);
        } else {
            setPause(true);
        }
    }

    const ButtonEventHandler = () => {
        togglePause();

        if(typeof func === 'function') {
            func();
        }
    }

    if(pause) {
        return (
            <Pressable style={[Styles.container, DefaultStyle.button]} onPress={() => ButtonEventHandler()}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '90%' }}>
                    <View style={Styles.line}/>
                    <View style={Styles.line}/>
                </View>
            </Pressable>
        );
    } else {
        return (
            <Pressable style={[Styles.container, DefaultStyle.button]} onPress={() => ButtonEventHandler()}>
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
        borderLeftWidth: 20,
        borderRightWidth: 20,
        borderBottomWidth: 30,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        transform: [{ rotate: '90deg' }, { translateY: -4 }],
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: Colors.light.colorWhite,
    },
    line: {
        width: 8,
        height: 40,
        borderRadius: 5,
        backgroundColor: Colors.light.colorWhite
    },
});

export default Play;