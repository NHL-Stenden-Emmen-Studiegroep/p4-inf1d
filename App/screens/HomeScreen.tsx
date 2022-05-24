import { Button, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ReactDOM from "react-dom";
    import { BrowserRouter, Route, Switch } from "react-router-dom";
 
    import Page1 from "./Page1";
    import Page2 from "./Page2";
export default function HomeScreen() {
  return ( 
    
 
     const rootElement = document.getElementById("root");
     ReactDOM.render(
       <BrowserRouter>
        <Switch>
         <Route exact path="/" component={Page1} />
         <Route path="/page2" component={Page2} />
       </Switch>
       </BrowserRouter>,
       rootElement
     );
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
