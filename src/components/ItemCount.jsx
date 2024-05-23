import {useState, useContext} from 'react'
import {CartContext} from '../context/CartContext'
import Counter from './Counter.jsx'
import Button from './Button'

const ItemCount = ({product}) => {
    const [count, setCount] = useState(1)

    const context = useContext(CartContext)

    const down = () => {
        if (count - 1) setCount(count - 1)
    }

    const up = () => {
        if (true) setCount(count + 1)
    }

    const addToCart = () => context.add(product, count)

    return (
        <>
            <Counter decrease={down} increase={up} count={count}/>
            <Button className='add' onClick={addToCart}>Add to Cart</Button>
        </>
    )
}

export default ItemCount