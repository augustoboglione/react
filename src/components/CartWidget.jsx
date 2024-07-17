import {useContext} from 'react'
import {CartContext} from '../context/CartContext'
import CartSvg from '../svg/CartSvg.jsx'
import ArrowSvg from '../svg/ArrowSvg.jsx'

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)
    const number = totalQuantity()
    
    return (
        <>
            <CartSvg/>
            <ArrowSvg/>
            <p className={`gradient-text ${number > 99 ? 'overlong' : number > 9 ? 'long' : ''}`}>
                {!!number && number}
            </p>
        </>
    )
}

export default CartWidget