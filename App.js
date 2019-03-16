import React from 'react';
import { Provider} from 'react-redux';
import store from './store';

import TabNavigation from './screens/TabNavigation'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TabNavigation />
      </Provider>
    );
  }
}

export default App;

