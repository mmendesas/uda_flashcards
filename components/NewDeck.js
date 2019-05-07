import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { black, white } from '../utils/colors'

import { saveDeckTitle, saveData, clearStorage } from '../utils/api'
import { addDeck } from '../actions'

class NewDeck extends Component {

  state = {
    title: ''
  }

  submit = () => {
    const { dispatch, navigation } = this.props
    const { title } = this.state

    saveDeckTitle(title)
      .then((deck) => dispatch(addDeck(deck)))

    this.setState(() => ({ title: '' }))
    navigation.navigate('Decks')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>What is the title of your New Deck?</Text>
        <TextInput
          style={styles.input}
          placeholder='Deck title'
          value={this.state.title}
          onChangeText={(title) => this.setState(() => ({ title }))}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.submit}
        >
          <Text style={{ color: white }}>Submit</Text>
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
  message: {
    fontSize: 35,
    alignSelf: 'center',
    textAlign: 'center',
    width: 300
  },
  input: {
    borderWidth: 1,
    width: 200,
    paddingLeft: 10,
    margin: 20
  },
  button: {
    alignItems: 'center',
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
    width: 150,
    backgroundColor: black
  },
})

export default connect()(NewDeck)
