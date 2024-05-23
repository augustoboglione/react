import {useContext} from 'react'
import {CartContext} from '../context/CartContext.jsx'
import Button from './Button.jsx'
import CartItem from './CartItem.jsx'

const Cart = () => {
    const context = useContext(CartContext)
    const cart = context.cart

    if (cart.length) return (
        <div className='cart'>
            <h1>Cart</h1>
            {cart.map(item => <CartItem key={item.id} product={item}/>)}
            <p className='total'>Total: ${context.totalPrice()}</p>
            <div className='buttons'>
                <Button className='text-button' to='/'>Back to store</Button>
                <Button className='text-button' onClick={context.clear}>Clear cart</Button>
                <Button className='text-button' to='/checkout'>Go to checkout</Button>
            </div>
        </div>
    )
    
    return (
        <div className='cart'>
            <h1>Your cart is empty</h1>
            <div className='buttons centered'>
                <Button className='text-button' to='/'>Back to store</Button>
            </div>
        </div>
    )
}

export default Cart