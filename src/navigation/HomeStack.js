import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Boseman from '../screens/Home/Boseman';
import Rajasthan from '../screens/Home/Rajasthan';
import TianTan from '../screens/Home/TianTan';
import SierraNevada from '../screens/Home/SierraNevada';
import Osaka from '../screens/Home/Osaka';
import Search from '../screens/Home/Search';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='HomePage' component={Home} />
      <Stack.Screen name='Boseman' component={Boseman} />
      <Stack.Screen name='Rajasthan' component={Rajasthan} />
      <Stack.Screen name='TianTan' component={TianTan} />
      <Stack.Screen name='SierraNevada' component={SierraNevada} />
      <Stack.Screen name='Osaka' component={Osaka} />
      <Stack.Screen name='SearchPage' component={Search} />
    </Stack.Navigator>
  )
}

export default HomeStack