import {useContext} from 'react'
import {CartContext} from '../context/CartContext'
import cart from '../assets/cart.png'

const CartWidget = () => {
    const number = useContext(CartContext).totalQuantity()
    
    return (
        <>
            <img src={cart} alt='Cart'/>
            <p className={number > 9 ? 'overflow' : ''}>{number}</p>
        </>
    )
}

export default CartWidget