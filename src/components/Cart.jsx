import {useContext, useEffect} from 'react'
import {CartContext} from '../context/CartContext.jsx'
import {ThemeContext} from '../context/ThemeContext.jsx'
import Button from './Button.jsx'
import CartItem from './CartItem.jsx'
import Loading from './Loading.jsx'
import handlePrice from '../others/price.js'
import bin from '/assets/bin.svg'

const Cart = () => {
    const {cart, loaded, clear, totalPrice} = useContext(CartContext)

    const {theme} = useContext(ThemeContext)

    useEffect(() => scroll(0, 0), [])

    return (
        <div className={`body cart ${theme} ${loaded ? '' : 'loading'}`}>
            {loaded
                ? <>
                    {cart.length 
                        ? <div className='title'>
                            <h1>Cart</h1>
                            <div>
                                <Button className='img-button red' onClick={clear}><img src={bin}/></Button>
                            </div>
                        </div>
                        : <h1>Your cart is empty</h1>
                    }
                    {cart.sort((x, y) => {
                        if (x.name.toLowerCase() < y.name.toLowerCase()) return -1
                        else return 1
                    }).map(item => <CartItem key={item.id} product={item}/>)}
                    {!cart.length || <p className='cart-total'>Total: <span>${handlePrice(totalPrice())}</span></p>}
                    <div className={`buttons stacked edge`}>
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