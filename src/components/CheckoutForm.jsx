import {useState, useEffect, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {CartContext} from '../context/CartContext.jsx'
import {ThemeContext} from '../context/ThemeContext.jsx'
import Input from './Input.jsx'
import Button from './Button.jsx'
import db from '../others/firebase.js'
import {doc, collection, addDoc, updateDoc, Timestamp} from 'firebase/firestore'
import {handleInput, setPosition} from '../others/formValidation.js'
import fire from '../others/sweetalert.js'

const CheckoutForm = () => {
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [street, setStreet] = useState(null)
    const [number, setNumber] = useState(null)
    const [city, setCity] = useState(null)
    const [country, setCountry] = useState(null)
    const [orderId, setOrderId] = useState(null)

    const {cart, clear, totalPrice} = useContext(CartContext)

    const {theme} = useContext(ThemeContext)

    const navigate = useNavigate()

    const handleFirstName = e => handleInput(e, setFirstName)
    const handleLastName = e => handleInput(e, setLastName)
    const handleEmail = e => handleInput(e, setEmail)
    const handlePhone = e => handleInput(e, setPhone)
    const handleStreet = e => handleInput(e, setStreet)
    const handleNumber  = e => handleInput(e, setNumber)
    const handleCity = e => handleInput(e, setCity)
    // const handleCountry = e => (e, setCountry)

    const placeOrder = (e, buyer) => {
        e.preventDefault()

        const {firstName, lastName, email, phone, street, number, city, country} = buyer

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
        window.addEventListener('scroll', () => {
            Array.from(document.querySelectorAll('.checkout input')).forEach(element => setPosition(element.id))
        })
        window.addEventListener('resize', () => {
            Array.from(document.querySelectorAll('.checkout input')).forEach(element => setPosition(element.id))
        })
    }, [])

    useEffect(() => {
        if (orderId) fire('Thank you!', `Thank you for your order! Your order id is ${orderId}.`, 'success', theme, () => {
            clear(false)
            navigate('/')
        }, false, 'Accept', true)
    }, [orderId])

    return (
        <form onSubmit={e => placeOrder(e, {firstName, lastName, email, phone, street, number, city, country})}>
            <h2>Name</h2>
            <section>
                <Input type='text' id='first-name' label='First name' placeholder='John' required onInput={handleFirstName}/>
                <Input type='text' id='last-name' label='Last name' placeholder='Appleseed' required onInput={handleLastName}/>
            </section>
            <h2>Contact</h2>
            <section>
                <Input type='email' id='email' label='Email' placeholder='johnappleseed@icloud.com' required onInput={handleEmail}/>
                <Input type='text' id='phone' label='Phone number' onInput={handlePhone}/>
            </section>
            <h2>Address</h2>
            <section>
                <Input type='text' id='street' label='Street' placeholder='Apple Park Way' onInput={handleStreet}/>
                <Input type='text' id='number' label='Number' placeholder='1' onInput={handleNumber}/>
            </section>
            <section>
                <Input type='text' id='city' label='City' placeholder='Cupertino' onInput={handleCity}/>
                <Input type='text' id='country' label='Country'/>
            </section>
            <div className='buttons edge stacked'>
                <Button to='/cart'>Back to Cart</Button>
                <Button className='text-button' type='submit'>Place order</Button>
            </div>
        </form>
    )
}

export default CheckoutForm