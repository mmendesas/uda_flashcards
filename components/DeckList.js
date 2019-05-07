import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions';

class DeckList extends Component {

  state = {
    decks: []
  }

  componentDidMount() {
    const { dispatch } = this.props;
    getDecks()
      .then(decks => dispatch(receiveDecks(decks)))
      .then(({ decks }) => this.setState(() => ({ decks })))
  }

  render() {
    const { decks } = this.props

    return (
      <ScrollView style={styles.container}>
        {
          typeof decks !== 'undefined' && Object.keys(decks).map(key => (
            <TouchableOpacity style={styles.container} key={key}>
              <Text style={styles.title}>{decks[key].title}</Text>
              <Text style={styles.number}>{decks[key].questions.length} cards</Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
