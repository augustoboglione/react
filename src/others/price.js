const handlePrice = (price) => {
    if (typeof price == 'number' && !/\./.test(price.toString())) {
        let string = price.toString()

        string = string.replace(/(?<=\d)(?=\d{3}$)/, '.')

        while(/\d{4}/.test(string)) string = string.replace(/(?<=\d)(?=\d{3}\.)/, '.')

        return string
    }
    
    return null
}

export default handlePrice