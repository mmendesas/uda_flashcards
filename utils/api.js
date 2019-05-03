import { AsyncStorage } from 'react-native'
import { getDecks } from '../utils/_data'

const FLASHCARD_KEY = "uda_flashcards"

export function getDeck(key) {
    return AsyncStorage.getItem(FLASHCARD_KEY)
        .then((res) => {
            const data = JSON.parse(res);
            console.log('key: ' + JSON.stringify(key))
            console.log('data: ' + JSON.stringify(data))
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
            let copy = data[key]
            copy.questions = copy.questions.concat({ question: question, answer: answer });

            return AsyncStorage.mergeItem(FLASHCARD_KEY, JSON.stringify({
                [key]: deck
            }));
        })
}