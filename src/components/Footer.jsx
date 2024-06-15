import {useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'
import ThemeToggle from '../components/ThemeToggle.jsx'

const Footer = ({welcome}) => {
    const {theme} = useContext(ThemeContext)

    return (
        <div className={`footer ${welcome ? 'white': ''} ${theme}`}>
            <ThemeToggle/>
            <p>All rights reserved</p>
        </div>
    )
}

export default Footer