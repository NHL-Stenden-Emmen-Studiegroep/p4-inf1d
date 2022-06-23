import { useState, useEffect } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Text, View } from '../components/Themed';
import moment from 'moment';

import Data from '../resources/meetings.json';

export default function Calendar() {
  const [calendarItems, setCalendarItems] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshData, setRefreshData] = useState(true);

  useEffect(() => {
    setRefreshData(true);

    setCalendarItems(Data);
  }, []);

  const fetchCalendarData = () => {
    setRefreshData(true);
  };

  return (
    <View style={Styles.container}>
      <Pressable style={[Styles.button, Styles.buttonOpen]} onPress={() => setModalVisible(true)}>
        <Text style={Styles.buttonText}>+</Text>
      </Pressable>
      <Agenda
        items={calendarItems}
        // Callback that gets called on day press
        onDayPress={(day) => {
          console.log('day pressed');
        }}
        renderItem={(item, firstItemInDay) => {
          return (
            <View style={Styles.modalView} key={item.date}>
              <Text style={Styles.title}>{item.title}</Text>
              <Text>{item.description}</Text>
              <Text>{item.location}</Text>
              <Text>{item.selectedTime}</Text>
            </View>
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
    marginTop: 48,
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    flex: 1,
    margin: 10,
    backgroundColor: 'white',
    // borderRadius: 20,
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
    marginTop: 10,
    fontSize: 18,
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
    backgroundColor: '#28B3EB',
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
