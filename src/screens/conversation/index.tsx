import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// Custom imports
import styles from './style';
import { Avatar, Divider } from 'react-native-paper';
import { PURPLE_ACCENT } from '../../constants/colors';
import { api } from './../../services';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectConversationMessages } from '../../redux/chat/chatSlice';

const Conversation = ({ navigation, route }: { navigation: any, route: any }) => {

  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  //dummy messages
  // const [msgs, setMsgs] = useState([
  //   { _id: 1, message: 'Hello!', author: 'other' },
  //   { _id: 2, message: 'Hi there!', author: 'self' },
  //   { _id: 11, message: 'Hello!', author: 'other' },
  //   { _id: 3, message: 'Hi there!', author: 'self' },
  //   { _id: 4, message: 'Hi there!', author: 'self' },
  //   { _id: 5, message: 'Hi there!', author: 'self' },
  //   { _id: 10, message: 'Hello!', author: 'other' },
  //   { _id: 6, message: 'Hi there!', author: 'self' },
  //   { _id: 7, message: 'Hi there!', author: 'self' },
  //   { _id: 8, message: 'Hi there!', author: 'self' },
  //   { _id: 12, message: 'Hello!', author: 'other' },
  //   { _id: 9, message: 'Hi there!', author: 'self' },
  //   // Add more messages as needed
  // ]);

  const currentUserId = useSelector((state: any) => state?.user?.data?._id)
  const selectedChat = useSelector((state: any) => state.chat?.selectedConversation?.conversationDetails);

  const otherUserDetails = selectedChat?.participants?.filter((item: any) => item?._id !== currentUserId);
  const messages = useSelector((state: any) => state?.chat?.selectedConversation?.messages);

  useEffect(() => {
    const fetchAndSetMessages = async () => {
      if (selectedChat) {
        const response = await api.fetchMessagesOfAConversation(selectedChat?._id);
        dispatch(setSelectConversationMessages(response?.data?.data));
      }
    }
    fetchAndSetMessages();
  }, [])
  const handleSend = async () => {
    console.log("send")
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.logoContainer}>
          <TouchableOpacity
            style={styles.backHandler}
            onPress={() => navigation.goBack()}
          >
            <FontAwesome5 name='arrow-circle-left' size={22} color={PURPLE_ACCENT} />
          </TouchableOpacity>
          <View style={styles.userInfo}>
            <Avatar.Image
              source={{
                uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
              }}
              size={40}
            />
            <Text style={styles.username}>{otherUserDetails[0]?.username}</Text>
          </View>
        </View>

        <Divider bold />
        {/* Body */}
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.body}>
            {messages?.map((msg: any) => (
              <View
                key={msg?._id}
                style={[
                  styles.messageContainer,
                  { alignSelf: msg?.author === currentUserId ? 'flex-end' : 'flex-start' },
                ]}
              >
                <Text style={styles.messageText}>{msg?.message}</Text>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Footer */}
        <View style={styles.footer}>
          <TextInput
            style={styles.input}
            placeholder="Type your message..."
            value={message}
            onChangeText={(text) => setMessage(text)}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Conversation