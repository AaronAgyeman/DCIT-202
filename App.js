import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import intro from './screens/intro';
import Signup from './screens/Signup';
import Main from './screens/Main';

const stack = createStackNavigator();

export default function App({}) {
  return (
   <NavigationContainer>
     <stack.Navigator>
       <stack.Screen name="intro" component={intro} />
       <stack.Screen name="Signup" component={Signup} />
       <stack.Screen name="Main" component={Main} />
     </stack.Navigator>
   </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   }
// });
