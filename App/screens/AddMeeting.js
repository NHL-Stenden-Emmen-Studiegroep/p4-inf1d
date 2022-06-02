import React, { useState } from "react";
import meetings from "../components/meetings.json";
import { StyleSheet, Alert, Modal, Pressable, TextInput } from "react-native";
import {View, Text} from "../components/Themed";
import DatePicker from "react-native-modern-datepicker";

export default function AddMeeting() {
    const [modalVisible, setModalVisible] = useState(false);
    const [text, onChangeText] = useState("");

    return (
        <View style={styles.centeredView}>
            <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}>
                    <View style={styles.modalView}>
                        <View style={styles.flex}>
                            <TextInput style={styles.input} onChangeText={onChangeText} placeholder="Title..."></TextInput>
                        </View>
                        <View style={styles.flex}>
                            <TextInput style={styles.input} onChangeText={onChangeText} placeholder="Location..."></TextInput>
                        </View>
                        <View style={styles.flex}>
                            <TextInput style={styles.input} onChangeText={onChangeText} placeholder="Description..."></TextInput>
                        </View>
                        <Text style={styles.modalText}>Date</Text>
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
        </View>
    );
};

  

const styles = StyleSheet.create({
    flex: {
        display: "flex",
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    input: {
        height: 35,
        width: 160,
        margin: 12,
        borderWidth: 0,
        padding: 10,
        backgroundColor: "#F4F4F4"
      },
    modalView: {
        display: "flex",
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
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
        backgroundColor: '#ffffff',
    },
    buttonClose: {
        backgroundColor: "#f4f4f4",
    },
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    }
  });
