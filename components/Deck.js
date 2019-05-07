import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { black, white, gray } from '../utils/colors'

import { connect } from 'react-redux'

class Deck extends Component {
  render() {
    const { deck } = this.props
    const { title, questions } = deck

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.number}>{questions.length} cards</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: white }]}
        >
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: black }]}
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
  title: {
    fontSize: 35,
    alignSelf: 'center'
  },
  number: {
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 20,
    color: gray
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
