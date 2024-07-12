import {useState, useEffect} from 'react'
import {countries, flag} from '../modules/countries.js'
import AsyncImg from './AsyncImg.jsx'
import tick from '/assets/tick.svg'

const Input = ({children, type, name, id, value, label, placeholder, defaultChecked, pattern, selected, onInput, onClick}) => {
    const [hidden, setHidden] = useState(true)

    const toggle = () => setHidden(!hidden)

    return (
        <div className={`${type}-input`}>
            <label htmlFor={id}>{label}</label>
            {type == 'select'
                ? <div className='select' onClick={toggle}>
                    <div className='shadowed' id={id}>
                        {selected
                            ? (id == 'country'
                                ? <>
                                    <AsyncImg className='flag' src={flag(selected)} alt={countries[selected]}/>
                                    <p>{countries[selected]}</p>
                                </>
                                : selected
                            )
                            : 'placeholder' 
                        }
                    </div>
                    {hidden || <ul className='shadowed'>{children}</ul>}
                </div>
                : <input className={type == 'text' || type == 'email' || type == 'radio' || type == 'checkbox' ? 'shadowed' : ''}
                    type={type} name={name} id={id} value={value} placeholder={placeholder}
                    defaultChecked={defaultChecked} pattern={pattern} onInput={onInput} onClick={onClick}
                />
            }
            {/* {(type == 'text' || type == 'email') && <img src={tick} alt='Correct'/>} */}
        </div>
    )
}

export default Input