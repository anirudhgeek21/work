

import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const Footer = () => {
  return (
    <View style={[styles.footer,{
        flexDirection: 'row',},
        ]}>
        <Image
                  style={styles.logo}
                  source={{
                  uri:'https://echallan.parivahan.gov.in/www/img/gov.png',}}
              />
      <View>
        <Text style={styles.headerText}>Ministry Of Commerce</Text>
        <Text style={styles.headerText1}>Govt. Of India</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 100,
    backgroundColor: '#94969E',
    padding: 10,
    paddingLeft: 180,
    paddingRight: 180,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  logo: {
      height: 60,
      width: 60,

    },
  footerText: {
    fontSize: 16,
    color: '#fff',
  },
  headerText1: {
    alignItems: 'center',
    paddingTop: 5,
    paddingLeft: 30,
  },
});

export default Footer;