import {
  ADD_DECK,
  RECEIVE_DECKS
} from '../actions/index'

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
    default:
      return state;
  }
}
