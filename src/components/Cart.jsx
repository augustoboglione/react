import {useContext} from 'react'
import {CartContext} from '../context/CartContext.jsx'
import {ThemeContext} from '../context/ThemeContext.jsx'
import Button from './Button.jsx'
import CartItem from './CartItem.jsx'
import Loading from './Loading.jsx'
import handlePrice from '../others/handlePrice.js'

const Cart = () => {
    const {cart, loaded, clear, totalPrice} = useContext(CartContext)

    const {theme} = useContext(ThemeContext)

    return (
        <div className={`cart ${theme} ${loaded ? '' : 'loading'}`}>
            {loaded
                ? <>
                    {cart.length ? <h1>Cart</h1> : <h1>Your cart is empty</h1>}
                    {cart.sort((x, y) => {
                        if (x.name.toLowerCase() < y.name.toLowerCase()) return -1
                        else return 1
                    }).map(item => <CartItem key={item.id} product={item}/>)}
                    {!cart.length || <p className='total'>Total: ${handlePrice(totalPrice())}</p>}
                    <div className={`buttons stacked ${cart.length ? 'edge' : ''}`}>
                        <div><Button to='/'>Back to Store</Button></div>
                        {!cart.length
                            || <>
                                <div><Button onClick={clear}>Clear Cart</Button></div>
                                <div><Button to='/checkout'>Go to Checkout</Button></div>
                            </>
                        }
                    </div>
                </>
                : <Loading/>
            }
        </div>
    )
}

export default Cart