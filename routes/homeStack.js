import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Welcome'
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
    headerStyle: { bachgroundColor: '#eee', height: 60 }
  }
})

export default HomeStack