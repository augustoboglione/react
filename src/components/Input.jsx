const Input = ({type, name, id, value, label, placeholder, defaultChecked, onInput, onClick}) => (
    <div className={`${type}-input`}>
        <label htmlFor={id}>{label}</label>
        <input className={type == 'text' || type == 'radio' || type == 'checkbox' ? 'shadowed' : ''}
            type={type} name={name} id={id} value={value} placeholder={placeholder}
            onInput={onInput} onClick={onClick} defaultChecked={defaultChecked}
        />
    </div>
)

export default Input