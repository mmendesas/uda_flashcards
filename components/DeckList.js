import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions';

class DeckList extends Component {

  state = {
    decks: []
  }

  componentDidMount() {
    const { dispatch } = this.props;
    getDecks()
      .then(decks => dispatch(receiveDecks(decks)))
      .then(({ decks }) => this.setState(() => ({ decks })))
  }

  render() {
    console.log("props", this.props)

    return (
      <View>
        <Text>DeckList</Text>
        <ul>
          {
            this.state.decks.map(deck => {
              console.log('deck', deck)
              return <Text>{[deck]}</Text>
            })
          }
        </ul>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    decks: state.decks
  }
}

export default connect(mapStateToProps)(DeckList)
