import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { black, white, gray } from '../utils/colors'

import { connect } from 'react-redux'

import DeckViewDetails from './DeckViewDetails'

class Deck extends Component {

  static navigationOptions = {
    title: 'Deck',
  };

  render() {
    const { deck, navigation } = this.props
    const { title, questions } = deck

    return (
      <View style={styles.container}>
        <DeckViewDetails
          title={title}
          questions={questions}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: white }]}
          onPress={() => navigation.navigate('NewCard', { title: deck.title })}
        >
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: black }]}
          onPress={() => navigation.navigate('Quiz', { title })}
          disabled={questions.length === 0}
        >
          <Text style={{ color: white }}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
    borderWidth: 1,
    width: '50%'
  },
})

const mapStateToProps = ({ decks }, { navigation }) => {
  const { title } = navigation.state.params
  return {
    deck: decks[title]
  }
}

export default connect(mapStateToProps)(Deck)
