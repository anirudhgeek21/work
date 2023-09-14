import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Pressable,
  Text,
  View,
} from 'react-native';


import Body from './components/Body.js';
import Footer from './components/Footer.js';
import Subfooter from './components/Subfooter.js';
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import Makebill from './Makebill.js';







const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <Header />
      <Nav />
      <View>
            <Text style={styles.bodyText}>Do your selections !!</Text>
            <Pressable style={styles.button1} onPress={() => navigation.navigate('Makebill')}>
                   <Text style={styles.text}>Make a Custom Bill</Text>
                   <Text style={styles.text}>and</Text>
                   <Text style={styles.text}>generate its invoice</Text>
             </Pressable>

            <Pressable style={styles.button2} onPress={() => alert('Button 2 pressed')}>
                         <Text style={styles.text}>Make a Custom Bill</Text>
                         <Text style={styles.text}>and</Text>
                         <Text style={styles.text}>generate its invoice</Text>
            </Pressable>
      </View>
      <Subfooter />
      <Footer />

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
  bodyText: {
    fontSize: 20,
    marginBottom: 20,


  },
  button1:{
    backgroundColor:"black",
    height:190,
    width:190,
    padding:20,
    paddingTop:65,
    alignItems: 'center',



  },
  button2:{
      marginTop: 20,
      backgroundColor:"black",
      height:190,
      width:190,
      padding:20,
      paddingTop:65,
      alignItems: 'center',


    }
});


export default Home;