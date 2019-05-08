import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { getDeck } from '../utils/api'
import { white, black, green, red } from '../utils/colors'

class Quiz extends Component {

  state = {
    questions: [],
    questionIdx: 0,
    cardFlipped: false,
    correct: 0,
    incorrect: 0
  }

  static navigationOptions = {
    title: 'Quiz',
  };

  componentDidMount() {
    const { title } = this.props.navigation.state.params
    getDeck(title).then((deck) => {
      this.setState({
        questions: deck.questions
      })
    })
  }

  answer = (answer) => {
    const { questionIdx, correct, incorrect } = this.state;

    this.setState(() => ({
      questionIdx: questionIdx + 1,
      correct: correct + (answer ? 1 : 0),
      incorrect: incorrect + (!answer ? 1 : 0),
      cardFlipped: false
    }))
  }

  returnToDeck = () => {
    const { navigation } = this.props;
    const { title } = navigation.state.params
    navigation.navigate('Deck', { title })
  }

  resetQuiz = () => {
    this.setState({
      correct: 0,
      incorrect: 0,
      questionIdx: 0
    })
  }

  render() {
    const { cardFlipped, questions, questionIdx, correct } = this.state;

    if (questions.length === questionIdx) {
      return (
        <View style={styles.container}>
          <Text style={[styles.message, { color: black, marginBottom: 20 }]}>Congratulations, you completed this quiz!</Text>

          <Text>Your score is:
            <Text style={styles.score}>
              {(correct / questions.length * 100).toFixed(2)}%
            </Text>
          </Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: black }]}
            onPress={this.resetQuiz}
          >
            <Text style={styles.buttonText}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: green }]}
            onPress={this.returnToDeck}
          >
            <Text style={styles.buttonText}>Go To Deck</Text>
          </TouchableOpacity>
        </View>
      )
    }

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
          <View>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: green }]}
              onPress={() => this.answer(true)}
            >
              <Text style={styles.buttonText}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: red }]}
              onPress={() => this.answer(false)}
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
  },
  score: {
    fontWeight: "bold",
    color: green,
    fontSize: 20
  },
})

export default Quiz;
