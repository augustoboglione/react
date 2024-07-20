import {useContext} from 'react'
import {CartContext} from '../context/CartContext.jsx'
import {ThemeContext} from '../context/ThemeContext.jsx'
import CartList from './CartList.jsx'
import Button from './Button.jsx'
import Loading from './Loading.jsx'
import BinSvg from '../svg/BinSvg.jsx'
import handlePrice from '../modules/price.js'

const Cart = () => {
    const {cart, loaded, clear, totalPrice} = useContext(CartContext)
    const {theme} = useContext(ThemeContext)

    return (
        <div className={`body cart ${theme} ${loaded ? '' : 'loading'}`}>
            {loaded
                ? <>
                    {cart.length
                        ? <div className='title'>
                            <h1>Cart</h1>
                            <div>
                                <Button imgButton onClick={clear}>
                                    <BinSvg/>
                                </Button>
                            </div>
                        </div>
                        : <h1>Your cart is empty</h1>
                    }
                    <CartList/>
                    {!cart.length || <p className='cart-total'>Total: <span>${handlePrice(totalPrice())}</span></p>}
                    <div className='buttons stacked edge'>
                        <Button to='/'>Back to Store</Button>
                        {!cart.length || <Button to='/checkout'>Go to Checkout</Button>}
                    </div>
                </>
                : <Loading/>
            }
        </div>
    )
}

export default Cart