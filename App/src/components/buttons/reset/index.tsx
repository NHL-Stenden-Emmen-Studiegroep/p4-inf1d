import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import DefaultStyle from '../buttons';

type ResetButtonProps = {
    func: CallableFunction
}

const Reset = ({func}: ResetButtonProps) => {
    return (
        <Pressable style={[Styles.container, DefaultStyle.button]} onPress={() => func()}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '90%' }}>
                <MaterialIcons name="replay" color={Colors.light.colorWhite} style={{fontSize: 60, transform: [{ rotate: '-35deg' }]}}/>
            </View>
        </Pressable>
    );
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.colorBlue700,
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Reset;