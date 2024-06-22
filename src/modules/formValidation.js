const testPattern = (id, input) => {
    let field = 'text'

    if (id =='email' || id == 'phone' || id == 'number') field = id

    if ((field == 'text' && /[^A-Za-zÁÉÍÓÚÑáéíóúñ\s]/.test(input))
        || (field == 'phone' && !/^\+?\d+$/.test(input))
        || (field == 'number' && !/^\d+$/.test(input))
        || (field == 'email' && !/^[^\s]+@\w+\.\w{2,}$/.test(input))
    ) return false
    else return true
}

const setPosition = id => {
    const inputElement = document.getElementById(id)
    const nextElement = inputElement.nextElementSibling

    const inputRect = inputElement.getBoundingClientRect()

    if (nextElement) {
        if (nextElement.tagName == 'IMG') {
            nextElement.style.top = inputRect.top + 'px'
            nextElement.style.left = inputRect.left + inputRect.width + 20 + 'px'
        } else {
            nextElement.style.top = inputRect.top + inputRect.height + 'px'
            nextElement.style.left = inputRect.left + 'px'
        }
    }
}

const handleBlur = e => {
    const inputElement = e.target
    const inputParent = inputElement.parentElement
    const nextElement = inputElement.nextElementSibling

    const id = e.target.id

    const inputRect = inputElement.getBoundingClientRect()

    const message = document.createElement('p')

    switch (id) {
        case 'email':
            message.innerText = 'Please enter a valid email.'
            break;
        case 'phone':
        case 'number':
            message.innerText = `Your ${id} cannot contain non-numerical characters.`
            break;
        default:
            message.innerText = `Your ${id.replace(/-/, ' ')} cannot contain special characters.`
    }

    try {
        inputParent.removeChild(nextElement)
    } catch {}

    inputParent.appendChild(message)

    message.style.top = inputRect.top + inputRect.height + 'px'
    message.style.left = inputRect.left + 'px'
    
    inputElement.classList.add('incorrect')
}

const handleInput = (e, setInput) => {
    const test = testPattern(e.target.id, e.target.value)

    const inputElement = e.target
    const inputParent = inputElement.parentElement
    const nextElement = inputElement.nextElementSibling

    if (test) {
        const inputRect = inputElement.getBoundingClientRect()

        const img = document.createElement('img')
        img.src = '/assets/tick.svg'
        img.alt = 'Correct'

        try {
            inputParent.removeChild(nextElement)
        } catch {}

        inputParent.appendChild(img)

        img.style.top = inputRect.top + 'px'
        img.style.left = inputRect.left + inputRect.width + 20 + 'px'

        inputElement.removeEventListener('blur', handleBlur)

        if (inputElement.classList.contains('incorrect')) inputElement.classList.remove('incorrect')

        setInput(e.target.value)
    } else {
        if (nextElement && nextElement.tagName == 'IMG') try {
            inputParent.removeChild(nextElement)
        } catch {}

        inputElement.addEventListener('blur', handleBlur, {once: true})

        setInput(null)
    }
}

export {handleInput, setPosition}