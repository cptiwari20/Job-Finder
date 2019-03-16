import { 
  createBottomTabNavigator, 
  createAppContainer, 
  createStackNavigator  } from 'react-navigation';

import WelcomeScreen from './WelcomeScreen';
import AuthScreen from './AuthScreen';
import ReviewScreen from './ReviewScreen';
import SettingsScreen from './SettingsScreen';
import MapScreen from './MapScreen';
import DeckScreen from './DeckScreen';



const TabNavigation = createBottomTabNavigator ({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      tabBarVisible: false,
    }
  },
  Auth: { 
    screen: AuthScreen,  
    navigationOptions: {
    tabBarVisible: false,
  }
},
  Main: {
    screen: createBottomTabNavigator({
      Map: {screen: MapScreen},
      Deck: { screen: DeckScreen},
      Review: { screen: createStackNavigator({
        screen: ReviewScreen,
        Settings: { screen: SettingsScreen}
      })}
    }),
    navigationOptions: {
      tabBarVisible: false }
  }
},{
  navigationOptions: {
    tabBarVisible: false,
  },
  lazy: true
})

export default createAppContainer(TabNavigation)
