import {useState, useEffect, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {CartContext} from '../context/CartContext.jsx'
import {ThemeContext} from '../context/ThemeContext.jsx'
import Input from './Input.jsx'
import Button from './Button.jsx'
import db from '../others/firebase.js'
import {doc, collection, addDoc, updateDoc, Timestamp} from 'firebase/firestore'
import fire from '../others/sweetalert.js'

const CheckoutForm = () => {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [street, setStreet] = useState()
    const [number, setNumber] = useState()
    const [city, setCity] = useState()
    const [country, setCountry] = useState()
    const [orderId, setOrderId] = useState()

    const {cart, clear, totalPrice} = useContext(CartContext)

    const {theme} = useContext(ThemeContext)

    const navigate = useNavigate()

    const handleFirstName = e => setFirstName(e.target.value)
    const handleLastName = e => setLastName(e.target.value)
    const handleEmail = e => setEmail(e.target.value)
    const handlePhone = e => setPhone(e.target.value)
    const handleStreet = e => setStreet(e.target.value)
    const handleNumber  = e => setNumber(e.target.value)
    const handleCity = e => setCity(e.target.value)
    const handleCountry = e => setCountry(e.target.value)


    const placeOrder = (e, buyer) => {
        e.preventDefault()

        const {firstName, lastName, email, phone} = buyer

        if (!firstName || !lastName || !email || !phone)
            fire('Missing fields', 'You must fill in all fields.', 'warning', theme)
        else if (/[^A-Za-zÁÉÍÓÚÑáéíóúñ\s]/.test(firstName))
            fire('Invalid first name', 'Your first name cannot contain special characters.', 'warning', theme)
        else if (/[^A-Za-zÁÉÍÓÚÑáéíóúñ\s]/.test(lastName))
            fire('Invalid last name', 'Your last name cannot contain special characters.', 'warning', theme)
        else if (!/^[^\s]+@[^\s]+\.[A-Za-z]{2,3}$/.test(email))
            fire('Invalid email', 'The email you input is not valid.', 'warning', theme)
        else if (!/^\+?\d+$/.test(phone))
            fire('Invalid phone number', 'Your phone number cannot contain non-numerical characters.', 'warning', theme)
        else {
            cart.forEach(item => updateDoc(doc(db, 'items', item.id), {stock: item.stock - item.quantity}))

            addDoc(collection(db, 'orders'), {
                buyer, order: cart, total: totalPrice(), date: Timestamp.fromDate(new Date())
            }).then(ref => setOrderId(ref.id))
        }
    }

    useEffect(() => {
        if (orderId) fire('Thank you!', `Thank you for your order! Your order id is ${orderId}.`, 'success', theme, () => {
            clear(false)
            navigate('/')
        }, false, 'Accept', true)
    }, [orderId])

    return (
        <form onSubmit={e => placeOrder(e, {firstName, lastName, email, phone})}>
            <h2>Name</h2>
            <div className='section'>
                <Input type='text' id='first-name' label='First name' placeholder='John' onInput={handleFirstName}/>
                <Input type='text' id='last-name' label='Last name' placeholder='Appleseed' onInput={handleLastName}/>
            </div>
            <h2>Contact</h2>
            <div className='section'>
                <Input type='text' id='email' label='Email' placeholder='johnappleseed@icloud.com' onInput={handleEmail}/>
                <Input type='text' id='phone' label='Phone number' onInput={handlePhone}/>
            </div>
            <h2>Address</h2>
            <div className='section'>
                <Input type='text' id='street' label='Street' placeholder='Apple Park Way' onInput={handleStreet}/>
                <Input type='text' id='number' label='Number' placeholder='1' onInput={handleNumber}/>
            </div>
            <div className='section'>
                <Input type='text' id='city' label='City' placeholder='Cupertino' onInput={handleCity}/>
                <Input type='text' id='country' label='Country' onInput={handleCountry}/>
            </div>
            <div className='buttons edge stacked'>
                <Button to='/cart'>Back to Cart</Button>
                <Button className='text-button' type='submit'>Place order</Button>
            </div>
        </form>
    )
}

export default CheckoutForm