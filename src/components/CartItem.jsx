import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../context/CartContext.jsx'
import Counter from './Counter.jsx'
import AsyncImg from './AsyncImg.jsx'
import handlePrice from '../modules/price.js'

const CartItem = ({product, long}) => {
    const {remove, decrease, increase} = useContext(CartContext)

    if (long) return (
        <div className={`cart-item ${long ? 'long' : 'square'} shadowed`}>
            <Link to={`/item/${product.id}`}>
                <AsyncImg className='cart-img' src={product.img} alt={product.name} />
            </Link>
            <div>
                <Link className='cart-name gradient-text' to={`/item/${product.id}`}>
                    {product.name}
                </Link>
                <Counter count={product.quantity}
                    decrease={e => decrease(e, product)}
                    increase={e => increase(e, product)}
                    remove={e => remove(e, product)}
                />
            </div>
            <p className='cart-price'>${handlePrice(product.quantity * product.price)}</p>
        </div>
    )

    return (
        <Link className={`cart-item ${long ? 'long' : 'square'} shadowed`} to={`/item/${product.id}`}>
            <h2 className='cart-name gradient-text'>{product.name}</h2>
            <div className='center'>
                <AsyncImg className='cart-img' src={product.img} alt={product.name} />
                <p className='cart-price'>${handlePrice(product.quantity * product.price)}</p>
            </div>
            <Counter count={product.quantity}
                decrease={e => decrease(e, product)}
                increase={e => increase(e, product)}
                remove={e => remove(e, product)}
            />
        </Link>
    )
}

export default CartItem