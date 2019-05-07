import React from 'react';
import { View } from 'react-native';

// redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import Deck from './components/Deck'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <Deck />
        </View>
      </Provider>
    );
  }
}
