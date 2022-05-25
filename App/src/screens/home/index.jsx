import React from "react";
import { View } from "react-native";
import Timer from '../../components/layouts/timer';
import SettingsScreen from "./pomodoro/settings";


const Home = () => {
    return (
        <>
            <View style={{flex: 1}}/>
            <Timer />
            <SettingsScreen />
        </>
    );
}

export default Home;