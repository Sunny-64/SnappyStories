import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabNavigation from '../tab';
import { Profile, WriteStory, Users, Bookmarks } from '../../screens';
import { OFF_WHITE } from '../../constants/colors';
import { DrawerContent } from './drawerContent';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator 
    drawerContent={(props) => <DrawerContent {...props} />}
    screenOptions={{
        headerShown : false, 
        drawerPosition : 'right',
        sceneContainerStyle : {
          backgroundColor : OFF_WHITE
        }
    }}
    
    initialRouteName='Tab'
    >
        <Drawer.Screen name='Profile' component={Profile}/>
        <Drawer.Screen name='Tab' component={BottomTabNavigation} options={{title : 'Home'}}/>
        <Drawer.Screen name='WriteStory' component={WriteStory}/>
        <Drawer.Screen name='Users' component={Users}/>
        <Drawer.Screen name='Bookmark' component={Bookmarks}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigation