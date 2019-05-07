import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions';
import { red } from '../utils/colors';

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
              <Text style={styles.title}>{decks[key].title}</Text>
              <Text style={styles.number}>{decks[key].questions.length} cards</Text>
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
  },
  number: {
    alignSelf: 'center',
    marginBottom: 20
  }
})

const mapStateToProps = ({ decks }) => {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)
