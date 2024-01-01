import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { api } from './../../services/index'
import { Avatar } from 'react-native-paper';
import styles from './style';

const Users = ({navigation} : {navigation:any}) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.fetchUsers();
        setUsers(response.data.data);
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [])

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.cardContainer}>
      <View style={styles.imgAndUsernameContainer}>
        <Avatar.Image
          source={{
            uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
          }}
          size={50}
          style={{borderWidth : 1,}}
        />
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.buttonText}>Follow</Text>
        </TouchableOpacity>
      </View>
  
      <View style={styles.buttonContainer}>
        <Text style={styles.username}>{item?.username}</Text>
      
        <TouchableOpacity 
        style={styles.messageButton}
        // onPress={() => navigation.navigate("AppStack", {screen : 'Conversation'}, {params : {userId : item?._id}})}
        onPress={() => navigation.navigate("AppStack", { screen: 'Conversation', params: { userId: item?._id } })}
        >
          <Text style={[styles.buttonText, {minWidth : 60}]}>Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View>
      <FlatList
        data={users}
        key={2}
        numColumns={2}
        keyExtractor={(item, index) => item?._id?.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  )
}

export default Users