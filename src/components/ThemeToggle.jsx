import {useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'
import sun from '/assets/sun.svg'
import moon from '/assets/moon.svg'

const ThemeToggle = () => {
    const {theme, toggle} = useContext(ThemeContext)

    return (
        <div className={`toggle ${theme}`} onClick={toggle}>
            <div/>
            <img className='sun' src={sun} alt='Light'/>  
            <img className='moon' src={moon} alt='Dark'/>  
        </div>
    )
}

export default ThemeToggle