import {useState, useEffect} from 'react'
import Input from './Input'
import filter from '../assets/filter.svg'
import x from '../assets/x.svg'

const handleGrab = e => {
    e.preventDefault()
    const filter = document.querySelector('.filter')

    const filterX = filter.getBoundingClientRect().left
    const filterY = filter.getBoundingClientRect().top

    const mouseX = e.pageX
    const mouseY = e.pageY

    const handleDrag = e => {
        filter.style.transform = 'translate(' + (e.pageX - mouseX) + 'px, ' + (e.pageY - mouseY) + 'px)'
    }

    const stopDrag = e => {
        filter.style.left = filterX + e.pageX - mouseX + 'px'
        filter.style.top = filterY + e.pageY - mouseY + 'px'
        filter.style.transform = null
        window.onmousemove = null
        window.onmouseup = null
    }

    window.onmousemove = handleDrag
    window.onmouseup = stopDrag
}

const Filter = ({handleSort, handleInStock}) => {
    const [hidden, setHidden] = useState(true)

    const show = e => {
        if (Array.from(e.target.classList).includes('filter')) setHidden(false)
    }

    const toggle = () => setHidden(!hidden)

    const handleClick = e => {
        if (!e.target.closest('.filter')) setHidden(true)
    }

    useEffect(() => {
        window.onclick = handleClick
    }, [])

    return (
        <div className={`filter shadowed ${hidden ? 'hidden' : ''}`} onClick={show} onMouseDown={handleGrab}>
            <img className={hidden ? '' : 'clockwise'} src={hidden ? filter : x} alt='Filter' onClick={toggle}/>
            <div>
                <h2>Sort by</h2>
                <form onInput={handleSort}>
                    <Input type='radio' name='sort' id='name' value='name' label='Name' defaultChecked={true}/>
                    <Input type='radio' name='sort' id='increasing' value='increasing' label='Price: Low to High'/>
                    <Input type='radio' name='sort' id='decreasing' value='decreasing' label='Price: High to Low'/>
                </form>
                <h2>Filter by</h2>
                <form>
                    <Input type='checkbox' label='In stock' onInput={handleInStock}/>
                    <Input type='range' label='Price'/>
                </form>
            </div>
        </div>
    )
}

export default Filter