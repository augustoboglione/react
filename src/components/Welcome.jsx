import {useEffect, useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext.jsx'
import StartSvg from '../svg/StartSvg.jsx'

const Welcome = ({start}) => {
    const {theme} = useContext(ThemeContext)

    useEffect(() => scroll(0, 0), [])

    return (
        <div className={`body welcome ${theme}`}>
            <h1 className='gradient-text'>Welcome!</h1>
            <div onClick={start}>
                <h2 className='gradient-text'>Start</h2>
                <StartSvg/>
            </div>
        </div>
    )
}

export default Welcome