import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require('./assets/main_pic.jpg')} style={{ width: 200, height: 400, borderRadius:20,}}></Image>
      <Text style={styles.mainStyle1}>Hoodville</Text>
      
      <Text style={styles.mainStyle1}>login</Text>
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainStyle1:{
    fontSize:30,
    fontWeight:"bold",
    
  }
});
