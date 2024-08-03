import {useState, useEffect, useRef, Children} from 'react'
import ToggleSvg from '../svg/ToggleSvg.jsx'
import {handleSlide} from '../modules/slide.js'

const Slide = ({children, className}) => {
    const [hidden, setHidden] = useState(true)

    const ref = useRef()
    ref.current = hidden

    const handleMouseDown = e => handleSlide(e, className, ref.current, setHidden)

    const content = Children.toArray(children)
    const svg = content.shift()

    useEffect(() => {
        document.querySelector(`.${className}`).addEventListener('touchstart', handleMouseDown, {passive: false})
    }, [])

    return (
        <div className={`slide ${className} shadowed ${hidden ? 'hidden' : ''}`} onMouseDown={handleMouseDown}>
            <ToggleSvg hidden={hidden} gradient>
                {svg}
            </ToggleSvg>
            {content}
        </div>
    )
}

export default Slide