import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabNavigation from '../tab';
import { Profile, WriteStory, Users } from '../../screens';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{
        headerShown : false, 
    }}
    initialRouteName='Tab'
    >
        <Drawer.Screen name='Profile' component={Profile}/>
        <Drawer.Screen name='Tab' component={BottomTabNavigation} options={{title : 'Home'}}/>
        <Drawer.Screen name='WriteStory' component={WriteStory}/>
        <Drawer.Screen name='Users' component={Users}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigation