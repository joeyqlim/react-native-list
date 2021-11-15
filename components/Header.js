import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    padding: 15,
    backgroundColor: '#2E3440',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
    marginTop: 35,
  },
});

export default Header;
