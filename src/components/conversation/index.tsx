// Conversation.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import styles from './style';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedConversationDetails } from '../../redux/chat/chatSlice';
import { api } from '../../services';

const Conversation = ({ conversation, navigation }: { conversation: any, navigation:any }) => {
    const currentUserId = useSelector((state:any) => state?.user?.data?._id)
    console.log("Conversation...........",conversation)
    const otherUserDetails = conversation?.participants?.filter((item:any) => item?._id !== currentUserId); 
    const dispatch = useDispatch(); 
    const onChatPress = async () => {
        const response = await api.fetchOrCreateConversation(otherUserDetails[0]?._id)
        dispatch(setSelectedConversationDetails(response?.data?.data[0])); 
        navigation.navigate('AppStack', {screen : 'Conversation'})
    }
    return (
        <TouchableOpacity
            onPress={onChatPress}
        >
            <View style={styles.container}>
                <Avatar.Image
                    source={{
                        uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                    }}
                    size={50}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.username}>{otherUserDetails[0]?.username}</Text>
                    <Text style={styles.lastMessage}>{"last Message yet to be implemented"}</Text>
                </View>
                
            </View>
        </TouchableOpacity>
    );
};

export default Conversation;
