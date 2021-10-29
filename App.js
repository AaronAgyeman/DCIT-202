import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './screens/intro'

const stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <stack.Navigator>
       <stack.Screen name="Intro" component={Intro} />
     </stack.Navigator>
   </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   }
// });
