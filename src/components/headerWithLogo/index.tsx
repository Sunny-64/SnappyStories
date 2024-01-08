import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { logo } from '../../assets/png'
import { Avatar } from 'react-native-paper'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import styles from './style'

const HeaderWithLogo = ({navigation} : {navigation : any}) => {
    const handleBackPress = () => {
        navigation.goBack();
    };
    return (
        <View 
            style={styles.headerContainer}
        >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                {/* {showBackButton && (
                    <TouchableOpacity onPress={handleBackPress}>
                        <FontAwesome5 name="arrow-left" size={24} color="black" />
                    </TouchableOpacity>
                )} */}

                {/* Your Logo */}
                <Image
                    source={logo}
                    style={{ width: 100, height: 50 }}
                />

                {/* User Image */}
                <Avatar.Image
                    source={{ uri: 'https://user-image-url.com/user.png' }}
                    size={40}
                    onTouchStart={() => navigation.openDrawer()}
                />
            </View>
        </View>
    )
}

export default HeaderWithLogo