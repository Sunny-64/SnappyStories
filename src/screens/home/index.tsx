import { View, Text } from 'react-native'
import React from 'react'
import { Carousel, Header, HeaderWithLogo } from '../../components'

const Home = ({navigation} : {navigation : any}) => {
  return (
    <View>
        <HeaderWithLogo navigation={navigation}/>
        <Carousel />
    </View>
  )
}

export default Home