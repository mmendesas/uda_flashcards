import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions';
import { red } from '../utils/colors';
import DeckViewDetails from './DeckViewDetails'

class DeckList extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    getDecks()
      .then(decks => JSON.parse(decks))
      .then(decks => {
        dispatch(receiveDecks(decks))
      })
  }

  render() {
    const { decks, navigation } = this.props

    return (
      <ScrollView style={styles.container}>
        {
          typeof decks !== 'undefined' ? Object.keys(decks).map(key => (
            <TouchableOpacity
              style={styles.deckItem} key={key}
              onPress={() => navigation.navigate('Deck', { title: key })}
            >
              <DeckViewDetails
                title={decks[key].title}
                questions={decks[key].questions}
              />
            </TouchableOpacity>
          )) : (
              <View style={styles.container}>
                <Text style={[styles.title, { textAlign: "center", color: red }]}>
                  You don't have decks, please use the NewDeck tab to create a new flash card deck!
                </Text>
              </View>
            )
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },
  deckItem: {
    borderBottomWidth: 1,
    margin: 20
  },
  title: {
    fontSize: 25,
    alignSelf: 'center'
  }
})

const mapStateToProps = ({ decks }) => {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)
