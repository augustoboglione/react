import {useContext} from 'react'
import {CartContext} from '../context/CartContext.jsx'
import Button from './Button.jsx'
import CartItem from './CartItem.jsx'

const Cart = () => {
    const cart = useContext(CartContext).cart

    return (
        <div className='body'>
            <div className='checkout'>
                {cart.length ? <h1>Cart</h1> : <h1>Your cart is empty</h1>}
                {cart.map(item => <CartItem key={item.id} product={item}></CartItem>)}
                <div className='buttons'>
                    <Button to='/'>Back to store</Button>
                    {cart.length ? <Button to='/checkout'>Go to checkout</Button> : <></>}
                </div>
            </div>
        </div>
    )
}

export default Cart