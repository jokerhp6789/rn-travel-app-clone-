import 'react-native-gesture-handler';

import { View, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchResults from '../../components/SearchResults';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
    const navigation = useNavigation();
    const [location, setLocation] = useState (null);

    const checkNav = () => {
        if (location) {
            navigation.navigate("Map", {
                location,
            })
        }
    }
        
    useEffect( () => {
        checkNav();
    }, [location]);

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete 
          placeholder='Enter destination location'
          suppressDefaultStyles
          enablePoweredByContainer={false}
        //   currentLocation={true}
        //   currentLocationLabel= "Current Location"
          enableHighAccuracyLocation={true}
          isRowScrollable={true}
          onPress={(data, details = null) => {
              setLocation({data, details});
          }}
          styles={{
              textInput: styles.textInput,
              container: {
                  position: "absolute",
                  top: 25,
                  left: 10,
                  right: 10,
              },
              listView: {
                  position: "absolute",
                    top: 125,
              },
              separator: {
                  backgroundColor: "#d3d3d3",
                  height: 1.5
              },
          }}
          fetchDetails
          query={{
              key: 'AIzaSyDXad8EdmIrRRRf4ihKuWVlRrWcC5wSGus',
              language: "en",
          }}
          renderRow={(data) => <SearchResults data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
      />

      <View style={styles.iconContainer}>  
        <View style={styles.location}>
            <Icon name={'location-sharp'} size={20} color={'red'} />
        </View>
      </View>

    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: '100%',
        flex: 1,
        backgroundColor: 'black'
    },

    textInput: {
        padding: 10,
        top: 10,
        backgroundColor: "black",
        borderWidth:2,
        borderColor:"white",
        fontFamily: "AlongSansSemiBold",
        marginLeft: 20,
        height: 60,
        fontSize: 16,
        color: "white",
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },

    location: {
        top:45,
        left: -2
    },
})