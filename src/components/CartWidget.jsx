import cart from '../assets/cart2.jpg'
import {useState} from 'react'

const CartWidget = () => {
    const [qty, setQty] = useState(4)

    return (
        <div className="cart">
            <img src={cart} alt="Cart" />
            <p>{qty}</p>
        </div>
    )
}

export default CartWidget