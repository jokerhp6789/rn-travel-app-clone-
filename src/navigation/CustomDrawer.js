import { Image, ImageBackground, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../auth/AuthProvider';
import auth from '@react-native-firebase/auth'; 
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => { 
  const { user } = useContext(AuthContext);  
  
  const userInfo = () => {
        firestore()
        .collection('users')
        .doc(auth().currentUser.email)
        .get()
        .then(documentSnapshot => {
            console.log(documentSnapshot.data()); 
        });
    }

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: 'black'}}>
        <ImageBackground 
            source={require('../assets/images/dnavbg.jpg')}
            style={{ padding: 20 }}
        >
            <Image 
                source={require('../assets/images/icon.jpg')}
                style={{ width: 100, height: 100, borderRadius: 100, marginBottom: 10 }}
            />

            <TouchableOpacity onPress={userInfo} style={{ backgroundColor: 'red', height: 100, width: 100 }}/>
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})