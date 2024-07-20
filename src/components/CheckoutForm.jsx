import {useState, useEffect, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {CartContext} from '../context/CartContext.jsx'
import {ThemeContext} from '../context/ThemeContext.jsx'
import {AlertContext} from '../context/AlertContext.jsx'
import Input from './Input.jsx'
import Button from './Button.jsx'
import AsyncImg from './AsyncImg.jsx'
import db from '../modules/firebase.js'
import {doc, collection, addDoc, updateDoc, Timestamp} from 'firebase/firestore'
import handleInput from '../modules/formValidation.js'
import {countries, flag} from '../modules/countries.js'

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
    const {fire} = useContext(AlertContext)

    const navigate = useNavigate()

    const handleFirstName = e => handleInput(e, setFirstName)
    const handleLastName = e => handleInput(e, setLastName)
    const handleEmail = e => handleInput(e, setEmail)
    const handlePhone = e => handleInput(e, setPhone)
    const handleStreet = e => handleInput(e, setStreet)
    const handleNumber  = e => handleInput(e, setNumber)
    const handleCity = e => handleInput(e, setCity)
    const handleCountry = e => setCountry(e.currentTarget.id)

    const placeOrder = (e, buyer) => {
        e.preventDefault()

        console.log(Object.values(buyer))

        if (document.querySelector('.incorrect'))
            scroll({top: window.scrollY + document.querySelector('.incorrect').getBoundingClientRect().top - 140, behavior: 'smooth'})
        else if (Object.values(buyer).find(field => field === null) === null)
            fire('Missing fields', 'You must fill in all fields.', 'warning', theme)
        else {
            cart.forEach(item => updateDoc(doc(db, 'items', item.id), {stock: item.stock - item.quantity}))

            addDoc(collection(db, 'orders'), {
                buyer, order: cart, total: totalPrice(), date: Timestamp.fromDate(new Date())
            }).then(ref => setOrderId(ref.id))
        }
    }

    useEffect(() => {
        if (orderId) fire('Thank you!', `Thank you for your order! Your order id is ${orderId}.`, 'tick', () => {
            clear(false)
            navigate('/')
        })
    }, [orderId])

    return (
        <form onSubmit={e => placeOrder(e, {firstName, lastName, email, phone, street, number, city, country})}>
            <h2>Name</h2>
            <section>
                <Input type='text' id='first-name' label='First name' placeholder='John' onInput={handleFirstName}/>
                <Input type='text' id='last-name' label='Last name' placeholder='Appleseed' onInput={handleLastName}/>
            </section>
            <h2>Address</h2>
            <section>
                <Input type='text' id='street' label='Street' placeholder='Apple Park Way' onInput={handleStreet}/>
                <Input type='text' id='number' label='Number' placeholder='1' onInput={handleNumber}/>
            </section>
            <section>
                <Input type='text' id='city' label='City' placeholder='Cupertino' onInput={handleCity}/>
                <Input type='select' id='country' label='Country' selected={country}>
                    {Object.keys(countries).map(code => (
                        <li key={code} id={code} onClick={handleCountry}>
                            <AsyncImg className='flag' src={flag(code)} alt={countries[code]}/>
                            <p>{countries[code]}</p>
                        </li>
                    ))}
                </Input>
            </section>
            <h2>Contact</h2>
            <section>
                <Input type='text' id='email' label='Email' placeholder='johnappleseed@icloud.com' onInput={handleEmail}/>
                <Input type='text' id='phone' label='Phone number' onInput={handlePhone}/>
            </section>
            <div className='buttons edge stacked'>
                <Button to='/cart'>Back to Cart</Button>
                <Button className='text-button' type='submit'>Place order</Button>
            </div>
        </form>
    )
}

export default CheckoutForm