let decks = {
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

//  get decks
export const _getDecks = () => {
    return new Promise((res, rej) => {
        setTimeout(() => res({ ...decks }), 1000)
    })
}

// get deck
export const _getDeck = (name) => {
    return new Promise((res, rej) => {
        setTimeout(() => res({ ...decks[name] }), 500)
    })
}

// save deck title

export const _saveDeckTitle = (title) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            decks = {
                ...decks,
                [title]: {
                    title: title,
                    questions: []
                }
            }
        }, 1000)
    })
}

// add card to deck

