import {useEffect, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {CartContext} from '../context/CartContext.jsx'
import {ThemeContext} from '../context/ThemeContext.jsx'
import CheckoutForm from './CheckoutForm.jsx'

const Checkout = () => {
    const {cart} = useContext(CartContext)

    const {theme} = useContext(ThemeContext)

    const navigate = useNavigate()

    useEffect(() => {
        if (!cart.length) navigate('/cart')
        scroll(0, 0)
    }, [])

    return (
        <div className={`body checkout ${theme}`}>
            <h1>Checkout</h1>
            <CheckoutForm/>
        </div>
    )
}

export default Checkout