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
        
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Ionicons name="ios-menu-outline" size={24} color="black" />
            <MaterialCommunityIcons name="dresser-outline" size={24} color="black" />
        
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <AntDesign name="search1" size={20} color="black" />
              <Ionicons name="notifications-outline" size={20} color="black" />
             
             </View>
            
    
            
          </View>
            
  
          
            
          <ScrollView>
      <Card 
           >
             <Image source={
          require ("C:\\Users\\Aaron\\Desktop\\Level 200 2nd Sem\\DCIT 202\\IA\\BuyAll\\assets\\sales1.jpg")
        } style={{width:270,height:310}}/>
            <Text style={{marginBottom: 10, marginTop: 20,fontSize:20,fontWeight:'bold',color:'#7793a1'}} h2>
                Striped
            </Text>
            <Text  style={{fontSize:15,fontWeight:'bold'}} h4>
                $20
            </Text>
            <TouchableOpacity style={{backgroundColor:'black',height:40,width:'100%',borderRadius:40,alignItems:'center'}}
            onPress={() => navigation.navigate('cart')}>
              <Text style={{paddingTop:10,color:'white',fontSize:18}}>Buy Me</Text>
            </TouchableOpacity>
        </Card>
        <Card 
           >
             <Image source={
          require ("C:\\Users\\Aaron\\Desktop\\Level 200 2nd Sem\\DCIT 202\\IA\\BuyAll\\assets\\sales2.jpg")
        } style={{width:270,height:310}}/>
            <Text style={{marginBottom: 10, marginTop: 20,fontSize:20,fontWeight:'bold',color:'#7793a1'}} h2>
                Winter
            </Text>
            <Text  style={{fontSize:15,fontWeight:'bold'}} h4>
                $45
            </Text>
            <TouchableOpacity style={{backgroundColor:'black',height:40,width:'100%',borderRadius:40,alignItems:'center'}}
            onPress={() => navigation.navigate('cart')}>
              <Text style={{paddingTop:10,color:'white',fontSize:18}}>Buy Me</Text>
            </TouchableOpacity>
        </Card>
        <Card 
           >
             <Image source={
          require ("C:\\Users\\Aaron\\Desktop\\Level 200 2nd Sem\\DCIT 202\\IA\\BuyAll\\assets\\sales3.jpg")
        } style={{width:270,height:310}}/>
            <Text style={{marginBottom: 10, marginTop: 20,fontSize:20,fontWeight:'bold',color:'#7793a1'}} h2>
                Omen
            </Text>
            <Text  style={{fontSize:15,fontWeight:'bold'}} h4>
                $50
            </Text>
            <TouchableOpacity style={{backgroundColor:'black',height:40,width:'100%',borderRadius:40,alignItems:'center'}}
             onPress={() => navigation.navigate('cart')}>
              <Text style={{paddingTop:10,color:'white',fontSize:18}}>Buy Me</Text>
            </TouchableOpacity>
        </Card>
        <Card 
           >
             <Image source={
          require ("C:\\Users\\Aaron\\Desktop\\Level 200 2nd Sem\\DCIT 202\\IA\\BuyAll\\assets\\sales4.jpg")
        } style={{width:270,height:310}}/>
            <Text style={{marginBottom: 10, marginTop: 20,fontSize:20,fontWeight:'bold',color:'#7793a1'}} h2>
                Unisex african print
            </Text>
            <Text  style={{fontSize:15,fontWeight:'bold'}} h4>
                $35
            </Text>
            <TouchableOpacity style={{backgroundColor:'black',height:40,width:'100%',borderRadius:40,alignItems:'center'}}
             onPress={() => navigation.navigate('cart')}>
              <Text style={{paddingTop:10,color:'white',fontSize:18}}>Buy Me</Text>
            </TouchableOpacity>
        </Card>
        <Card 
           >
             <Image source={
          require ("C:\\Users\\Aaron\\Desktop\\Level 200 2nd Sem\\DCIT 202\\IA\\BuyAll\\assets\\sale6.jpg")
        } style={{width:270,height:310}}/>
            <Text style={{marginBottom: 10, marginTop: 20,fontSize:20,fontWeight:'bold',color:'#7793a1'}} h2>
                Patrick x nike
            </Text>
            <Text  style={{fontSize:15,fontWeight:'bold'}} h4>
                $60
            </Text>
            <TouchableOpacity style={{backgroundColor:'black',height:40,width:'100%',borderRadius:40,alignItems:'center'}}
             onPress={() => navigation.navigate('cart')}>
              <Text style={{paddingTop:10,color:'white',fontSize:18}}>Buy Me</Text>
            </TouchableOpacity>
        </Card>
        <Card 
           >
             <Image source={
          require ("C:\\Users\\Aaron\\Desktop\\Level 200 2nd Sem\\DCIT 202\\IA\\BuyAll\\assets\\sales8.jpg")
        } style={{width:270,height:310}}/>
            <Text style={{marginBottom: 10, marginTop: 20,fontSize:20,fontWeight:'bold',color:'#7793a1'}} h2>
                Trasher
            </Text>
            <Text  style={{fontSize:15,fontWeight:'bold'}} h4>
                $ 40
            </Text>
            <TouchableOpacity style={{backgroundColor:'black',height:40,width:'100%',borderRadius:40,alignItems:'center'}}
             onPress={() => navigation.navigate('cart')}>
              <Text style={{paddingTop:10,color:'white',fontSize:18}}>Buy Me</Text>
            </TouchableOpacity>
        </Card>
        <Card 
           >
             <Image source={
          require ("C:\\Users\\Aaron\\Desktop\\Level 200 2nd Sem\\DCIT 202\\IA\\BuyAll\\assets\\sales7.jpg")
        } style={{width:270,height:310}}/>
            <Text style={{marginBottom: 10, marginTop: 20,fontSize:20,fontWeight:'bold',color:'#7793a1'}} h2>
                Adidas
            </Text>
            <Text  style={{fontSize:15,fontWeight:'bold'}} h4>
                $25
            </Text>
            <TouchableOpacity style={{backgroundColor:'black',height:40,width:'100%',borderRadius:40,alignItems:'center'}}
             onPress={() => navigation.navigate('cart')}>
              <Text style={{paddingTop:10,color:'white',fontSize:18}}>Buy Me</Text>
            </TouchableOpacity>
        </Card>
        <Card 
           >
             <Image source={
          require ("C:\\Users\\Aaron\\Desktop\\Level 200 2nd Sem\\DCIT 202\\IA\\BuyAll\\assets\\nasa.jpg")
        } style={{width:270,height:310}}/>
            <Text style={{marginBottom: 10, marginTop: 20,fontSize:20,fontWeight:'bold',color:'#7793a1'}} h2>
               Nasa
            </Text>
            <Text  style={{fontSize:15,fontWeight:'bold'}} h4>
                $30
            </Text>
            <TouchableOpacity style={{backgroundColor:'black',height:40,width:'100%',borderRadius:40,alignItems:'center'}}
             onPress={() => navigation.navigate('cart')}>
              <Text style={{paddingTop:10,color:'white',fontSize:18}}>Buy Me</Text>
            </TouchableOpacity>
        </Card>
        <Card 
           >
             <Image source={
          require ("C:\\Users\\Aaron\\Desktop\\Level 200 2nd Sem\\DCIT 202\\IA\\BuyAll\\assets\\sales11.jpg")
        } style={{width:270,height:310}}/>
            <Text style={{marginBottom: 10, marginTop: 20,fontSize:20,fontWeight:'bold',color:'#7793a1'}} h2>
                Uchiha
            </Text>
            <Text  style={{fontSize:15,fontWeight:'bold'}} h4>
                $45
            </Text>
            <TouchableOpacity style={{backgroundColor:'black',height:40,width:'100%',borderRadius:40,alignItems:'center'}}
            onPress={() => navigation.navigate('cart')}>
              <Text style={{paddingTop:10,color:'white',fontSize:18}}>Buy Me</Text>
            </TouchableOpacity>
        </Card>
        <Card 
           >
             <Image source={
          require ("C:\\Users\\Aaron\\Desktop\\Level 200 2nd Sem\\DCIT 202\\IA\\BuyAll\\assets\\sales10.jpg")
        } style={{width:270,height:310}}/>
            <Text style={{marginBottom: 10, marginTop: 20,fontSize:20,fontWeight:'bold',color:'#7793a1'}} h2>
                Wings 
            </Text>
            <Text  style={{fontSize:15,fontWeight:'bold'}} h4>
                $45
            </Text>
            <TouchableOpacity style={{backgroundColor:'black',height:40,width:'100%',borderRadius:40,alignItems:'center'}}
            onPress={() => navigation.navigate('cart')}>
              <Text style={{paddingTop:10,color:'white',fontSize:18}}>Buy Me</Text>
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