const Input = ({title, label, onInput}) => (
    <div>
        <label htmlFor={title}>{label}</label>
        <input type='text' title={title} onInput={onInput}/>
    </div>
)

export default Input