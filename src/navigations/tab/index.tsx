import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

// Custom imports 
import { Home, Chats, Stories, Notifications } from '../../screens';
import { FadeInView } from '../../utils';
import styles from './style';
import { OFF_WHITE, PURPLE_ACCENT, WHITE } from '../../constants/colors';

const Tab = createBottomTabNavigator();

const FadeHomeScreen = (props: any, { navigation }: { navigation: any }) => (
    <FadeInView>
        <Home {...props} />
    </FadeInView>
);
const FadeStoriesScreen = (props: any, { navigation }: { navigation: any }) => (
    <FadeInView>
        <Stories {...props} />
    </FadeInView>
);
const FadeChatScreen = (props: any, { navigation }: { navigation: any }) => (
    <FadeInView>
        <Chats {...props} />
    </FadeInView>
);
const FadeNotificationsScreen = (props: any, { navigation }: { navigation: any }) => (
    <FadeInView>
        <Notifications {...props} />
    </FadeInView>
);

const BottomTabNavigation = () => {
    const sceneContainerStyle = {
        backgroundColor: OFF_WHITE,
    };
    return (
        <Tab.Navigator {...{sceneContainerStyle }}
            screenOptions={({route}) => ({
                unmountOnBlur : false, 
                headerShown : false,
                tabBarShowLabel : false,
                tabBarStyle : {
                    backgroundColor : PURPLE_ACCENT,
                    position: 'absolute',
                    bottom: 10,
                    left: '2.5%', // Adjust the left value to center the tab bar horizontally
                    right: '2.5%', // Adjust the right value to center the tab bar horizontally
                    borderRadius : 10
                },
                tabBarIcon : ({focused, color, size}) => {
                    let iconName:string = '';
                    if (route.name === 'Home') {
                        iconName = focused
                          ? 'house-chimney-window'
                          : 'house-chimney-window';
                    } 
                    if (route.name === 'Notifications') {
                    iconName = focused ? 'bell' : 'bell';
                    }
                    if (route.name === 'Posts') {
                    iconName = focused ? 'pager' : 'pager';
                    }
                    if (route.name === 'Chat') {
                    iconName = focused ? 'rocketchat' : 'rocketchat';
                    }
                    // return <FontAwesome6 name={iconName} size={20} solid color={focused ? 'blue' : 'green'}/>;
                    return (
                        <View style={[styles.tabNavContainer, focused && styles.active]}>
                            {/* adjust the sizing for responsiveness */}
                          <FontAwesome6 name={iconName} color={WHITE} solid size={22} />
                        </View>
                      )
                }
            })}
        >
            <Tab.Screen name="Home" component={FadeHomeScreen} />
            <Tab.Screen name="Posts" component={FadeStoriesScreen} />
            <Tab.Screen name="Chat" component={FadeChatScreen} />
            <Tab.Screen name="Notifications" component={FadeNotificationsScreen} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation