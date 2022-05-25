import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Cancel from "../../../components/buttons/cancel";
import Dropdown from "../../../components/buttons/dropdown";
import Save from "../../../components/buttons/save";
import Colors from "../../../constants/Colors";
import Settings from "../../../../assets/settings/PomodoroTimer.json";

const SettingsScreen = () => {

    const SaveButtonHandler = () => {
        
    }

    return(
        <View style={Styles.OuterContainer}>
            <View style={Styles.InnerContainer}>
                <View style={Styles.TitleContainer}>
                    <Text style={Styles.ScreenTitle}>Timer Settings</Text>
                </View>
                <View style={Styles.DropdownContainer}>
                    <Dropdown name="Focus Time" extra="min" value={Settings["focus-time"]}></Dropdown>
                    <Dropdown name="Short Break" extra="min" value={Settings["short-breaks"]}></Dropdown>
                    <Dropdown name="Long Break" extra="min" value={Settings["long-breaks"]}></Dropdown>
                    <Dropdown name="Intervals" value={Settings.intervals}></Dropdown>
                </View>
                <View style={Styles.SaveOrCancel}>
                    <Cancel />
                    <Save func={() => console.log(Settings)}/>
                </View>
            </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    OuterContainer: {
        position: 'absolute',
        width: '100%',
        height: '90%',
        bottom: 0,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    InnerContainer: {
        width: '80%',
        marginVertical: 20,
        flex: 1,
    },
    ScreenTitle: {
        color: Colors.light.textColorBlack,
        fontSize: 22,
        fontWeight: '700'
    },
    TitleContainer: {

    },
    DropdownContainer: {
        flex: 1,
        marginVertical: 20
    },
    SaveOrCancel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    }
});

export default SettingsScreen;