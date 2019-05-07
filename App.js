import React from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo'
import { createMaterialTopTabNavigator, createAppContainer, createBottomTabNavigator, createStackNavigator } from "react-navigation";

// redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { black, white } from './utils/colors'
import NewDeck from './components/NewDeck'
import DeckList from './components/DeckList';
import Deck from './components/Deck'

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
)

const TabNavigator = createMaterialTopTabNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    }
  }
}, {
    tabBarOptions: {
      activeTintColor: white,
      style: {
        height: 56,
        backgroundColor: black,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 0,
        shadowOpacity: 1
      }
    }
  })

const MainNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
  },
  Deck: {
    screen: Deck
  }
})

const MainContainer = createAppContainer(MainNavigator)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <MyStatusBar backgroundColor={black} />
          <MainContainer />
        </View>
      </Provider>
    );
  }
}
