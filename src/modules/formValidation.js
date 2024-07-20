const testPattern = (id, input) => {
    let field = 'text'

    if (!input.length) return false
    if (id == 'street' || id == 'number' || id == 'city') return true
    if (id =='email' || id == 'phone' || id == 'number') field = id

    if (field == 'text' && /[^A-Za-zÁÉÍÓÚÑáéíóúñ\s]/.test(input)
        || field == 'phone' && !/^\+?\d+$/.test(input)
        || field == 'number' && !/^\d+$/.test(input)
        || field == 'email' && !/^[^\s]+@\w+\.\w{2,}$/.test(input)
    ) return false
    
    return true
}

const handleBlur = e => {
    const inputElement = e.target
    const inputCheck = inputElement.nextElementSibling
    const message = inputCheck.querySelector('p')

    const id = e.target.id

    switch (id) {
        case 'email':
            message.innerText = 'Please enter a valid email'
            break;
        case 'phone':
        case 'number':
            message.innerText = `Your ${id} cannot contain non-numerical characters`
            break;
        default:
            message.innerText = `Your ${id.replace(/-/, ' ')} cannot contain special characters`
    }

    inputElement.classList.add('incorrect')
    inputCheck.className = 'incorrect'
}

const handleInput = (e, setInput) => {
    const correct = testPattern(e.target.id, e.target.value)

    const inputElement = e.target
    const inputCheck = inputElement.nextElementSibling

    if (correct) {
        if (inputElement.classList.contains('incorrect')) inputElement.classList.remove('incorrect')
        inputCheck.className = 'correct'

        inputElement.removeEventListener('blur', handleBlur)

        setInput(e.target.value)
    } else {
        if (inputCheck.className = 'correct') inputCheck.className = ''

        if (e.target.value.length) inputElement.addEventListener('blur', handleBlur, {once: true})

        setInput(null)
    }
}

export default handleInput