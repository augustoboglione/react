import {useState, useContext} from 'react'
import {CartContext} from '../context/CartContext'
import {AlertContext} from '../context/AlertContext.jsx'
import Counter from './Counter.jsx'
import Button from './Button'

const ItemCount = ({product}) => {
    const [count, setCount] = useState(1)

    const {cart, add} = useContext(CartContext)
    const {fire} = useContext(AlertContext)

    const addToCart = () => add(product, count)

    const decrease = () => {
        if (count - 1) setCount(count - 1)
    }

    const increase = () => {
        if (count < product.stock) setCount(count + 1)
        else fire('Not enough stock', `We have ${product.stock} item${product.stock == 1 ? '' : 's'} in stock.`, null)
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
                    ? <Button to='/'>Back to Store</Button>
                    :
                cart.some(item => item.id == product.id)
                    ? <>
                        <Button to='/'>Back to Store</Button>
                        <Button to='/cart'>Go to Cart</Button>
                    </>
                    : <Button onClick={addToCart}>Add to Cart</Button>
                }
            </div>
        </>
    )
}

export default ItemCount