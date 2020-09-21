import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { Image } from 'react-native'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import Header from '../shared/header'

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        // Custom header
        headerTitle: () => <Header navigation={navigation} title='GameZone' />,
        headerBackground: () => <Image source={require('../assets/game_bg.png')} style={{height:60}}/>
      }
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details'
    }
  }
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { bachgroundColor: '#eee', height: 60 },
  }
})

export default HomeStack