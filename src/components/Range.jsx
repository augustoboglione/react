import {useEffect} from 'react'
import {resetBounds} from '../others/handleRange'

const Range = ({label, max, onInput}) => {
    useEffect(() => resetBounds(max), [max])

    return (
        <div className='range-input'>
            <label htmlFor='high-bound'>{label}</label>
            <div>
                <input className='shadowed' type='range' id='low-bound' defaultValue='0' min='0' max={max ? max : 0}
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