import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Text } from "../Themed"
import SelectBox from 'react-native-multi-selectbox';

  const K_OPTIONS = [
    {
      item: '1',
      id: 'JUVE',
    },
    {
      item: '2',
      id: 'RM',
    },
    {
      item: '3',
      id: 'BR',
    },
    {
      item: '4',
      id: 'PSG',
    },
    {
      item: '5',
      id: 'FBM',
    },
    {
      item: '6',
      id: 'MUN',
    },
    {
      item: '7',
      id: 'MCI',
    },
    {
      item: '8',
      id: 'EVE',
    },
    {
      item: '9',
      id: 'TOT',
    },
    {
      item: '10',
      id: 'CHE',
    },
    {
      item: '11',
      id: 'LIV',
    },
    {
      item: '12',
      id: 'ARS',
    },

    {
      item: '13',
      id: 'LEI',
    },
  ];

export function TimerSettingsScreen({navigation}) {
  const [selectedTeam, setSelectedTeam] = useState({});
  const [selectedTeams, setSelectedTeams] = useState([]);

  return (
    <View>
      <View>
        <Text>Timer Settings</Text>
      </View>
      <View>
        <SelectBox
          label={""}
          options={K_OPTIONS}
          value={selectedTeam}
          onChange={(text) => {console.log(text); setSelectedTeam(text)}}
          hideInputFilter
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
    height: 100,
  },
});


