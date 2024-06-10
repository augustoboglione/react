import {useState, useEffect} from 'react'
import Input from './Input'
import filter from '../assets/filter.svg'
import x from '../assets/x.svg'

const Filter = ({handleSort, handleInStock}) => {
    const [hidden, setHidden] = useState(true)

    const handleGrab = e => {
        e.preventDefault()
        let click = true

        const img = e.target.tagName == 'IMG'
        const filter = document.querySelector('.filter')
    
        const filterX = filter.getBoundingClientRect().left
        const filterY = filter.getBoundingClientRect().top

        if (e.type == 'touchstart') e = e.touches[0]
    
        const mouseX = e.pageX
        const mouseY = e.pageY
    
        const handleDrag = e => {
            click = false
            filter.style.transform = `translate(${e.pageX - mouseX}px, ${e.pageY - mouseY}px)`
        }
    
        const endDrag = e => {
            if (click) {
                if (img) setHidden(!hidden)
                else setHidden(false) 
            } else {
                filter.style.left = filterX + e.pageX - mouseX + 'px'
                filter.style.top = filterY + e.pageY - mouseY + 'px'
                filter.style.transform = null
            }

            window.onmousemove = null
            window.ontouchmove = null
            window.onmouseup = null
            window.ontouchend = null
        }
    
        window.onmousemove = handleDrag
        window.ontouchmove = handleDrag
        window.onmouseup = endDrag
        window.ontouchend = endDrag
    }    

    return (
        <div className={`filter shadowed ${hidden ? 'hidden' : ''}`} onMouseDown={handleGrab} onTouchStart={handleGrab}>
            <img className={hidden ? '' : 'clockwise'} src={hidden ? filter : x} alt='Filter'/>
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