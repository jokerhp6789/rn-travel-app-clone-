import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

function HomeNav(){
    return(
        <HomeStack />
    );
}

const DrawerStack = () => {
    return (
        <Drawer.Navigator 
            screenOptions={{ headerShown: false }} 
            drawerContent={props => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name="HomePage" component={HomeNav} />
        </Drawer.Navigator>
    );
}

export default DrawerStack;