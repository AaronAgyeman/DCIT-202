import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput ,ScrollView} from 'react-native';
import { Card, Button } from 'react-native-elements';
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';



 export default function cart({navigation}) {
  return (
<View>
<ScrollView>
    <Card>
        <View style={{flexDirection: "row"}}>
            <View>
        <Image source={
            require ("C:\\Users\\Aaron\\Desktop\\Level 200 2nd Sem\\DCIT 202\\IA\\BuyAll\\assets\\sales1.jpg")
            } style={{width:100,height:100}}/>
        </View>
        
        <View style={{marginLeft: 30}}>
        <Text style={{fontWeight: "bold", fontSize: 25}}>Striped jacket</Text>
        <Text style={{fontWeight: "bold", fontSize: 15}}>$20.00</Text>
        </View>
    </View>
    </Card>

    <Card>
        <View style={{flexDirection: "row"}}>
            <View>
        <Image source={
            require ("C:\\Users\\Aaron\\Desktop\\Level 200 2nd Sem\\DCIT 202\\IA\\BuyAll\\assets\\sales2.jpg")
            } style={{width:100,height:100}}/>
        </View>
        
        <View style={{marginLeft: 30}}>
        <Text style={{fontWeight: "bold", fontSize: 25}}>Winter jacket</Text>
        <Text style={{fontWeight: "bold", fontSize: 15}}>$45.00</Text>
        </View>
    </View>
    </Card>

    <Card>
        <View style={{flexDirection: "row"}}>
            <View>
        <Image source={
            require ("C:\\Users\\Aaron\\Desktop\\Level 200 2nd Sem\\DCIT 202\\IA\\BuyAll\\assets\\sales3.jpg")
            } style={{width:100,height:100}}/>
        </View>
        
        <View style={{marginLeft: 30}}>
        <Text style={{fontWeight: "bold", fontSize: 25}}>Omen jacket</Text>
        <Text style={{fontWeight: "bold", fontSize: 15}}>$50.00</Text>
        </View>
    </View>
    </Card>
    <Card>
        <View style={{flexDirection: "row"}}>
            <View>
        <Image source={
            require ("C:\\Users\\Aaron\\Desktop\\Level 200 2nd Sem\\DCIT 202\\IA\\BuyAll\\assets\\sales4.jpg")
            } style={{width:100,height:100}}/>
        </View>
        
        <View style={{marginLeft: 30}}>
        <Text style={{fontWeight: "bold", fontSize: 25}}>africa print</Text>
        <Text style={{fontWeight: "bold", fontSize: 15}}>$35.00</Text>
        </View>
    </View>
    </Card>
    <Card>
        <View style={{flexDirection: "row"}}>
            <View>
        <Image source={
            require ("C:\\Users\\Aaron\\Desktop\\Level 200 2nd Sem\\DCIT 202\\IA\\BuyAll\\assets\\sale6.jpg")
            } style={{width:100,height:100}}/>
        </View>
        
        <View style={{marginLeft: 30}}>
        <Text style={{fontWeight: "bold", fontSize: 25}}>Patrick X Nike</Text>
        <Text style={{fontWeight: "bold", fontSize: 15}}>$60.00</Text>
        </View>
    </View>
    </Card>
    <Card>
        <View style={{flexDirection: "row"}}>
            <View>
        <Image source={
            require ("C:\\Users\\Aaron\\Desktop\\Level 200 2nd Sem\\DCIT 202\\IA\\BuyAll\\assets\\sales8.jpg")
            } style={{width:100,height:100}}/>
        </View>
        
        <View style={{marginLeft: 30}}>
        <Text style={{fontWeight: "bold", fontSize: 25}}>Trasher</Text>
        <Text style={{fontWeight: "bold", fontSize: 15}}>$60.00</Text>
        </View>
    </View>
    </Card>
    <Card>
        <View style={{flexDirection: "row"}}>
            <View>
        <Image source={
            require ("C:\\Users\\Aaron\\Desktop\\Level 200 2nd Sem\\DCIT 202\\IA\\BuyAll\\assets\\sales7.jpg")
            } style={{width:100,height:100}}/>
        </View>
        
        <View style={{marginLeft: 30}}>
        <Text style={{fontWeight: "bold", fontSize: 25}}>Adidas</Text>
        <Text style={{fontWeight: "bold", fontSize: 15}}>$25.00</Text>
        </View>
    </View>
    </Card>
    <Card>
        <View style={{flexDirection: "row"}}>
            <View>
        <Image source={
            require ("C:\\Users\\Aaron\\Desktop\\Level 200 2nd Sem\\DCIT 202\\IA\\BuyAll\\assets\\nasa.jpg")
            } style={{width:100,height:100}}/>
        </View>
        
        <View style={{marginLeft: 30}}>
        <Text style={{fontWeight: "bold", fontSize: 25}}>Nasa</Text>
        <Text style={{fontWeight: "bold", fontSize: 15}}>$30.00</Text>
        </View>
    </View>
    </Card>
    </ScrollView>
</View>
  );
}

