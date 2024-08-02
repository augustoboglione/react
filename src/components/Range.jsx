import {useEffect, useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext.jsx'
import {resetBounds} from '../modules/range.js'

const Range = ({label, max, onInput}) => {
    const {theme} = useContext(ThemeContext)

    useEffect(() => resetBounds(max, theme), [max])

    useEffect(onInput, [theme])

    return (
        <div className='range-input'>
            <label htmlFor='high-bound'>{label}</label>
            <div>
                <input type='range' id='low-bound' defaultValue='0' min='0' max={max ? max : 0}
                    step='1' onMouseDown={e => e.preventDefault()}
                />
                <input type='range' id='high-bound' defaultValue={max ? max : 0} min='0' max={max ? max : 0}
                    step='1' onInput={onInput}
                />
            </div>
        </div>
    )
}

export default Range