import { StyleSheet } from 'react-native';
import { Text, View, Pressable } from '../components/Themed';
import meetings from "../components/meetings.json";
import React, { useState } from 'react';
import { Button } from 'react-native-web';
import { Agenda, Calendar } from "react-native-calendars"

export default function CalendarScreen(meeting){
    const [selectedDate, setSelectedDate] = useState('');

    const cc = (meeting) => {
      return (
        <View key={meeting.id}>
          <Text>
            {meeting.title}
            <Text>
              {meeting.description}
              {meeting.date}
            </Text>
          </Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        
          <Text style={styles.title}>Add Meeting</Text>
        
        <Agenda key={meeting.id}>
          {meetings.map(meeting => cc(meeting))}
        </Agenda>
      </View>
    )
  } 

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white"
  },
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
  text: {
    marginHorizontal: 30,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right'
  }
});