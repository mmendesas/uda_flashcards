import React from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo'
import { createAppContainer, createStackNavigator, createMaterialTopTabNavigator } from "react-navigation";
import { setLocalNotification } from './utils/helpers'

// redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { black, white } from './utils/colors'
import NewDeck from './components/NewDeck'
import DeckList from './components/DeckList';
import Deck from './components/Deck'
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'

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
    },
    bounces: false
  })

const headerStyle = {
  headerStyle: {
    backgroundColor: black,
  },
  headerTintColor: white,
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}

const MainNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      tabBarLabel: 'Home',
      title: 'FlashCards',
      headerTitleStyle: {
        textAlign: 'center'
      },
      ...headerStyle,
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      tabBarLabel: 'Deck',
      ...headerStyle
    }
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      tabBarLabel: 'New Card',
      ...headerStyle
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      tabBarLabel: 'Quiz',
      ...headerStyle
    }
  }
})

const MainContainer = createAppContainer(MainNavigator)

export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification()
  }

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
