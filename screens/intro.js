import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Signup from '../screens/Signup.js';

 function intro({navigation}) {
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require('../assets/hoodie_pic.jpg')} style={{ width: 200, height: 400, borderRadius:20,}}></Image>
      <Text style={styles.mainStyle1}>Hoodville</Text>
      <TouchableOpacity onPress ={() =>
        navigation.navigate(Signup)
      }
        style={{
          backgroundColor: '#b4ac7e',
          paddingHorizontal: 20,
          paddingVertical: 5,
          width: '50%',
          borderRadius: '25%',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text style={styles.mainStyle2}>Create account</Text>

      </TouchableOpacity >
      <TouchableOpacity onPress ={() =>
        navigation.navigate(Signup)
      }
        style={{
          backgroundColor: '#b4ac7e',
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
    backgroundColor: '#749288',
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
export default intro;