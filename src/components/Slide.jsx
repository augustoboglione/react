import {useState} from 'react'
import handleSlide from '../others/handleSlide'
import x from '/assets/x.svg'

const Slide = ({className, children}) => {
    const [hidden, setHidden] = useState(true)

    const handleMouseDown = e => handleSlide(e, className, hidden, setHidden)

    return (
        <div className={`slide ${className} shadowed ${hidden ? 'hidden' : ''}`} 
            onMouseDown={handleMouseDown} onTouchStart={handleMouseDown}
        >
            <img className={hidden ? '' : 'clockwise'} src={hidden ? `/assets/${className}.svg` : x} alt='Filter'/>
            {children}
        </div>
    )
}

export default Slide