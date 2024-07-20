const setTime = () => {
    const halfDay = 43200000
    const hour = 3600000
    const minute = 60000
    const second = 1000

    const time = (new Date().getTime() - 3 * hour) % halfDay

    const hours = time / hour
    const minutes = (time % hour) / minute
    const seconds = (time % minute) / second

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