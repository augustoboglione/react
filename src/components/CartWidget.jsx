import {useContext} from 'react'
import {CartContext} from '../context/CartContext'
import cart from '/assets/cart.svg'

const CartWidget = () => {
    const {loaded, totalQuantity} = useContext(CartContext)
    const number = totalQuantity()
    
    return (
        <>
            <img src={cart} alt='Cart'/>
            <p className={number > 99 ? 'overlong' : number > 9 ? 'long' : ''}>{loaded && number}</p>
        </>
    )
}

export default CartWidget