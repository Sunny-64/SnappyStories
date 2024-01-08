import React, { useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';

// Custom imports 
import { fetchUserData } from '../../../redux/user/userSlice';
import { AppDispatch } from '../../../redux/store';
import { Signout } from '../../../components';
import styles from './style';
 
export function DrawerContent(props:any) {

    const dispatch = useDispatch<AppDispatch>(); 
    const userData = useSelector((state:any) => state.user.data); 
    // console.log(userData);
    useEffect(() => {
        if(!userData){
            dispatch(fetchUserData()); 
        }
    }, [dispatch, userData]); 

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15, alignItems : 'center'}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>{userData?.username ?? "..."}</Title>
                                <Caption style={styles.caption}>{userData?.email ?? "..."}</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="fountain-pen-tip" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Write"
                            onPress={() => {props.navigation.navigate('WriteStory')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-multiple-plus" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Users"
                            onPress={() => {props.navigation.navigate('Users')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Bookmarks"
                            onPress={() => {props.navigation.navigate('Bookmark')}}
                        />
                        
                       
                         {/*
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        /> */}
                    </Drawer.Section>
                    {/* <Drawer.Section title="Preferences">
                        <TouchableRipple>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <Signout />
            </Drawer.Section>
        </View>
    );
}

