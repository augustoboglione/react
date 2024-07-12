import {useState, useEffect, useRef} from 'react'
import {handleSlide} from '../modules/slide.js'
import x from '/assets/x.svg'

const Slide = ({className, children}) => {
    const [hidden, setHidden] = useState(true)
    const a = useRef(hidden)

    const handleMouseDown = e => handleSlide(e, className, hidden, setHidden)

    return (
        <div className={`slide ${className} shadowed ${hidden ? 'hidden' : ''}`}
            onMouseDown={handleMouseDown} onTouchStart={handleMouseDown}
        >
            <div>
            <img className={hidden ? '' : 'clockwise'} src={hidden ? `/assets/${className}.svg` : x} alt='Filter'/>
            </div>
            {children}
        </div>
    )
}

export default Slide