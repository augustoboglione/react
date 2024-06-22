import {useState, useEffect} from 'react'
import {handleSlide} from '../modules/slide.js'
import x from '/assets/x.svg'

const Slide = ({className, children}) => {
    const [hidden, setHidden] = useState(true)

    const handleMouseDown = e => handleSlide(e, className, hidden, setHidden)

    useEffect(() => {
        document.querySelector(`.slide.${className}`).addEventListener('touchstart', handleMouseDown, {passive: false})
    }, [])

    return (
        <div className={`slide ${className} shadowed ${hidden ? 'hidden' : ''}`}
            onMouseDown={handleMouseDown}
        >
            <img className={hidden ? '' : 'clockwise'} src={hidden ? `/assets/${className}.svg` : x} alt='Filter'/>
            {children}
        </div>
    )
}

export default Slide