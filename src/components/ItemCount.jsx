import {useState} from 'react'
import Button from './Button'
import minus from '../assets/minus.svg'
import plus from '../assets/plus.svg'

const ItemCount = (props) => {
    const [count, setCount] = useState(0)

    const down = () => {
        if (count) setCount(count - 1)
    }

    const up = () => {
        if (count < props.stock) setCount(count + 1)
    }

    return (
        <>
            <div className='counter'>
                <Button onClick={down}><img src={minus} alt='Minus'/></Button>
                <p>{count}</p>
                <Button onClick={up}><img src={plus} alt='Plus'/></Button>
            </div>
            <Button className='add'>Add to Cart</Button>
        </>
    )
}

export default ItemCount