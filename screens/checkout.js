import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Keyboard,
  KeyboardAvoidingViewComponent,
} from "react-native";
import { Card, Button } from "react-native-elements";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "../screens/Signup.js";

function Main({ navigation }) {
const simpleAlertHandler = ()=>{
    alert("Thank you and come back soon")
}
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
        <Card styles={{ backgroundColor: "#f2f2f2" }}>
          <Image
            source={require("C:\\Users\\Aaron\\Desktop\\Level 200 2nd Sem\\DCIT 202\\IA\\BuyAll\\assets\\visa.jpg")}
            style={{ width: 270, height: 250 }}
          />
          <TextInput
            placeholder={"Enter name"}
            style={{
              height: 42,
              width: "100%",
              borderbottomWidth: 1,
              padding: 10,
              backgroundColor: "white",
              borderRadius: 5,
              marginVertical: 10,
              borderWidth: 1,
              borderColor: "#a6a6a6",
              marginBottom: 20,
              marginTop:20,
            }}
          />
          <TextInput
            placeholder={"Enter card details"}
            style={{
              height: 42,
              width: "100%",
              borderbottomWidth: 1,
              padding: 10,
              backgroundColor: "white",
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#a6a6a6",
              marginBottom: 20,
            }}
          />
          <TextInput
            placeholder={"Enter pin"}
            style={{
              height: 42,
              width: "100%",
              borderbottomWidth: 1,
              padding: 10,
              backgroundColor: "white",
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#a6a6a6",
              marginBottom: 20,
            }}
          />
          <TextInput
            placeholder={"CC"}
            style={{
              height: 42,
              width: "100%",
              borderbottomWidth: 1,
              padding: 10,
              backgroundColor: "white",
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#a6a6a6",
              marginBottom: 20,
            }}
          />
          <TextInput
            placeholder={"Card expiry date"}
            style={{
              height: 42,
              width: "100%",
              borderbottomWidth: 1,
              padding: 10,
              backgroundColor: "white",
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#a6a6a6",
              marginBottom: 20,
            }}
          />
          <TouchableOpacity
            onPress={simpleAlertHandler }
            style={{
              backgroundColor: "#b4ac7e",
              paddingHorizontal: 20,
              paddingVertical: 5,
              width: "50%",
              borderRadius: "25%",
              justifyContent: "center",
              marginTop: 10,
              height:"7%",
              marginLeft: "24%",
            }}
          >
            <Text style={{ width: "100%", borderRadius: 5,justifyContent:"center",paddingLeft:20,}}>Pay now</Text>
          </TouchableOpacity>
        </Card>
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c0ccb2",
    alignItems: "flex-start",
    padding: 10,
  },
});

export default Main;
