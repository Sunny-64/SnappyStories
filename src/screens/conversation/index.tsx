import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'

// Custom imports
import styles from './style';
import { Avatar } from 'react-native-paper';

const Conversation = ({ navigation, route }: { navigation: any, route: any }) => {
  console.log("route params in conversaton ::: ", route);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello!', sender: 'other' },
    { id: 2, text: 'Hi there!', sender: 'self' },
    // Add more messages as needed
  ]);

  const handleSend = () => {
    if (message.trim() === '') {
      return; // Don't send empty messages
    }

    const newMessage = { id: messages.length + 1, text: message, sender: 'self' };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => console.log('Back pressed')}>
            {/* Add back button icon or text as needed */}
            <Text style={styles.backButton}>Back</Text>
          </TouchableOpacity>
          <View style={styles.userInfo}>
            <Avatar.Image
              source={{
                uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
              }}
              size={50}
              style={{ borderWidth: 1, }}
            />
            <Text style={styles.username}>Username</Text>
          </View>
        </View>

        {/* Body */}
        <View style={styles.body}>
          {messages.map((msg) => (
            <View
              key={msg.id}
              style={[
                styles.messageContainer,
                { alignSelf: msg.sender === 'self' ? 'flex-end' : 'flex-start' },
              ]}
            >
              <Text style={styles.messageText}>{msg.text}</Text>
            </View>
          ))}
        </View>

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