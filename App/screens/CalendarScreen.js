import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import React, { Component, useState } from 'react';
import { Calendar, LocaleConfig, Agenda, CalendarList } from 'react-native-calendars';

export default function CalendarScreen(){
    return(
    <View style={styles.container}>
      <Text style={styles.title}>Calendar</Text>
      <Agenda style={styles.calendar}></Agenda>
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