const drawBackground = (max, lowBound, highBound, theme) => {
    const fillColor = theme ? 'white' : 'black'

    lowBound.style.backgroundImage = `linear-gradient(to right,
        transparent 0,
        transparent ${lowBound.value * 100 / max}%,
        ${fillColor} ${lowBound.value * 100 / max}%,
        ${fillColor} ${highBound.value * 100 / max}%,
        transparent ${highBound.value * 100 / max}%, 
        transparent 100%)`
}

const handleBounds = (max, bounds, setBounds, theme) => {
    const lowBound = document.getElementById('low-bound')
    const highBound = document.getElementById('high-bound')

    if (2 * highBound.value < bounds[0] + bounds[1]) {
        lowBound.value = highBound.value
        setBounds([parseInt(highBound.value), bounds[1]])
        highBound.value = bounds[1]
    } else {
        setBounds([bounds[0], parseInt(highBound.value)])
    }

    drawBackground(max, lowBound, highBound, theme)
}

const resetBounds = (max, theme) => {
    const lowBound = document.getElementById('low-bound')
    const highBound = document.getElementById('high-bound')

    lowBound.value = 0
    highBound.value = max

    drawBackground(max, lowBound, highBound, theme)
}

export {handleBounds, resetBounds}