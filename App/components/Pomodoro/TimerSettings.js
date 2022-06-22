import { useState } from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { View, Text } from "../Themed"
import SelectBox from 'react-native-multi-selectbox';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
// OLD
export function TimerSettingsScreen({navigation}) {
  return (
    <ScrollView>
      <View>
        <View>
          <Text style={Styles.text}>Timer Settings</Text>
        </View>
        <View style={Styles.container}>
          <View style={Styles.dropdown}>
            <SelectBox
              label={'Hours'}
              options={ListOfHours}
              value={hours}
              onChange={(text) => setHours(text)}
              hideInputFilter
              width="80%"
              selectIcon={<Ionicons name="chevron-down-outline" color={Colors.light.textColorBlack} size={25} />}
            />
          </View>
          <View style={Styles.dropdown}>
            <SelectBox
              label={'Minutes'}
              options={minutesSeconds}
              value={minutes}
              onChange={(text) => setMinutes(text)}
              hideInputFilter
              width="80%"
              selectIcon={<Ionicons name="chevron-down-outline" color={Colors.light.textColorBlack} size={25} />}
            />
          </View>
          <View style={Styles.dropdown}>
            <SelectBox
              label={'Seconds'}
              options={minutesSeconds}
              value={seconds}
              onChange={(text) => setSeconds(text)}
              hideInputFilter
              width="80%"
              selectIcon={<Ionicons name="chevron-down-outline" color={Colors.light.textColorBlack} size={25} />}
            />
          </View>
          <View style={Styles.buttonContainer}>
            <Pressable style={Styles.Button}>
              <Text style={Styles.text}>Cancel</Text>
            </Pressable>
            <Pressable style={Styles.Button}>
              <Text style={Styles.text}>Confirm</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  text: {
    marginLeft: 35,
    marginVertical: 25,
    color: Colors.light.textColorBlack,
    fontSize: 22,
  },
  dropdown: {
    marginVertical: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingVertical: 300,
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
  text: {
    color: Colors.light.textColorWhite,
    fontSize: 18,
  },
});


