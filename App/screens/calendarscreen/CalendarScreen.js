import React, { useState } from "react";
import meetings from "../../components/meetings.json";
import { StyleSheet, Alert, Modal, Pressable, TextInput } from "react-native";
import {View, Text} from "../../components/Themed";
import { Agenda, AgendaList } from "react-native-calendars";
import { AgendaItem } from "./AgendaItem";
import DatePicker from "react-datepicker";

export default function CalendarScreen(){
    const [events, setEvents] = useState({});
    const [marksDate, setMarksDate] = useState({});
    const [refreshCalendar, setRefreshCalendar] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [text, onChangeText] = useState("");
    const [startDate, setStartDate] = useState(new Date());

    const onAddEventSubmit = () => {
        setRefreshCalendar(true);
        let meetings = events;
        let mark = {};
        let eventDetails = {
            date: '2022-06-10',
            title: 'Your Event Title'
        }

        if (!meetings[eventDetails.date]) {
            meetings[eventDetails.date] = [];
        }

        meetings[eventDetails.date].push(eventDetails);

        mark[eventDetails.date] = {
            customStyles: {
                container: {
                    backgroundColor: '#0f0',
                },
                text: {
                    color: 'white',
                    fontWeight: 'bold',
                },
            },
        };

        setEvents(meetings);
        setMarksDate(mark);
        setRefreshCalendar(false);
    }
  return (
    <View style={styles.container}>
        <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}>
                <View style={styles.modalView}>
                    <Text style={styles.title}>Add Meeting</Text>
                    <View style={styles.flex}>
                        <TextInput style={styles.input} onChangeText={onChangeText} placeholder="Title..."></TextInput>
                    </View>
                    <View style={styles.flex}>
                        <TextInput style={styles.input} onChangeText={onChangeText} placeholder="Location..."></TextInput>
                    </View>
                    <View style={styles.flex}>
                        <TextInput style={styles.input} onChangeText={onChangeText} placeholder="Description..."></TextInput>
                    </View>
                    <DatePicker></DatePicker>
                    <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Confirm</Text>
                    </Pressable>
                </View>
        </Modal>
        <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>+</Text>
        </Pressable> 
        <Agenda>
            
        </Agenda> 
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  flex: {
      display: "flex"
  },
  centeredView: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
  },
  input: {
      height: 35,
      width: 160,
      margin: 5,
      borderWidth: 0,
      padding: 10,
      backgroundColor: "#F4F4F4"
    },
  modalView: {
      display: "flex",
      margin: 10,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 25,
      alignItems: "center",
      shadowColor: '#000',
      shadowOffset: {
          width: 3,
          height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
  },
  button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
  },
  buttonOpen: {
      backgroundColor: '#28B3EB'
  },
  buttonClose: {
      backgroundColor: "#28B3EB"
  },
  textStyle: {
      fontSize: 15,
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
  },
  modalText: {
      marginBottom: 15,
      textAlign: "center"
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: "center"
  }
});