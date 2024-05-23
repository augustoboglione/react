import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../context/CartContext.jsx'
import Counter from './Counter.jsx'

const CartItem = ({product}) => {
    const context = useContext(CartContext)

    return (
        <div className='cart-item shadowed'>
            <img src='' alt='' />
            <Link className='cart-name' to={`/item/${product.id}`}>{product.name}</Link>
            <Counter count={product.quantity}
                decrease={() => context.decrease(product)}
                increase={() => context.increase(product)}
                remove={() => context.remove(product)}
            />
            <p className='cart-price'>${product.quantity * product.price}</p>
        </div>
    )
}

export default CartItem