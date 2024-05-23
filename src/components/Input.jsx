const Input = ({title, label, onInput}) => (
    <>
        <label htmlFor={title}>{label}</label>
        <input type="text" title={title} onInput={onInput}/>
    </>
)

export default Input