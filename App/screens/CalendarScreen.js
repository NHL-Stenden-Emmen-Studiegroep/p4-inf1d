import { useState, useEffect } from 'react';
import { StyleSheet, Pressable, Modal, Alert, TextInput } from 'react-native';
import { Agenda } from 'react-native-calendars';
import DatePicker from 'react-native-modern-datepicker';

import { Text, View } from '../components/Themed';
import moment from 'moment';

import Data from '../resources/meetings.json';
import { Button } from 'react-native-paper';

export default function CalendarScreen() {
  const [calendarItems, setCalendarItems] = useState();

  const [calendarItem, setCalendarItem] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshData, setRefreshData] = useState(false);

  useEffect(() => {
    setRefreshData(true);

    setCalendarItems(Data);
    setRefreshData(false);
  }, []);

  const fetchCalendarData = () => {
    setRefreshData(true);

    setRefreshData(false);
  };

  return (
    <View style={Styles.container}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={Styles.modelContainer}>
          <Text style={Styles.title}>Nieuwe activiteit</Text>
          <TextInput
            style={Styles.input}
            onChangeText={(text) => {
              setTitle(text);
            }}
            placeholder="Naam"
          />
          <TextInput
            style={Styles.input}
            onChangeText={(text) => {
              setLocation(text);
            }}
            placeholder="Locatie"
          />
          <TextInput
            style={Styles.input}
            onChangeText={(text) => {
              setDescription(text);
            }}
            placeholder="Notities"
          />
          <DatePicker
            onDateChange={(date) => {
              setSelectedDate(date);
            }}
            onTimeChange={(time) => {
              setSelectedTime(time);
            }}
            minuteInterval={1}
          />
          <Pressable
            style={[Styles.button, Styles.buttonClose]}
            onPress={() => {
              setDate(moment(new Date(selectedDate)).format('YYYY-MM-DD'));
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={Styles.buttonText}>Voeg toe</Text>
          </Pressable>
        </View>
      </Modal>
      <Pressable style={[Styles.button, Styles.buttonOpen]} onPress={() => setModalVisible(true)}>
        <Text style={Styles.buttonText}>+</Text>
      </Pressable>
      <Agenda
        items={calendarItems}
        renderItem={(item, isFirst) => {
          return (
            <Pressable onPress={() => Alert.alert(item.id)} style={Styles.itemView}>
              <Text style={Styles.title}>{item.title}</Text>
              <Text>{item.description}</Text>
              <Text>{item.location}</Text>
              <Text>{item.startTime}</Text>
              <Text>{item.endTime}</Text>
            </Pressable>
          );
        }}
        renderEmptyData={() => {
          return (
            <View>
              <Text style={Styles.title}>Er zijn geen agenda punten aanwezig</Text>
            </View>
          );
        }}
        refreshing={refreshData}
        onRefresh={fetchCalendarData}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modelContainer: {
    marginTop: 50,
    flex: 1,
  },
  itemView: {
    flex: 1,
    margin: 10,
    backgroundColor: 'white',
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    alignSelf: 'center',
    // margin: 10,
    width: '50%',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    alignSelf: 'center',
    height: 35,
    width: '80%',
    margin: 10,
    borderWidth: 0,
    padding: 10,
    backgroundColor: '#f4f4f4',
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#28B3EB',
  },
  buttonClose: {
    alignSelf: 'center',
    width: '80%',
    backgroundColor: '#28B3EB',
  },
});
