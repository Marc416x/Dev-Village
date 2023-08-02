const greetGuests = (callback) => {
    setTimeout(() => {
            console.log('Hello Everyone, how are you?')
            callback()
        },
        2000)
}

const guestRespond = () => console.log('Fine thank you')

const run = () => {
    greetGuests(guestRespond)
}

run()