import {useState, useEffect} from 'react'
import XSvg from './XSvg.jsx'

const ToggleSvg = ({children, className, gradient, hidden, onClick}) => {
    const [flipped, setFlipped] = useState(false)

    useEffect(() => {
        if (!hidden) setFlipped(true)
    }, [hidden])

    return (
        <div className={`toggle-svg ${className || ''} ${flipped ? (hidden ? 'unflipped' : 'flipped') : ''}`}
            onClick={onClick}
        >
            <div>
                {children}
                <XSvg gradient={gradient}/>
            </div>
        </div>
    )
}

export default ToggleSvg