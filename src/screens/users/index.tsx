import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import {api} from './../../services/index'

const Users = () => {
  const [users, setUsers] = useState([]); 
  useEffect(() => {
      const fetchData = async () => {
          try{
              const response = await api.fetchUsers(); 
              setUsers(response.data.data); 
          }
          catch(err){
            console.log(err); 
          }
      }
      fetchData(); 
  }, [])
  return (
    <View>
      <Text>Users...</Text>
      {users?.map((user:any, index:number) => (
          <View key={index}> 
              <Text>{user?.username}</Text>
          </View>
      ))}
    </View>
  )
}

export default Users