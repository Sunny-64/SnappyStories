import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { api } from '../../services';
import { Conversation } from '../../components';
import { fetchConversations, setConversations } from '../../redux/chat/chatSlice';
import { AppDispatch } from '../../redux/store';
import socket from '../../sockets';

const Chats = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch<AppDispatch>();
  const conversations = useSelector((state: any) => state?.chat?.conversations);

  useEffect(() => {
    socket.on('newConversation', (data) => {
      dispatch(setConversations(data));
    });

    return () => {
      socket.off("newConversation")
    }
  }, [])

  useEffect(() => {
    dispatch(fetchConversations());
  }, [])

  return (
    <View >
      <FlatList
        data={conversations}
        keyExtractor={(item) => item._id?.toString()}
        renderItem={({ item }) => (
          <Conversation conversation={item} navigation={navigation} />
        )}
      />
    </View>
  )
}

export default Chats