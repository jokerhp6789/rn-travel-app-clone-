import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const Bookmarks = ({ route }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Your Bookmarks </Text>
    </View>
  )
}

export default Bookmarks

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'black',
      height: SCREENHEIGHT,
      width: SCREENWIDTH,
      padding: 20,
  },

  header: {
    fontFamily: 'AlongSansExtraBold',
    color: 'white',
    fontSize: 30,
  }
})