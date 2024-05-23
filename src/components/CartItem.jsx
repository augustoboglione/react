import {useContext} from 'react'
import {CartContext} from '../context/CartContext.jsx'
import Counter from './Counter.jsx'

const CartItem = ({product}) => {
    const context = useContext(CartContext)

    return (
        <div className='cart-item'>
            <img src='' alt='' />
            <p>{product.name}</p>
            <Counter decrease={() => context.decrease(product)} increase={() => context.increase(product)} count={product.quantity}/>
            <p>${product.quantity * product.price}</p>
        </div>
    )
}

export default CartItem