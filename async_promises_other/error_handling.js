const divide = (a, b) => b / a

try {
    const result = divide(0, 100)

    if (isNaN(result)) {
        throw new Error('result is not a number')
    } else if (result === Infinity) {
        throw new RangeError('Infinity numbers not handled')
    }

} catch (err) {
    console.log(err)
}