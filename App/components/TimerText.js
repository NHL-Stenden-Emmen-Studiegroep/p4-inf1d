import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import timing from './Timing';


const getHours = (seconds) => {
  let hrs = Math.floor(seconds / 3600);
  return hrs;
};

const getMinutes = (minutes) => {
  let min = Math.floor(minutes / 60);
  return min;
};

const getSeconds = (seconds) => {
  return seconds;
};

const formatTime = (totalseconds) => {
  if (isNaN(totalseconds)) {
    let hrs = getHours(totalseconds);
    let min = getMinutes(totalseconds - hrs * 3600);
    let sec = getSeconds(totalseconds - hrs * 3600 - min * 60);

    let hours = hrs >= 10 ? hrs.toString() : '0' + hrs.toString();
    let minutes = min >= 10 ? min.toString() : '0' + min.toString();
    let seconds = sec >= 10 ? sec.toString() : '0' + sec.toString();

    return hours + ':' + minutes + ':' + seconds;
  } else {
    return '00:00:00';
  }
};

const TimerText = ({ time = 0 }) => {
  return <Text style={Styles.text}>{formatTime(time)}</Text>;
};

const Styles = StyleSheet.create({
  text: {
    color: Colors.light.colorGray800,
    fontSize: 50,
    textAlign: 'center',
  },
});

export default TimerText;
