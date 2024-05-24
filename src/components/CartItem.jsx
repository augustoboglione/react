import {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../context/CartContext.jsx'
import Counter from './Counter.jsx'
import handlePrice from '../others/price.js'
import getImg from '../others/img.js'

const CartItem = ({product}) => {
    const [img, setImg] = useState()

    useEffect(() => {
        getImg(product.id).then(setImg)
    }, [])

    const context = useContext(CartContext)

    return (
        <div className='cart-item shadowed'>
            <Link to={`/item/${product.id}`}>
                <img className='cart-img' src={img} alt={product.name} />
                <p className='cart-name'>{product.name}</p>
            </Link>
            <p>${handlePrice(product.price)}</p>
            <Counter count={product.quantity}
                decrease={() => context.decrease(product)}
                increase={() => context.increase(product)}
                remove={() => context.remove(product)}
            />
            <p className='cart-price'>${handlePrice(product.quantity * product.price)}</p>
        </div>
    )
}

export default CartItem