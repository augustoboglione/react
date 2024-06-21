import tick from '/assets/tick.svg'

const Input = ({type, name, id, value, label, placeholder, defaultChecked, required, pattern, onInput, onClick}) => (
    <div className={`${type}-input`}>
        <label htmlFor={id}>{label}</label>
        <input className={type == 'text' || type == 'email' || type == 'radio' || type == 'checkbox' ? 'shadowed' : ''}
            type={type} name={name} id={id} value={value} placeholder={placeholder}
            defaultChecked={defaultChecked} required={required}  pattern={pattern} onInput={onInput} onClick={onClick}
        />
        {/* {(type == 'text' || type == 'email') && <img src={tick} alt='Correct'/>} */}
    </div>
)

export default Input