const Input = ({type, name, id, value, label, defaultChecked, onInput, onClick}) => (
    <div className={`${type}-input`}>
        <label htmlFor={id}>{label}</label>
        <input className={type == 'text' || type == 'search' ? 'shadowed' : ''}
            type={type} name={name} id={id} value={value} onInput={onInput} onClick={onClick} defaultChecked={defaultChecked}
        />
    </div>
)

export default Input