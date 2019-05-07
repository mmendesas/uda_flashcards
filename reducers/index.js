import {
  ADD_DECK,
  RECEIVE_DECKS
} from '../actions/index'
import { combineReducers } from 'redux'

let initialState = {
  React: {
      title: 'React',
      questions: [
          {
              question: 'What is React?',
              answer: 'A library for managing user interfaces'
          },
          {
              question: 'Where do you make Ajax requests in React?',
              answer: 'The componentDidMount lifecycle event'
          }
      ]
  },
  JavaScript: {
      title: 'JavaScript',
      questions: [
          {
              question: 'What is a closure?',
              answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
      ]
  }
}

function decks(state = initialState, action) {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      }
    case RECEIVE_DECKS:
      const { decks } = action;
      return {
        ...state,
        ...decks
      }
    default:
      return state;
  }
}

export default combineReducers({
  decks,
})