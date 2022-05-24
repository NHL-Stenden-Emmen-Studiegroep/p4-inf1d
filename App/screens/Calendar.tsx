import { Button, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import React, {Component, ReactNode, SyntheticEvent} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './BookingCalendar.css'

export default class BookingCalendar extends Component {
    setDates = () => {
        const events: { start: Date; end: Date; title: string; allDay: boolean; }[] = []
        this.props.events.map((event: { start: string | number | Date; end: string | number | Date; pet_name: any; human_name: any; }) => {
           return events.push({
            start: new Date(event.start),
            end: new Date(event.end),
            title: `${event.pet_name} Stay (Human: ${event.human_name})`,
            allDay: true
          })
        })
        return events
      }

      render() {
        return(
          <div className="calendar-container">
            <BigCalendar
              localizer={localizer}
              events={this.setDates()}
              startAccessor="start"
              endAccessor="end"
             />
          </div>
        )
      }
    }

const localizer = BigCalendar.momentLocalizer(moment)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    }   
});props: any;
