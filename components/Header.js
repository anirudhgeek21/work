// components/Header.js

import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const Header = () => {
  return (
    <View style={[styles.header,{
    flexDirection: 'row',},
    ]}>

        <Image
            style={styles.logo}
            source={{
                uri:'https://echallan.parivahan.gov.in/www/img/gov.png',}}
        />
        <Text style={styles.headerText}>Govt. Billing and Invoicing system</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#94969E',
    padding: 20,
    alignItems: 'center',
    height: 150,
    justifyContent: 'space-around',

  },
  logo: {
    height: 120,
    width: 120,

  },
  headerText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default Header;
