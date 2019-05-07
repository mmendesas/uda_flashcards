import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { black, white } from '../utils/colors'

class NewCard extends Component {

  state = {
    question: '',
    answer: ''
  }

  submit = () => {
    console.log('submit', this.state)
    this.setState(() => ({ title: '' }))
  }

  isDisabled = () => {
    return this.state.question === '' || this.state.answer === ''
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Type question here'
          value={this.state.question}
          onChangeText={(question) => this.setState(() => ({ question }))}
        />

        <TextInput
          style={styles.input}
          placeholder='Type answer here'
          value={this.state.answer}
          onChangeText={(answer) => this.setState(() => ({ answer }))}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.submit}
          disabled={this.isDisabled()}
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
  input: {
    borderWidth: 1,
    width: 250,
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

export default NewCard
