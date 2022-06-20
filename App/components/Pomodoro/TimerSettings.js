import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Text } from "../Themed"
import SelectBox from 'react-native-multi-selectbox';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

  const ListOfHours = [
    { item: '1', id: '1' },
    { item: '2', id: '2' },
    { item: '3', id: '3' },
    { item: '4', id: '4' },
    { item: '5', id: '5' },
    { item: '6', id: '6' },
    { item: '7', id: '7' },
    { item: '8', id: '8' },
    { item: '9', id: '9' },
    { item: '10', id: '10' },
    { item: '11', id: '11' },
    { item: '12', id: '12' },
    { item: '13', id: '13' },
    { item: '14', id: '14' },
    { item: '15', id: '16' },
    { item: '17', id: '18' },
    { item: '19', id: '19' },
    { item: '20', id: '20' },
    { item: '21', id: '21' },
    { item: '22', id: '22' },
    { item: '23', id: '23' },
    { item: '24', id: '24' },
  ];

  const minutesSeconds = [
    { item: '1', id: '1' },
    { item: '2', id: '2' },
    { item: '3', id: '3' },
    { item: '4', id: '4' },
    { item: '5', id: '5' },
    { item: '6', id: '6' },
    { item: '7', id: '7' },
    { item: '8', id: '8' },
    { item: '9', id: '9' },
    { item: '10', id: '10' },
    { item: '11', id: '11' },
    { item: '12', id: '12' },
    { item: '13', id: '13' },
    { item: '14', id: '14' },
    { item: '15', id: '16' },
    { item: '17', id: '18' },
    { item: '19', id: '19' },
    { item: '20', id: '20' },
    { item: '21', id: '21' },
    { item: '22', id: '22' },
    { item: '23', id: '23' },
    { item: '24', id: '24' },
    { item: '25', id: '25' },
    { item: '26', id: '26' },
    { item: '27', id: '27' },
    { item: '28', id: '28' },
    { item: '29', id: '29' },
    { item: '30', id: '30' },
    { item: '31', id: '31' },
    { item: '32', id: '32' },
    { item: '33', id: '33' },
    { item: '34', id: '34' },
    { item: '35', id: '35' },
    { item: '36', id: '36' },
    { item: '37', id: '37' },
    { item: '38', id: '38' },
    { item: '39', id: '39' },
    { item: '40', id: '40' },
    { item: '41', id: '41' },
    { item: '42', id: '42' },
    { item: '43', id: '43' },
    { item: '44', id: '44' },
    { item: '45', id: '45' },
    { item: '46', id: '46' },
    { item: '47', id: '47' },
    { item: '48', id: '48' },
    { item: '49', id: '49' },
    { item: '50', id: '50' },
    { item: '51', id: '51' },
    { item: '52', id: '52' },
    { item: '53', id: '53' },
    { item: '54', id: '54' },
    { item: '55', id: '55' },
    { item: '56', id: '56' },
    { item: '57', id: '57' },
    { item: '58', id: '58' },
    { item: '59', id: '59' },
  ];



export function TimerSettingsScreen({navigation}) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [hours, setHours] = useState(0);

  return (
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
          onChange={(text) => {
            setHours(text);
          }}
          hideInputFilter
          width="80%"
          selectIcon={
            <Ionicons
              name="chevron-down-outline"
              color={Colors.light.textColorBlack}
              size={25}
            />
          }
        />
      </View>
      <View style={Styles.dropdown}>
        <SelectBox
          label={'Minutes'}
          options={minutesSeconds}
          value={minutes}
          onChange={(text) => {
            setMinutes(text);
          }}
          hideInputFilter
          width="80%"
          selectIcon={
            <Ionicons
              name="chevron-down-outline"
              color={Colors.light.textColorBlack}
              size={25}
            />
          }
        />
      </View>
      <View style={Styles.dropdown}>
        <SelectBox
          label={'Seconds'}
          options={minutesSeconds}
          value={seconds}
          onChange={(text) => {
            setSeconds(text);
          }}
          hideInputFilter
          width="80%"
          selectIcon={
            <Ionicons
              name="chevron-down-outline"
              color={Colors.light.textColorBlack}
              size={25}
            />
          }
        />
      </View>
    </View>
  </View>
  );
};




const Styles = StyleSheet.create({
container: {
  alignItems: "center",
  paddingVertical: 20,
},
text :{
  marginLeft: 35,
  marginVertical: 25,
  color: Colors.light.textColorBlack,
  fontSize: 22,
},
dropdown: {
  marginVertical: 15,
}
});


