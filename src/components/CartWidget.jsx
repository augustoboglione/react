import {useContext} from 'react'
import {CartContext} from '../context/CartContext'
import cart from '../assets/cart.png'

const CartWidget = () => {
    const quantity = useContext(CartContext).totalQuantity()
    
    return (
        <div>
            <img src={cart} alt='Cart'/>
            <p className={quantity > 9 ? 'overflow' : ''}>{quantity}</p>
        </div>
    )
}

export default CartWidget