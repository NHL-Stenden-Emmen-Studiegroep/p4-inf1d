import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import React, { Component, useState } from 'react';
import { Calendar, LocaleConfig, Agenda, CalendarList, CalendarProps } from 'react-native-calendars';


export default function CalendarScreen(){
    const _date = new Date();
    const [date, setDate] = useState({
            day: _date.getDay(),
            month: _date.getMonth(),
            year: _date.getFullYear()
    });
    
    return(
    <View style={styles.container}>
      <Text style={styles.title}>Calendar</Text>
      <Calendar style={styles.calendar}></Calendar>
    </View>
    )
}          
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 75
  },
  title: {
    marginHorizontal: 30,
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  },
  calendar: {
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff'
  }
});