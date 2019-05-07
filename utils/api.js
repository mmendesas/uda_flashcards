import { AsyncStorage } from 'react-native'
import { _getDecks } from '../utils/_data'

const FLASHCARD_KEY = "uda_flashcards"

export function getDeck(key) {
  return AsyncStorage.getItem(FLASHCARD_KEY)
    .then((res) => {
      const data = JSON.parse(res);
      if (data !== null) {
        return data[key]
      }
      return undefined
    })
}

export function getDecks() {
  return AsyncStorage.getItem(FLASHCARD_KEY)
    .then((res) => {
      return res;
    })
}

export function addCardToDeck({ question, answer, key }) {
  return AsyncStorage.getItem(FLASHCARD_KEY)
    .then(data => {
      data = JSON.parse(data)

      let deck = {
        ...data[key],
        questions: [
          ...data[key].questions,
          { question, answer }
        ]
      }
      AsyncStorage.mergeItem(FLASHCARD_KEY, JSON.stringify({
        [key]: deck
      }));

      return { question, answer, key }
    })
}

export function saveDeckTitle(title) {
  return AsyncStorage.getItem(FLASHCARD_KEY)
    .then(data => {
      data = JSON.parse(data);
      const newDeck = {
        [title]: {
          title: title,
          questions: []
        }
      }
      AsyncStorage.mergeItem(FLASHCARD_KEY, JSON.stringify({
        ...data,
        ...newDeck
      }));

      return newDeck
    })
}

export function saveData(data) {
  return AsyncStorage.setItem(FLASHCARD_KEY, JSON.stringify(data))
}

export function clearStorage() {
  return AsyncStorage.clear()
}
