import {useState, useEffect, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {CartContext} from '../context/CartContext.jsx'
import {DarkContext} from '../context/DarkContext.jsx'
import CheckoutForm from './CheckoutForm.jsx'
import db from '../others/firebase.js'
import {doc, collection, addDoc, updateDoc, Timestamp} from 'firebase/firestore'
import fire from '../others/sweetalert.js'

const Checkout = () => {
    const [orderId, setOrderId] = useState()

    const {cart, clear, totalPrice} = useContext(CartContext)

    const {dark} = useContext(DarkContext)

    const navigate = useNavigate()

    useEffect(() => {
        if (!cart.length) navigate('/cart')
    }, [])

    useEffect(() => {
        if (orderId) fire('Thank you!', `Thank you for your order! Your order id is ${orderId}.`, 'success', () => {
            clear(false)
            navigate('/')
        })
    }, [orderId])

    const placeOrder = buyer => {
        const {firstName, lastName, email, number} = buyer

        if (!firstName || !lastName || !email || !number)
            fire('Missing fields', 'You must fill in all fields.', 'warning')
        else if (/[^A-Za-zÁÉÍÓÚÑáéíóúñ\s]/.test(firstName))
            fire('Invalid first name', 'Your first name cannot contain special characters.', 'warning')
        else if (/[^A-Za-zÁÉÍÓÚÑáéíóúñ\s]/.test(lastName))
            fire('Invalid last name', 'Your last name cannot contain special characters.', 'warning')
        else if (!/^[^\s]+@[^\s]+\.[A-Za-z]{2,3}$/.test(email))
            fire('Invalid email', 'The email you input is not valid.', 'warning')
        else if (!/^\+?\d+$/.test(number))
            fire('Invalid phone number', 'Your phone number cannot contain non-numerical characters.', 'warning')
        else {
            cart.forEach(item => updateDoc(doc(db, 'items', item.id), {stock: item.stock - item.quantity}))

            addDoc(collection(db, 'orders'), {
                buyer, order: cart, total: totalPrice(), date: Timestamp.fromDate(new Date())
            }).then(ref => setOrderId(ref.id))
        }
    }

    return (
        <div className={`checkout ${dark}`}>
            <h1>Checkout</h1>
            <CheckoutForm placeOrder={placeOrder}/>
        </div>
    )
}

export default Checkout