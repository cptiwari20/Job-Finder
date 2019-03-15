import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import WelcomeScreen from './WelcomeScreen';
import AuthScreen from './AuthScreen';

const TabNavigation = createBottomTabNavigator({
  Welcome: {screen: WelcomeScreen},
  Auth: { screen: AuthScreen},
  main: {
    screen: createBottomTabNavigator({
      Welcome: {screen: WelcomeScreen},
      Auth: { screen: AuthScreen}
    })
  }
})
export default createAppContainer(TabNavigation)
