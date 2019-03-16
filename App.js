import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider} from 'react-redux';
import store from './store';

import TabNavigation from './screens/TabNavigation'

class App extends React.Component {
  render() {
    return (
      <Provider>
        <TabNavigation />
      </Provider>
    );
  }
}

export default App;

