const handleSlide = (e, elementClassName, hidden, setHidden) => {
    if (e.target.type == 'range') return

    e.preventDefault()

    let click = true
    let translate = {}

    const img = e.target.tagName == 'IMG'
    const element = document.querySelector(`.${elementClassName}`)

    if (e.type == 'touchstart') e = e.touches[0]

    const elementX = element.getBoundingClientRect().left
    const elementY = element.getBoundingClientRect().top

    const mouseX = e.pageX
    const mouseY = e.pageY

    const handleMouseMove = e => {
        // e.preventDefault()

        click = false

        const mainX = e.pageX - mouseX
        const mainY = e.pageY - mouseY

        const topY = 100 - window.scrollY - elementY
        const bottomY = document.body.scrollHeight - 150 - window.scrollY - elementY

        const leftX = -elementX
        const rightX = window.innerWidth - 50 - elementX

        if (mainX < leftX) translate.x = leftX
        else if (mainX > rightX) translate.x = rightX
        else translate.x = mainX

        if (mainY < topY) translate.y = topY
        else if (mainY > bottomY) translate.y = bottomY
        else translate.y = mainY

        element.style.transform = `translate(${translate.x}px, ${translate.y}px)`
    }

    const handleMouseUp = e => {
        // e.preventDefault()

        if (click) {
            if (img) setHidden(!hidden)
            else {
                setHidden(false)
                e.target.focus()
            }
        } else {
            element.style.left = elementX + translate.x + 'px'
            element.style.top =  elementY + translate.y + 'px'
            element.style.transform = null
        }

        window.onmousemove = null
        window.ontouchmove = null
        window.onmouseup = null
        window.ontouchend = null
    }

    window.onmousemove = handleMouseMove
    window.ontouchmove = handleMouseMove
    window.onmouseup = handleMouseUp
    window.ontouchend = handleMouseUp
}

export default handleSlide