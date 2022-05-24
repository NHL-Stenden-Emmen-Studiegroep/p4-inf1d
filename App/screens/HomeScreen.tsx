import { Button, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

export default function HomeScreen() {
  return ( 
  <View style={styles.container}>
    <Button title="Calendar" onPress={() => ('Calendar')} />
  </View>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
