const setTime = () => {
    const time = new Date()

    const seconds = time.getSeconds() + time.getMilliseconds() / 1000
    const minutes = time.getMinutes() + seconds / 60
    const hours = time.getHours() + minutes / 60

    const hoursHand = document.getElementById('hours-hand')
    const minutesHand = document.getElementById('minutes-hand')
    const secondsHand = document.getElementById('seconds-hand')

    hoursHand.style.transform = `rotate(${hours * 30}deg)`
    minutesHand.style.transform = `rotate(${minutes * 6}deg)`
    secondsHand.style.transform = `rotate(${seconds * 6}deg)`
}

const startClock = () => {
    setInterval(() => setTime(), 1)
}

export default startClock