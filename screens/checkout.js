import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput ,ScrollView} from 'react-native';
import { Card, Button } from 'react-native-elements';
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


 function Main({navigation}) {
  return (
   
    <View
          style={{
            backgroundColor: "white",
            flex: 1,
            paddingTop: 5,
            paddingHorizontal: 20,
          }}
        >
        
         
            
  
          
            
          <ScrollView>
      <Card 
           >
             <Image source={
          require ("C:\\Users\\Aaron\\Desktop\\Level 200 2nd Sem\\DCIT 202\\IA\\BuyAll\\assets\\visa.jpg")
        } style={{width:270,height:250}}/>
         <TextInput placeholder={"Enter name"}
        style={{
            height: 42, 
            width:"60%", 
            borderbottomWidth:1,
            padding:10 ,
            backgroundColor:"white",
            borderRadius:5,
            marginVertical:10,
        }}/>
     <TextInput placeholder={"Enter card details"}
        style={{
            height: 42, 
            width:"60%",
            borderbottomWidth:1,
            padding:10 ,
            backgroundColor:"white",
            borderRadius:5,
        }}/>
        <TextInput placeholder={"Enter pin"}
        style={{
            height: 42, 
            width:"60%",
            borderbottomWidth:1,
            padding:10 ,
            backgroundColor:"white",
            borderRadius:5,
        }}/>
        <TextInput placeholder={"CC"}
        style={{
            height: 42, 
            width:"60%",
            borderbottomWidth:1,
            padding:10 ,
            backgroundColor:"white",
            borderRadius:5,
        }}/>
        <TextInput placeholder={"Card expiry date"}
        style={{
            height: 42, 
            width:"60%",
            borderbottomWidth:1,
            padding:10 ,
            backgroundColor:"white",
            borderRadius:5,
        }}/>
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
        <Text style={styles.mainStyle2}>Pay now</Text>

      </TouchableOpacity>

           
        </Card>
       
       
       
       
      
       
       
        
      
            </ScrollView>
            
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