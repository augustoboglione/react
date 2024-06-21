const setSize = (element, hidden) => {
    if (hidden) {
        element.style.height = '30px'
        element.style.width = '30px'
        element.style.cursor = 'pointer'
    } else {
        const children = Array.from(element.children)

        if (element.classList.contains('search')) {
            element.style.height = Math.max(...children.map(child => child.clientHeight)) + 'px'
            element.style.width = children.reduce((x, y) => x + y.clientWidth, 0) + 'px'
        } else {
            element.style.height = children.reduce((x, y) => x + y.clientHeight, 0) + 'px'
            element.style.width = Math.max(...children.map(child => child.clientWidth)) + 'px'
        }

        element.style.cursor = 'default'
    }
}

const handleScroll = () => {
    const elements = Array.from(document.getElementsByClassName('slide'))

    elements.forEach(element => {
        if (element.getBoundingClientRect().top > document.documentElement.scrollHeight - window.scrollY - 150)
            element.style.top = document.documentElement.scrollHeight - window.scrollY - 150 + 'px'
    })
}

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
        e.preventDefault()

        click = false

        const mainX = e.pageX - mouseX
        const mainY = e.pageY - mouseY

        const topY = 100 - elementY
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
        e.preventDefault()

        if (click) {
            if (img) {
                setSize(element, !hidden)
                setHidden(!hidden)
            } else {
                setSize(element, false)
                setHidden(false)
                e.target.focus()
            }
        } else {
            element.style.left = elementX + translate.x + 'px'
            element.style.top =  elementY + translate.y + 'px'
            element.style.transform = null
        }

        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('touchmove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
        window.removeEventListener('touchend', handleMouseUp)
        window.removeEventListener('scroll', handleScrollOnSlide)
    }

    const handleScrollOnSlide = () => {
        click = false
        window.dispatchEvent(new Event('mouseup'))
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('touchend', handleMouseUp)
    window.addEventListener('scroll', handleScrollOnSlide)
}

export {handleSlide, handleScroll}