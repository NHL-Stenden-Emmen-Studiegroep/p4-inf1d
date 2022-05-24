import { Button, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import React, {Component, ReactNode, SyntheticEvent} from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

export default class BookingCalendar extends Component {
    setDates = () => {
        const events= []
        this.props.events.map((event) => {
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
});