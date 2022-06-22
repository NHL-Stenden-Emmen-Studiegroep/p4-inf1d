import { useState, useEffect } from "react";
import { StyleSheet, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Timer } from 'react-native-stopwatch-timer';

import { View, Text } from "../Themed";
import Colors from '../../constants/Colors';
import { TimerSettingsModal } from "./TimerSettingsModal";

export function TimerScreen({ nav, timer }) {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [resetTimer, setResetTimer] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [hours, setHours] = useState(0);
  const [TimerDuration, setTimerDuration] = useState()


  useEffect(() => {
    setTimerDuration(((hours * 60 + minutes) * 60 + seconds) * 1000);
  }, [seconds, minutes, hours]);



  return (
    <View style={Styles.container}>
      <TimerSettingsModal modalVisible={modalVisible} setModalVisible={setModalVisible} timerConfig={{seconds, setSeconds, minutes, setMinutes, hours, setHours}}/>
      <View style={Styles.Header}>
        <Text style={Styles.SectionTitle}>Pomodoro Timer</Text>
        {/* <Pressable onPress={() => nav.navigate('TimerSettings')}> */}
        <Pressable onPress={() => setModalVisible(true)}>
          <Text style={Styles.SettingsButton}>Settings</Text>
        </Pressable>
      </View>
      <View style={Styles.TimerContainer}>
        <Timer
          options={Styles.Timer}
          totalDuration={TimerDuration}
          start={isTimerStart}
          reset={resetTimer}
          handleFinish={() => {
            alert('Timer klaar');
          }}
        />
      </View>
      <View style={Styles.TimerButtons}>
        <Pressable
          style={Styles.button}
          onPress={() => {
            if (setIsTimerStart(!isTimerStart)) {
              setIsTimerStart(true);
            }
            setResetTimer(false);
          }}
        >
          {!isTimerStart ? (
            <Ionicons style={Styles.startStop} name="play" color={Colors.light.textColorWhite} size={50} />
          ) : (
            <Ionicons style={Styles.startStop} name="pause" color={Colors.light.textColorWhite} size={50} />
          )}
        </Pressable>
        <Pressable
          style={Styles.button}
          onPress={() => {
            setIsTimerStart(false);
            setResetTimer(true);
          }}
        >
          <Ionicons style={Styles.refresh} name="refresh" color={Colors.light.textColorWhite} size={50} />
        </Pressable>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  Header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  SectionTitle: {
    paddingHorizontal: 50,
    color: Colors.light.textColorBlack,
    fontSize: 22,
    fontWeight: '700',
  },
  SettingsButton: {
    paddingHorizontal: 60,
    color: Colors.light.colorBlue900,
    textDecorationLine: 'underline',
    textDecorationColor: Colors.light.colorBlue900,
  },
  TimerContainer: {
    marginVertical: 30,
  },
  Timer: {
    container: {
      backgroundColor:  Colors.light.textColorWhite,
      padding: 5,
      borderRadius: 5,
      width: 220,
    },
    text: {
      fontSize: 45,
      color: Colors.light.colorGray800,
      alignSelf: "center",
    },
  },
  TimerButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: Colors.light.colorBlue500,
    width: 70,
    height: 70,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startStop: {
    paddingLeft: 5,
  },
  refresh: {
    paddingLeft: 4,
    paddingBottom: 2,
  },
});