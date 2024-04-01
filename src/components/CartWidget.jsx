import cart from '../assets/cart.png'
import {useState} from 'react'

const CartWidget = () => {
    const [qty, setQty] = useState(0)
    return (
        <div className={"cart" + (qty > 9 ? " overflow" : "")} onClick={() => qty < 99 ? setQty(qty + 1) : setQty(0)}>
            <img src={cart} alt="Cart"/>
            <p>{qty}</p>
        </div>
    )
}

export default CartWidget