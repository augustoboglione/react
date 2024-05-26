import {useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'
import Button from './Button'

const ThemeToggle = () => {
    const {theme, toggle} = useContext(ThemeContext)

    return <Button className={`theme-toggle text-button ${theme}`} onClick={toggle}>
        {theme == 'dark' ? 'Light' : 'Dark'}
    </Button>
}

export default ThemeToggle