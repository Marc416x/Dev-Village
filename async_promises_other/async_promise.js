const greetGuests = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                console.log('Hello Everyone, how are you?')
                resolve()
            },
            2000
        )
    })
}

const guestRespond = () => console.log('Fine thank you')

const run = () => {
    greetGuests().then(() => guestRespond())
}

run()

// Rewrite the breakfast assignment to use promises