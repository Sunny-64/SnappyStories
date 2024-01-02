import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { api } from '../../services';
import { Conversation, Header } from '../../components';
import { fetchConversations, setConversations } from '../../redux/chat/chatSlice';
import { AppDispatch } from '../../redux/store';
import socket from '../../sockets';

const Chats = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch<AppDispatch>();
  const conversations = useSelector((state: any) => state?.chat?.conversations);
  
  useEffect(() => {
    socket.on('newConversation', (data) => {
      console.log(data); 
      dispatch(setConversations(data));
    });

    return () => {
      socket.off("newConversation")
    }
  }, [])

  useEffect(() => {
    dispatch(fetchConversations());
  }, [dispatch])

  return (
    <View >
      <Header navigation={navigation} title='Chats'/>
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