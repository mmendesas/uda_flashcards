import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getDeck } from '../utils/api'
import { gray, white, black, green, red } from '../utils/colors'

class Quiz extends Component {

  state = {
    title: '',
    questions: [],
    questionIdx: 0,
    cardFlipped: false
  }

  componentDidMount() {
    const title = 'React'

    getDeck(title).then((deck) => {
      this.setState({
        title: deck.title,
        questions: deck.questions
      })
    })
  }

  render() {
    const { title, questions, cardFlipped, questionIdx } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.qtyText}>{`${questionIdx}/${questions.length}`}</Text>

        <View style={styles.container}>

          <View>
            {
              questions.length > 0 &&
              (
                <Text style={styles.message}>
                  {cardFlipped
                    ? questions[questionIdx].answer
                    : questions[questionIdx].question}
                </Text>
              )
            }
            <Text
              style={styles.flipMsg}
              onPress={() => this.setState((state) => ({
                ...state,
                cardFlipped: !cardFlipped
              }))}>
              {cardFlipped ? 'Question' : 'Answer'}
            </Text>
          </View>
          <View style={{ marginTop: 150 }}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: green }]}
              onPress={this.onPress}
            >
              <Text style={styles.buttonText}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: red }]}
            >
              <Text style={styles.buttonText}>Incorrect</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  flipMsg: {
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 20,
    color: red
  },
  button: {
    alignItems: 'center',
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
    width: 150
  },
  buttonText: {
    color: white,
    fontWeight: 'bold'
  },
  qtyText: {
    marginTop: 20,
    marginLeft: 10,
  }
})

export default Quiz;
