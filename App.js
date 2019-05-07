import React from 'react';
import { View } from 'react-native';

// redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import Deck from './components/Deck'
import Quiz from './components/Quiz'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <Quiz />
        </View>
      </Provider>
    );
  }
}
