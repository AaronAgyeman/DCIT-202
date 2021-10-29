import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function Intro() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require('../assets/main_pic.jpg')} style={{ width: 200, height: 400, borderRadius:20,}}></Image>
      <Text style={styles.mainStyle1}>Hoodville</Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#95a479',
          paddingHorizontal: 20,
          paddingVertical: 5,
          width: '50%',
          borderRadius: '25%',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text style={styles.mainStyle2}>Sign up</Text>

      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#95a479',
          paddingHorizontal: 20,
          paddingVertical: 5,
          width: '50%',
          borderRadius: '25%',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text style={styles.mainStyle2}>login</Text>

      </TouchableOpacity>
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0ccb2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainStyle1:{
    fontSize:30,
    fontWeight:"bold",
    color: 'black',
    
  },
  
  mainStyle2:{
    fontSize:20,
    fontWeight:"bold",
    color: 'white',
    
  }
  
  
});
