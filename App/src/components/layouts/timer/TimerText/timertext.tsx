import React, { Component, useEffect, useState, useRef } from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../../../../constants/Colors";
import { Timer } from "../../../timing/timer";


const getHours = (hours: number): number => {
    let hrs = Math.floor(hours / 3600);
    return hrs;
}

const getMinutes = (minutes: number): number => {
    let min = Math.floor(minutes / 60);
    return min;
}

const getSeconds = (seconds: number): number => {
    return seconds;
}

const formatTime = (totalseconds: number | undefined): string => {

    if(typeof totalseconds === 'number') {
        let hrs = getHours(totalseconds);
        let min = getMinutes(totalseconds - (hrs * 3600));
        let sec = getSeconds(totalseconds - (hrs * 3600) - (min * 60));

        let hours = (hrs >= 10) ? hrs.toString() : '0' + hrs.toString();
        let minutes = (min >= 10) ? min.toString() : '0' + min.toString();
        let seconds = (sec >= 10) ? sec.toString() : '0' + sec.toString();

        return hours + ':' + minutes + ':' + seconds;
    } else {
        return '00:00:00';
    }
}

type TimerProps = {
    time?: number,
}


const TimerText = ({ time = 0 }: TimerProps) => {     
    return(
        <Text style={Styles.text}>
            {formatTime(time)}
        </Text>
    );
}

const Styles = StyleSheet.create({
    text: {
        color: Colors.light.colorGray800,
        fontSize: 50,
        textAlign: 'center'
    }
});


export default TimerText;