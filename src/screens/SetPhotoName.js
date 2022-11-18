import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import React, { useState, useContext, createRef } from 'react';
import IconContainer from '../components/IconContainer';
import SignupInfo from '../components/SignupInfo';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../auth/AuthProvider';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ImagePicker from 'react-native-image-crop-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const SetPhotoName = ({ route }) => {
  const { email, password } = route.params;
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pinimg.com/originals/21/1b/25/211b2554a3b2f53e4db9f4f8c04263a9.png');
  const { signup, user } = useContext(AuthContext);

  // const userMail = () => {
  //   email: email;
  //   console.log(email);
  // };

  const addUser = () => {
    firestore()
    .collection('users')
    .add({
      name: name,
      email: email,
    })
    .then(() => {
      console.log(name, email);
    })
  };

  const handleSignup = () => {
    signup(email, password);
    addUser();
  };

  const takePhoto = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
    })
    .then(image => {
      setImage(image.path);
    })
  };

  const choosePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    })
    .then(image => {
      setImage(image.path);
    })
  };

   renderInner = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.panelTitle}> Upload a photo </Text>
        <Text style={styles.panelSubtitle}> Choose a profile picture </Text>
      </View>

      <TouchableOpacity style={styles.panelButton} onPress={takePhoto}>
          <Text style={styles.panelButtonText}> Take a photo </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.panelButton} onPress={choosePhoto}>
          <Text style={styles.panelButtonText}> Choose from gallery </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.panelButton} onPress={() => this.bs.current.snapTo(1)}>
          <Text style={styles.panelButtonText}> Cancel </Text>
      </TouchableOpacity>
    </View>
  );

   renderHeader = () => (
    <View style={styles.header}>
      <View style={{ alignItems: 'center' }}>
        <View style={styles.panelHandle}></View>
      </View>
    </View>
  );

  bs = React.createRef();
  fall = new Animated.Value(1);

  return (
    <View>
      <BottomSheet 
        ref={this.bs}
        snapPoints={[315, 0]}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
      />
      <View style={styles.upper}>
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <TouchableOpacity>
            <IconContainer iconName='arrow-left' />
          </TouchableOpacity>

          <Text style={styles.signupText}> Profile </Text>
        </View>
      </View>

      <View style={styles.middle}>
        <View style={{ top: -50, alignSelf: 'center' }}>
          <Text style={styles.infoText}> Add a profile picture </Text>
          <View style={{ alignSelf: 'center' }}>
            <TouchableOpacity style={styles.IconContainer}  onPress={() => this.bs.current.snapTo(0)}>
              <Image
                source={{ uri: image }}
                style={{ height: '100%', width: '100%', borderRadius: 15 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        
        <SignupInfo 
          infoTitle='Name' 
          placeholder='Enter your full name' 
          autoComplete='name' 
          value={name}
          onChangeText={userFullName => setName(userFullName)}
        />
      </View>

      <View style={styles.lower}>
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}> Finish </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text style={styles.loginText}> Already have an account? </Text>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.loginText,  {fontFamily: 'AlongSansExtraBold'}]}> Log in </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SetPhotoName

const styles = StyleSheet.create({
  upper: {
    backgroundColor: 'black',
    height: SCREENHEIGHT / 8,
    width: SCREENWIDTH,
    padding: 20
  },

  middle: {
    backgroundColor: 'black',
    height: SCREENHEIGHT - (SCREENHEIGHT / 8) - (SCREENHEIGHT / 2.5),
    width: SCREENWIDTH,
    padding: 20,
  },

  lower: {
    backgroundColor: 'black',
    height: SCREENHEIGHT / 2.5,
    width: SCREENWIDTH,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  signupText: {
    fontFamily: 'AlongSansExtraBold',
    marginLeft: 10,
    fontSize: 30,
    color: 'white'
  },

  infoText: {
    fontFamily: 'AlongSansMedium',
    fontSize: 20,
    color: 'white',
    marginTop: 50,
  },

  IconContainer: {
    backgroundColor: 'black',
    width: SCREENHEIGHT/5,
    alignItems: 'center',
    justifyContent: 'center',
    height: SCREENHEIGHT/5,
    marginTop: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'gray',
  },
  
  button: {
    backgroundColor: 'white',
    width: 0.7 * SCREENWIDTH,
    height: 0.07 * SCREENHEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    flexDirection: 'row',
  },

  panelButton: {
    backgroundColor: 'black',
    width: 0.9 * SCREENWIDTH,
    height: 0.055 * SCREENHEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 15

  },

  panelButtonText: {
    fontFamily: 'AlongSansExtraBold',
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  
  buttonText: {
    fontFamily: 'AlongSansExtraBold',
    fontSize: 18,
    color: 'black',
    alignSelf: 'center'
  },

  loginText: {
    fontFamily: 'AlongSansMedium',
    fontSize: 15,
    color: 'white',
    marginTop: 20,
  },

  panel: {
    padding: 20,
    backgroundColor: 'white',
  },

  panelTitle: {
    fontSize: 27,
    height: 35,
    fontFamily: 'AlongSansSemiBold',
    color: 'black',
  },

  panelSubtitle: {
    fontSize: 14,
    color: 'black',
    height: 30,
    marginBottom: 10,
    fontFamily: 'AlongSansMedium',
  },

  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'black',
    marginBottom: 10,
  },

  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
})