import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Chat, Stories, Notifications } from '../../screens';
import { FadeInView } from '../../utils';

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
        <Chat {...props} />
    </FadeInView>
);
const FadeNotificationsScreen = (props: any, { navigation }: { navigation: any }) => (
    <FadeInView>
        <Notifications {...props} />
    </FadeInView>
);

const BottomTabNavigation = () => {
    const screenOptions = {
        unmountOnBlur: false,
        headerShown: false,
    };
    const sceneContainerStyle = {
        backgroundColor: '#95a5a6',
    };
    return (
        <Tab.Navigator {...{ screenOptions, sceneContainerStyle }}>
            <Tab.Screen name="Home" component={FadeHomeScreen} />
            <Tab.Screen name="Posts" component={FadeStoriesScreen} />
            <Tab.Screen name="Chat" component={FadeChatScreen} />
            <Tab.Screen name="Notifications" component={FadeNotificationsScreen} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation