import React from 'react'
import { View, Text, Button } from 'react-native'
import { globalStyles } from '../styles/globalStyles'

export default function Home({ navigation }) {
  // props.navigation = { navigation }

  const pressHandler = () => {
    //navigation.push('ReviewDetails')
    navigation.navigate('ReviewDetails')
  }


  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title='go to review dets' onPress={ pressHandler }/>
    </View>
  )
}
