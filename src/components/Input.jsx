import {useState} from 'react'
import {countries, flag} from '../modules/countries.js'
import AsyncImg from './AsyncImg.jsx'
import TickSvg from '../svg/TickSvg.jsx'

const Input = ({children, type, name, id, value, label, placeholder, defaultChecked, selected, onInput, onClick}) => {
    const [hidden, setHidden] = useState(true)

    const toggle = () => setHidden(!hidden)

    return (
        <div className={`${type}-input`}>
            <label htmlFor={id}>{label}</label>
            {type == 'select'
                ? <div className='select' onClick={toggle}>
                    <div className={`shadowed ${selected ? '' : 'placeholder'} ${hidden ? 'visible' : ''}`} id={id}>
                        {selected
                            ? (id == 'country'
                                ? <>
                                    <AsyncImg className='flag' src={flag(selected)} alt={countries[selected]}/>
                                    <p>{countries[selected]}</p>
                                </>
                                : selected
                            )
                            : 'United States' 
                        }
                    </div>
                    {hidden || <ul className='shadowed'>{children}</ul>}
                </div>
                : <input className={type == 'text' || type == 'radio' || type == 'checkbox' ? 'shadowed' : ''}
                    type={type} name={name} id={id} value={value} placeholder={placeholder}
                    defaultChecked={defaultChecked} onInput={onInput} onClick={onClick}
                />
            }
            {type == 'text' &&
                <div>
                    <TickSvg/>
                    <p/>
                </div>
            }
        </div>
    )
}

export default Input