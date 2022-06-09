import React, { useState } from "react";
import meetings from "../../components/meetings.json";
import { StyleSheet, Alert, Modal, Pressable, TextInput } from "react-native";
import {View, Text} from "../../components/Themed";
import DatePicker from "react-native-modern-datepicker";
import { Agenda } from "react-native-calendars";
import { AgendaItem } from "./AgendaItem";

export default function CalendarScreen(){
    const today = new Date();

    const [getToday, setToday]  = useState(today.getDay);
    const [getMonth, setMonth]  = useState(today.getMonth);
    const [getFullYear, setFullYear]  = useState(today.getFullYear);
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = useState("");

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
                    <DatePicker
                    minuteInterval={1}></DatePicker>
                    <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Confirm</Text>
                    </Pressable>
                </View>
        </Modal>
        <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>+</Text>
        </Pressable> 
        <Agenda
        onDayChange={(day) => setToday(day)}
        items={{
           '2022-06-08': [{}]
        }}
        renderItem={(item) => {
            return (
                meetings.map(meeting => <AgendaItem item={meeting} style />)
            )
        }}>
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