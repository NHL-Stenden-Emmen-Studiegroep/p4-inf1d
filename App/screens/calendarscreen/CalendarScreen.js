import React, { useState } from "react";
import meetings from "../../components/meetings.json";
import { StyleSheet, Alert, Modal, Pressable, TextInput } from "react-native";
import {View, Text} from "../../components/Themed";
import { Agenda } from "react-native-calendars";
import DatePicker from "react-native-modern-datepicker";

export default function CalendarScreen(){
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

  return (
    <View style={styles.container}>
        <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}>
                <View style={styles.modalView}>
                    <Text style={styles.title}>Add Meeting</Text>
                    <View style={styles.flex}>
                        <TextInput style={styles.input} onChangeText={(text) => {setTitle(text)}} placeholder="Title..."></TextInput>
                    </View>
                    <View style={styles.flex}>
                        <TextInput style={styles.input} onChangeText={(text) => {setLocation(text)}} placeholder="Location..."></TextInput>
                    </View>
                    <View style={styles.flex}>
                        <TextInput style={styles.input} onChangeText={(text) => {setDescription(text)}} placeholder="Description..."></TextInput>
                    </View>
                    <DatePicker onDateChange={(date) => {setDate(date)}} onTimeChange={(time) => {setTime(time)}}></DatePicker>
                    <Pressable style={[styles.button, styles.buttonClose]} onPress={() => 
                            {
                                console.log(title)
                                console.log(location)
                                console.log(description)
                                console.log(date)
                                console.log(time)
                                setModalVisible(!modalVisible)
                            }
                        }>
                        <Text style={styles.textStyle} >Confirm</Text>
                    </Pressable>
                </View>
        </Modal>
        <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>+</Text>
        </Pressable>
        <Agenda
        style={styles.modalView}
        items={{
            date: [console.log(title), console.log(location), console.log(description), console.log(date), console.log(time)]
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
      backgroundColor: "#f4f4f4"
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