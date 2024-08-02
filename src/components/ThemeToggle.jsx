import {useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext.jsx'
import sun from '/assets/sun.svg'
import moon from '/assets/moon.svg'

const ThemeToggle = () => {
    const {theme, toggle} = useContext(ThemeContext)

    return (
        <div>
            <div className={`theme-toggle shadowed ${theme}`} onClick={toggle}>
                <div/>
                <img className='moon' src={moon} alt='Dark'/>
                <img className='sun' src={sun} alt='Light'/>
            </div>
        </div>
    )
}

export default ThemeToggle