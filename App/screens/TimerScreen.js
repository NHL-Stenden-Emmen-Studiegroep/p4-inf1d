import { View, Text } from "../components/Themed";
import { StyleSheet, Pressable } from "react-native";
import Colors from '../constants/Colors';
import { Timer } from 'react-native-stopwatch-timer';
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';

export function TimerScreen({navigation}) {
  const [seconds, setSeconds] = useState(5);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const [isTimerStart, setisTimerStart] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);

  const TimerDuration = (((hours * 60) + minutes) * 60 + seconds) * 1000;

    return (
      <View style={Styles.container}>
        <View style={Styles.Header}>
          <Text style={Styles.SectionTitle}>Pomodoro Timer</Text>
          <Pressable onPress={() => navigation.navigate('TimerSettings')}>
            <Text style={Styles.SettingsButton}>Settings</Text>
          </Pressable>
        </View>
        <View style={Styles.TimerContainer}>
          <Timer
            totalDuration={TimerDuration}
            start={isTimerStart}
            reset={resetTimer}
            handleFinish={() => {
              alert('Timer klaar');
            }}
          />
        </View>
        <View style={Styles.TimerButtons}>
          <Pressable style={Styles.button} onPress={() => setisTimerStart(true)}>
            {!isTimerStart ? (
              <Ionicons style={Styles.start} name='play-outline' size={50} />
            ) : (
              <Ionicons name='pause-outline' size={50} />
            )}
          </Pressable>
          <Pressable style={Styles.button} onPress={() => setResetTimer(true)}>
            <Ionicons name="refresh-outline" size={50} />
          </Pressable>
        </View>
        <View>
          <Text style={Styles.TasksText}>No tasks available yet.</Text>
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
  start: {
    paddingLeft: 5,
  },
  TasksText: {
    color: Colors.light.colorGray800,
  },
});