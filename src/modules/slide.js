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

let click = true
let className
let hidden, setHidden
let elementX, elementY, mouseX, mouseY
let translate = {}

const handleMouseMove = e => {
    e.preventDefault()

    click = false

    const element = document.querySelector(`.${className}`)

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

const handleScrollOnSlide = () => {
    click = false
    window.dispatchEvent(new Event('mouseup'))
}

const handleMouseUp = e => {
    e.preventDefault()

    const element = document.querySelector(`.${className}`)
    const img = e.target.tagName == 'IMG'

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

const handleSlide = (e, classNameArg, hiddenArg, setHiddenArg) => {
    if (e.target.type == 'range') return

    e.preventDefault()

    click = true
    className = classNameArg
    hidden = hiddenArg
    setHidden = setHiddenArg

    const element = document.querySelector(`.${className}`)

    if (e.type == 'touchstart') e = e.touches[0]

    elementX = element.getBoundingClientRect().left
    elementY = element.getBoundingClientRect().top

    mouseX = e.pageX
    mouseY = e.pageY

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleMouseMove, {passive: false})
    window.addEventListener('mouseup', handleMouseUp, {once: true})
    window.addEventListener('touchend', handleMouseUp, {once: true})
    window.addEventListener('scroll', handleScrollOnSlide, {once: true})
}

export {handleSlide, handleScroll}