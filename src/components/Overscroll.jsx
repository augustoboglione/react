import {useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'

const Overscroll = () => {
    const {theme} = useContext(ThemeContext)

    return <div className={`overscroll ${theme}`}/>
}

export default Overscroll