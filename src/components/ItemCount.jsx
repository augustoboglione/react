import {useState, useContext} from 'react'
import {CartContext} from '../context/CartContext'
import {ThemeContext} from '../context/ThemeContext.jsx'
import Counter from './Counter.jsx'
import Button from './Button'
import fire from '../others/sweetalert.js'

const ItemCount = ({product}) => {
    const [count, setCount] = useState(1)

    const {cart, add} = useContext(CartContext)

    const {theme} = useContext(ThemeContext)

    const addToCart = () => add(product, count)

    const decrease = () => {
        if (count - 1) setCount(count - 1)
    }

    const increase = () => {
        if (count < product.stock) setCount(count + 1)
        else fire('Not enough stock', `We have ${product.stock} item${product.stock == 1 ? '' : 's'} in stock.`, 'error', theme)
    }

    return (
        <>
            {!product.stock
                ? <p className='counter-text red'>Out of stock</p>
                :
            cart.some(item => item.id == product.id)
                ? <p className='counter-text'>In cart</p>
                : <Counter count={count} decrease={decrease} increase={increase}/>
            }
            <div className='buttons'>
                {!product.stock
                    ? <div><Button to='/'>Back to store</Button></div>
                    :
                cart.some(item => item.id == product.id)
                    ? <>
                        <div><Button to='/'>Back to store</Button></div>
                        <div><Button to='/cart'>Go to cart</Button></div>
                    </>
                    : <div><Button onClick={addToCart}>Add to Cart</Button></div>
                }
            </div>
        </>
    )
}

export default ItemCount