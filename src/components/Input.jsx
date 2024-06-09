const Input = ({type, name, id, label, defaultChecked, onInput, onClick}) => (
    <div>
        <label htmlFor={id}>{label}</label>
        <input type={type} name={name} id={id} onInput={onInput} onClick={onClick} defaultChecked={defaultChecked}/>
    </div>
)

export default Input