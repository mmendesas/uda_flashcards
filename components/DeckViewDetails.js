import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { gray } from '../utils/colors'

const DeckViewDetails = ({ title, questions }) => (
  <View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.number}>
      {questions.length === 1
        ? `${questions.length} Card`
        : `${questions.length} Cards`
      }
    </Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    alignSelf: 'center'
  },
  number: {
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 20,
    color: gray
  }
})

export default DeckViewDetails
