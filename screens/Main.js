import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput } from 'react-native';


 function Main() {
  return (
    <View style={styles.container}>
     <Text>Cart</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0ccb2',
    alignItems: 'flex-start',
    padding:10,
   
  },
  
  
});


export default Main;