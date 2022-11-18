import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Directions from '../screens/Directions';
import Bookmarks from '../screens/Bookmarks';
import UserProfile from '../screens/Settings/UserProfile';
import DrawerStack from './DrawerStack';

const Tab = createBottomTabNavigator();

const DrawerNav = () => {
    return (
        <DrawerStack />
    );
}

function TabNav(){
  return (
    <Tab.Navigator
        initialRouteName='HomePage'
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {elevation: 0, borderTopWidth: 0, backgroundColor: 'black'},
            tabBarIcon: ({ focused, iconColor, iconName }) => {
                if (route.name === 'Home'){
                    iconColor = focused ? '#3a86fe' : 'white'
                    iconName = 'home'
                } else if (route.name === 'Directions'){
                    iconColor = focused ? '#3a86fe' : 'white'
                    iconName = 'compass'
                } else if (route.name === 'Bookmarks'){
                    iconColor = focused ? '#3a86fe' : 'white'
                    iconName = 'bookmark'
                } else {
                    iconColor = focused ? '#3a86fe' : 'white'
                    iconName = 'user'
                }
                return <Icon name={iconName} size={25} color={iconColor} />;
            },
            tabBarShowLabel: false,
        })}
    >
        <Tab.Screen name='HomePage' component={DrawerNav} />
        <Tab.Screen name='Directions' component={Directions} />
        <Tab.Screen name='Bookmarks' component={Bookmarks} />
        <Tab.Screen name='User' component={UserProfile} />
    </Tab.Navigator>
  )
}

export default TabNav