import {useState, Children} from 'react'
import ToggleSvg from '../svg/ToggleSvg.jsx'
import {handleSlide} from '../modules/slide.js'

const Slide = ({children, className}) => {
    const [hidden, setHidden] = useState(true)

    const handleMouseDown = e => handleSlide(e, className, hidden, setHidden)

    const content = Children.toArray(children)
    const svg = content.shift()

    return (
        <div className={`slide ${className} shadowed ${hidden ? 'hidden' : ''}`}
            onMouseDown={handleMouseDown} onTouchStart={handleMouseDown}
        >
            <ToggleSvg hidden={hidden} gradient>
                {svg}
            </ToggleSvg>
            {content}
        </div>
    )
}

export default Slide