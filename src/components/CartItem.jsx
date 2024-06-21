import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../context/CartContext.jsx'
import Counter from './Counter.jsx'
import AsyncImg from './AsyncImg.jsx'
import handlePrice from '../others/price.js'

const CartItem = ({product}) => {
    const {remove, decrease, increase} = useContext(CartContext)

    return (
        <div className='cart-item shadowed'>
            <Link to={`/item/${product.id}`}>
                <AsyncImg className='cart-img' src={product.img} alt={product.name} />
            </Link>
            <div>
                <Link className='cart-name' to={`/item/${product.id}`}>
                    {product.name}
                </Link>
                <Counter count={product.quantity}
                    decrease={() => decrease(product)}
                    increase={() => increase(product)}
                    remove={() => remove(product)}
                />
            </div>
            <p className='cart-price'>${handlePrice(product.quantity * product.price)}</p>
        </div>
    )
}

export default CartItem