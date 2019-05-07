import {
  ADD_DECK,
  RECEIVE_DECKS,
  ADD_CARD
} from '../actions/index'
import { combineReducers } from 'redux'

function decks(state = {}, action) {
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
    case ADD_CARD:
      const { question, answer, key } = action.card
      return {
        ...state,
        [key]: {
          ...state[key],
          questions: [
            ...state[key].questions,
            { question, answer }
          ]
        }
      }
    default:
      return state;
  }
}

export default combineReducers({
  decks,
})
