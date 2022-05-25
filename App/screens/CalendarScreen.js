import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import React, { Component, useState } from 'react';
import { Calendar, LocaleConfig, Agenda, CalendarList } from 'react-native-calendars';

LocaleConfig.locales['en'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  today: 'Today'
};
LocaleConfig.defaultLocale = 'en';



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
    <CalendarList/>
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
});