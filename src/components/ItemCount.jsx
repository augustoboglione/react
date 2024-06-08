import {useState, useContext} from 'react'
import {CartContext} from '../context/CartContext'
import Counter from './Counter.jsx'
import Button from './Button'
import fire from '../others/sweetalert.js'

const ItemCount = ({product}) => {
    const [count, setCount] = useState(1)

    const {cart, add} = useContext(CartContext)

    const addToCart = () => add(product, count)

    const decrease = () => {
        if (count - 1) setCount(count - 1)
    }

    const increase = () => {
        if (count < product.stock) setCount(count + 1)
        else fire('Not enough stock', `We have ${product.stock} item${product.stock == 1 ? '' : 's'} in stock.`, 'error')
    }

    if (!product.stock) return (
        <>
            <p className='red'>Out of stock</p>
            <Button to='/'>Back to store</Button>
        </>
    )

    if (cart.some(item => item.id == product.id)) return (
        <>
            <p>In cart</p>
            <div className='buttons'>
                <Button to='/'>Back to store</Button>
                <Button to='/cart'>Go to cart</Button>
            </div>
        </>
    )
    
    return (
        <>
            <Counter count={count} decrease={decrease} increase={increase}/>
            <Button onClick={addToCart}>Add to Cart</Button>
        </>
    )
}

export default ItemCount