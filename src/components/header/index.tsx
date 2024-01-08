// import { View, Text, TouchableOpacity, Image } from 'react-native'
// import React from 'react'
// import styles from './style'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import { logo } from '../../assets/png'
// import { PURPLE_ACCENT } from '../../constants/colors'
// import { Divider } from 'react-native-paper'

// const Header = ({ navigation, title }: { navigation: any, title : string }) => {
//     return (
//         <View style={styles.container}>
//             <View style={styles.logoContainer}>
//                 <TouchableOpacity
//                     onPress={() => navigation.goBack()}
//                     style={styles.backHandler}
//                 >
//                     <FontAwesome5 name='arrow-circle-left' size={22} color={PURPLE_ACCENT} />
//                 </TouchableOpacity>
//               <View style={styles.titleContainer}>
//               <Text style={styles.title}>{title}</Text>
//               </View>
//             </View>
//             <Divider bold/>
//         </View>

//     )
// }

// export default Header


import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Avatar } from 'react-native-paper';
import { logo } from '../../assets/png';
import { Appbar } from 'react-native-paper'
import styles from './style';

const Header = ({ navigation, title }: { navigation: any, title: string }) => {
    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <Appbar.Header elevated
           
        >
            <Appbar.BackAction onPress={handleBackPress} />
            <Appbar.Content title={title} />

                <Avatar.Image
                    source={{ uri: 'https://user-image-url.com/user.png' }}
                    size={40}
                    style={styles.avatar}
                    onTouchStart={() => navigation.openDrawer()}
                    // onPress={() => navigation.openDrawer()}
                />
        </Appbar.Header>
    );
};

export default Header;
