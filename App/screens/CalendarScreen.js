import { useState, useEffect } from 'react';
import { StyleSheet, Pressable, Modal, Alert, TextInput } from 'react-native';
import { Agenda } from 'react-native-calendars';
import DatePicker from 'react-native-modern-datepicker';
import uuid from 'react-native-uuid';
import moment from 'moment';

import { Text, View } from '../components/Themed';

import Data from '../resources/meetings.json';

export default function CalendarScreen() {
  const [calendarItems, setCalendarItems] = useState({});

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [location, setLocation] = useState();
  const [startTime, setStartTime] = useState('00:00');

  const [selectedDate, setSelectedDate] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshData, setRefreshData] = useState(false);

  useEffect(() => {
    setStartTime('00:00');
    console.log('rerender has occured....');
  }, [calendarItems]);

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
          setModalVisible(false);
        }}
      >
        <View style={Styles.modelContainer}>
          <Text style={Styles.title}>Nieuwe activiteit</Text>
          <TextInput
            style={Styles.input}
            onChangeText={(naam) => {
              setTitle(naam);
            }}
            placeholder="Naam"
            placeholderTextColor={'#000'}
            autoFocus
          />
          <TextInput
            style={Styles.input}
            onChangeText={(location) => {
              setLocation(location);
            }}
            placeholder="Locatie"
            placeholderTextColor={'#100'}
          />
          <TextInput
            style={Styles.input}
            onChangeText={(description) => {
              setDescription(description);
            }}
            placeholder="Notities"
            placeholderTextColor={'#000'}
          />
          <DatePicker
            onDateChange={(date) => {
              setSelectedDate(moment(new Date(date)).format('YYYY-MM-DD'));
            }}
            onTimeChange={(time) => {
              setStartTime(time);
            }}
            minuteInterval={1}
            date={new Date()}
          />
          <Pressable
            style={[Styles.button, Styles.buttonClose]}
            onPress={() => {
              let input = {
                id: uuid.v4(),
                title,
                description,
                location,
                startTime,
              };

              if (typeof calendarItems !== 'undefined') {
                if (Object.keys(calendarItems).includes(selectedDate)) {
                  let tempArray = calendarItems;
                  tempArray[selectedDate].push(input);
                  setCalendarItems({ ...calendarItems, tempArray });
                  // calendarItems;
                  setModalVisible(false);
                } else {
                  setCalendarItems({ ...calendarItems, [selectedDate]: [input] });
                  setModalVisible(false);
                }
              } else {
                setCalendarItems({ [selectedDate]: [input] });
                setModalVisible(false);
              }
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
              <Text>{item.location}</Text>
              <Text>{item.description}</Text>
              <Text>{item.startTime}</Text>
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
