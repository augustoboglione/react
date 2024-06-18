const drawBackground = (max, lowBound, highBound) => {
    lowBound.style.backgroundImage = `linear-gradient(to right, white 0, white ${lowBound.value * 100 / max}%,
        black ${lowBound.value * 100 / max}%, black ${highBound.value * 100 / max}%, white ${highBound.value * 100 / max}%, white 100%)`
}

const handleBounds = (e, max, bounds, setBounds) => {
    const lowBound = document.getElementById('low-bound')
    const highBound = e.target

    if (2 * e.target.value < bounds[0] + bounds[1]) {
        lowBound.value = highBound.value
        setBounds([parseInt(highBound.value), bounds[1]])
        highBound.value = bounds[1]
    } else {
        setBounds([bounds[0], parseInt(highBound.value)])
    }

    drawBackground(max, lowBound, highBound)
}

const resetBounds = (max) => {
    const lowBound = document.getElementById('low-bound')
    const highBound = document.getElementById('high-bound')

    lowBound.value = 0
    highBound.value = max

    drawBackground(max, lowBound, highBound)
}

export {handleBounds, resetBounds}