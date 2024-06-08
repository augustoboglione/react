import {useContext} from 'react'
import {CartContext} from '../context/CartContext'
import cart from '../assets/cart.svg'

const CartWidget = () => {
    const number = useContext(CartContext).totalQuantity()
    const {show} = useContext(CartContext)
    
    return (
        <>
            <img src={cart} alt='Cart'/>
            <p className={number > 99 ? 'overlong' : number > 9 ? 'long' : ''}>{show && number}</p>
        </>
    )
}

export default CartWidget