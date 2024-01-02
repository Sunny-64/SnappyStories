import { View, Text } from 'react-native'
import React from 'react'
import { DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { logout as chatLogout } from '../../redux/chat/chatSlice';
import { logout as userLogout } from '../../redux/user/userSlice';
import { logout as authLogout } from '../../redux/auth/authSlice';

const Signout = () => {
  const dispatch = useDispatch();

  const signOut = () => {
    console.log('signout...');
    setTimeout(() => {
      dispatch(chatLogout());
      dispatch(userLogout());
      dispatch(authLogout());
    }, 1000);
  }

  return (
    <DrawerItem
      icon={({ color, size }) => (
        <Icon
          name="exit-to-app"
          color={color}
          size={size}
        />
      )}
      label="Sign Out"
      onPress={signOut}
    />
  )
}

export default Signout