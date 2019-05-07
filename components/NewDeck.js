import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { black, white } from '../utils/colors'

class NewDeck extends Component {

    state = {
        title: ''
    }

    submit = () => {
        console.log('submit', this.state)
        this.setState(() => ({ title: '' }))
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>What is the title of your New Deck?</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Deck title'
                    value={this.state.title}
                    onChangeText={(title) => this.setState(() => ({ title }))}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.submit}
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
    message: {
        fontSize: 35,
        alignSelf: 'center',
        textAlign: 'center',
        width: 300
    },
    input: {
        borderWidth: 1,
        width: 200,
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

export default NewDeck