import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

 function Signup({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo_pic.jpg')} style={{ width: 200, height: 100, borderRadius:20,}}></Image>   

     <TextInput placeholder={"Enter user name"}
        style={{
            height: 42, 
            width:"60%", 
            borderbottomWidth:1,
            padding:10 ,
            backgroundColor:"white",
            borderRadius:5,
            marginVertical:10,
        }}/>
     <TextInput placeholder={"Enter user password"}
        style={{
            height: 42, 
            width:"60%",
            borderbottomWidth:1,
            padding:10 ,
            backgroundColor:"white",
            borderRadius:5,
        }}/>
     <TouchableOpacity onPress ={() => navigation.navigate('Main')}
     style={{
          backgroundColor: '#374f41',
          paddingHorizontal: 20,
          paddingVertical: 5,
          width: '50%',
          borderRadius: '25%',
          alignItems: 'center',
          marginTop: 10,
        }}>
     
        <Text style={styles.mainStyle2}>lets Shop</Text>
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


export default Signup;