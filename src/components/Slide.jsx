import {useState, useEffect, Children} from 'react'
import ToggleSvg from '../svg/ToggleSvg.jsx'
import {handleSlide} from '../modules/slide.js'

const Slide = ({children, className}) => {
    const [hidden, setHidden] = useState(true)

    const handleMouseDown = e => handleSlide(e, className, hidden, setHidden)

    const content = Children.toArray(children)
    const svg = content.shift()

    useEffect(() => {
        document.querySelector(`.${className}`).addEventListener('touchstart', e => handleMouseDown(e), {passive: false})
        return document.querySelector(`.${className}`).removeEventListener('touchstart', handleMouseDown)
    }, [])

    // useEffect(() => console.log(hidden), [hidden])

    return (
        <div className={`slide ${className} shadowed ${hidden ? 'hidden' : ''}`}
            onMouseDown={handleMouseDown}
        >
            <ToggleSvg hidden={hidden} gradient>
                {svg}
            </ToggleSvg>
            {content}
        </div>
    )
}

export default Slide