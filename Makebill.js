// import { StatusBar } from "expo-status-bar";
 import { useState } from "react";
 import {
   KeyboardAvoidingView,
   Text,
   View,
   ScrollView,
   TextInput,
   TouchableOpacity,
   StatusBar,
   Platform,
   StyleSheet,
   Keyboard,
 } from "react-native";
 import Todo from "./components/Todo.js";
 import Footer from './components/Footer.js';
 import Subfooter from './components/Subfooter.js';
 import Nav from './components/Nav.js';
 import Header from './components/Header.js'

 const Makebill = () => {
   const [todo, settodo] = useState();
   const [todoItems, settodoItems] = useState(["hello", "todo2", "valuye"]);

   const handleAddtodo = () => {
     if (todo === null) return;
     Keyboard.dismiss();
     settodoItems([...todoItems, todo]);
     settodo(null);
   };

   const completetodo = (index) => {
     let itemsCopy = [...todoItems];
     itemsCopy.splice(index, 1);
     settodoItems(itemsCopy);
   };
   return (
     <View style={styles.content}>
       <Header />
       <Nav />
       <ScrollView
         contentContainerStyle={{
           flexGrow: 1,
         }}
         keyboardShouldPersistTaps="handled"
       >
         <View className="py-4">
           <Text className="text-2xl">Today's todos</Text>
           <View className="mt-5">
             {todoItems.map((item, index) => {
               return (
                 <TouchableOpacity
                   key={index}
                   onPress={() => completetodo(index)}
                 >
                   <Todo key={index} text={item} />
                 </TouchableOpacity>
               );
             })}
           </View>
         </View>
       </ScrollView>

       <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
         className="absolute bottom-0 space-x-3 py-5 px-3 w-full flex flex-row justify-around items-center"
       >
         <TextInput
           className="flex-grow bg-gray-300 text-black p-4 text-base rounded-lg"
           placeholder={"Write a todo"}
           value={todo}
           onChangeText={(text) => settodo(text)}
         />
         <TouchableOpacity onPress={() => handleAddtodo()}>
           <View className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-400">
             <Text className="text-3xl">+</Text>
           </View>
         </TouchableOpacity>
       </KeyboardAvoidingView>
       <Subfooter />
       <Footer />
     </View>
   );
 }

 const styles = StyleSheet.create({
   content: {
     backgroundColor: "#F3F4F6",
     paddingTop: StatusBar.currentHeight,
     display: "flex",
     flexGrow: 1,
   },
 });

 export default Makebill;