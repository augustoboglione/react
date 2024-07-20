import {useEffect, useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'
import ThemeToggle from '../components/ThemeToggle.jsx'
import Clock from '../svg/Clock.jsx'
import startClock from '../modules/clock.js'

const Footer = () => {
    const {theme} = useContext(ThemeContext)

    useEffect(() => startClock(), [])

    return (
        <div className={`footer ${theme}`}>
            <ThemeToggle/>
            <p>All rights reserved</p>
            <Clock/>
        </div>
    )
}

export default Footer