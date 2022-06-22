import { useEffect, useState } from 'react';
import { Modal, StyleSheet, Pressable } from 'react-native';
import SelectBox from 'react-native-multi-selectbox';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { ListOfHours, minutesSeconds } from './timerConfig';
import { View, Text } from '../Themed';

export function TimerSettingsModal({modalVisible, setModalVisible, timerConfig}) {
    const {seconds, setSeconds, minutes, setMinutes, hours, setHours} = timerConfig;
    const [configHours, setConfigHours] = useState();
    const [configMinutesSeconds, setConfigMinutesSeconds] = useState();

    const [localSeconds, setLocalSeconds] = useState(seconds);
    const [localMinutes, setLocalMinutes] = useState(minutes);
    const [localHours, setLocalHours] = useState(hours);

    useEffect(() => {
      setConfigHours(ListOfHours);
      setConfigMinutesSeconds(minutesSeconds);
    }, []);

    useEffect(() => {
      setLocalHours(hours);
      setLocalMinutes(minutes);
      setLocalSeconds(seconds);
    }, [modalVisible])

    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={Styles.container}>
          <View>
            <Text style={Styles.text}>Timer Settings</Text>
          </View>
          <View>
            <View style={Styles.dropdown}>
              <SelectBox
                label={'Hours'}
                options={configHours}
                value={localHours}
                onChange={(hours) => setLocalHours(hours)}
                hideInputFilter
                selectIcon={<Ionicons name="chevron-down-outline" color={Colors.light.textColorBlack} size={25} />}
              />
            </View>
            <View style={Styles.dropdown}>
              <SelectBox
                label={'Minutes'}
                options={configMinutesSeconds}
                value={localMinutes}
                onChange={(minutes) => setLocalMinutes(minutes)}
                hideInputFilter
                selectIcon={<Ionicons name="chevron-down-outline" color={Colors.light.textColorBlack} size={25} />}
              />
            </View>
            <View style={Styles.dropdown}>
              <SelectBox
                label={'Seconds'}
                options={configMinutesSeconds}
                value={localSeconds}
                onChange={(seconds) => setLocalSeconds(seconds)}
                hideInputFilter
                selectIcon={<Ionicons name="chevron-down-outline" color={Colors.light.textColorBlack} size={25} />}
              />
            </View>
            <View style={Styles.buttonContainer}>
              <Pressable style={[Styles.Button, Styles.ButtonCancel]} onPress={() => setModalVisible(false)}>
                <Text style={Styles.ButtonText}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[Styles.Button, Styles.ButtonConfirm]}
                onPress={() => {
                  setModalVisible(false);
                  if(localHours.id !== undefined) {
                    setHours(localHours.id)
                  } else {
                    setHours(0)
                  }
                  if (localMinutes.id !== undefined) {
                    setMinutes(localMinutes.id);
                  } else {
                    setMinutes(0);
                  }
                  if (localSeconds.id !== undefined) {
                    setSeconds(localSeconds.id);
                  } else {
                    setSeconds(0);
                  }
                }}
              >
                <Text style={Styles.ButtonText}>Confirm</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    );};

const Styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: Colors.light.colorWhite,
    height: '100%',
  },
  text: {
    alignSelf: 'center',
    marginVertical: 25,
    color: Colors.light.textColorBlack,
    fontSize: 22,
  },
  dropdown: {
    marginVertical: 15,
    width: 350,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  Button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.colorBlue500,
    color: Colors.light.textColorWhite,
    width: 125,
    height: 40,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  ButtonConfirm: {
    position: 'absolute',
    left: 155,
  },
  ButtonText: {
    color: Colors.light.textColorWhite,
    fontSize: 18,
  },
});
