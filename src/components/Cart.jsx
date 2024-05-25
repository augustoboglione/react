import {useContext} from 'react'
import {CartContext} from '../context/CartContext.jsx'
import {DarkContext} from '../context/DarkContext.jsx'
import Button from './Button.jsx'
import CartItem from './CartItem.jsx'
import handlePrice from '../others/handlePrice.js'

const Cart = () => {
    const {cart, clear, totalPrice} = useContext(CartContext)

    const {dark} = useContext(DarkContext)

    if (cart.length) return (
        <div className={`cart ${dark}`}>
            <h1>Cart</h1>
            {cart.map(item => <CartItem key={item.id} product={item}/>)}
            <p className='total'>Total: ${handlePrice(totalPrice())}</p>
            <div className='buttons'>
                <Button to='/'>Back to store</Button>
                <Button onClick={clear}>Clear cart</Button>
                <Button to='/checkout'>Go to checkout</Button>
            </div>
        </div>
    )
    
    return (
        <div className={`cart ${dark}`}>
            <h1>Your cart is empty</h1>
            <div className='buttons centered'>
                <Button to='/'>Back to store</Button>
            </div>
        </div>
    )
}

export default Cart