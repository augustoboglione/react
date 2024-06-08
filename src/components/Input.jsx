const Input = ({type, title, label, onInput, onClick}) => (
    <div>
        <label htmlFor={title}>{label}</label>
        <input type={type} title={title} onInput={onInput} onClick={onClick}/>
    </div>
)

export default Input