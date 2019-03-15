import { 
  createBottomTabNavigator, 
  createAppContainer, 
  createStackNavigator } from 'react-navigation';

import WelcomeScreen from './WelcomeScreen';
import AuthScreen from './AuthScreen';
import ReviewScreen from './ReviewScreen';
import SettingsScreen from './SettingsScreen';
import MapScreen from './MapScreen';
import DeckScreen from './DeckScreen';



const TabNavigation = createBottomTabNavigator({
  Welcome: {screen: WelcomeScreen},
  Auth: { screen: AuthScreen},
  Main: {
    screen: createBottomTabNavigator({
      Map: {screen: MapScreen},
      Deck: { screen: DeckScreen},
      Review: { screen: createStackNavigator({
        screen: ReviewScreen,
        Settings: { screen: SettingsScreen}
      })}
    })
  }
})
export default createAppContainer(TabNavigation)
