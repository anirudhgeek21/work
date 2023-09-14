import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';




import HomeScreen from './Home.js'
import Makebill from './Makebill.js'


const Stack = createNativeStackNavigator();



const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Makebill" component={Makebill} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default MyStack;









































































//// import { StatusBar } from "expo-status-bar";
//import { useState } from "react";
//import {
//  KeyboardAvoidingView,
//  Text,
//  View,
//  ScrollView,
//  TextInput,
//  TouchableOpacity,
//  StatusBar,
//  StyleSheet,
//  Keyboard,
//} from "react-native";
//import Todo from "./components/Todo";
//
//export default function App() {
//  return(
//    <View>
//        <View
//                style={[
//                        styles.container,
//                        {
//
//                          flexDirection: 'row',
//                          backgroundColor:"blue",
//
//                        },
//                      ]}>
//                <View style={{backgroundColor:"red",height:"20px"}}>
//                     <Text style={styles.red}>just red</Text>
//                     <Text style={styles.bigBlue}>just bigBlue</Text>
//                     <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
//
//                </View>
//
//            </View>
//
//        <View>
//
//                <text> Government of india</text>
//        </View>
//
//
//
//    </View>
//
//
//
//
//
//  )
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    paddingTop:150,
//  },
//  bigBlue: {
//      color: 'blue',
//      fontWeight: 'bold',
//      fontSize: 30,
//    },
//    red: {
//      color: 'red',
//    },
//});
//
//
//
//
////const styles = StyleSheet.create({
////  content: {
////    backgroundColor: "#F3F4F6",
////    paddingTop: StatusBar.currentHeight,
////    display: "flex",
////    flexGrow: 1,
////  },
////});
//
//
//
//
//
///* const [todo, settodo] = useState();
//    const [todoItems, settodoItems] = useState(["hello", "todo2", "valuye"]);
//
//    const handleAddtodo = () => {
//      if (todo === null) return;
//      Keyboard.dismiss();
//      settodoItems([...todoItems, todo]);
//      settodo(null);
//    };
//
//    const completetodo = (index) => {
//      let itemsCopy = [...todoItems];
//      itemsCopy.splice(index, 1);
//      settodoItems(itemsCopy);
//    };
//    return (
//      <View style={styles.content}>
//        <ScrollView
//          contentContainerStyle={{
//            flexGrow: 1,
//          }}
//          keyboardShouldPersistTaps="handled"
//        >
//          <View className="py-4">
//            <Text className="text-2xl">Today's todos</Text>
//            <View className="mt-5">
//              {todoItems.map((item, index) => {
//                return (
//                  <TouchableOpacity
//                    key={index}
//                    onPress={() => completetodo(index)}
//                  >
//                    <Todo key={index} text={item} />
//                  </TouchableOpacity>
//                );
//              })}
//            </View>
//          </View>
//        </ScrollView>
//
//        <KeyboardAvoidingView
//          behavior={Platform.OS === "ios" ? "padding" : "height"}
//          className="absolute bottom-0 space-x-3 py-5 px-3 w-full flex flex-row justify-around items-center"
//        >
//          <TextInput
//            className="flex-grow bg-gray-300 text-black p-4 text-base rounded-lg"
//            placeholder={"Write a todo"}
//            value={todo}
//            onChangeText={(text) => settodo(text)}
//          />
//          <TouchableOpacity onPress={() => handleAddtodo()}>
//            <View className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-400">
//              <Text className="text-3xl">+</Text>
//            </View>
//          </TouchableOpacity>
//        </KeyboardAvoidingView>
//      </View>
//    );
//    */