import {useState, useEffect, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {CartContext} from '../context/CartContext.jsx'
import Input from './Input.jsx'
import Button from './Button.jsx'
import db from '../others/firebase.js'
import {collection, getDoc, addDoc} from 'firebase/firestore'
import fire from '../others/sweetalert.js'

const CheckoutForm = () => {
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()
    const [number, setNumber] = useState()
    const [orderId, setOrderId] = useState()

    const cart = useContext(CartContext).cart

    const navigate = useNavigate()

    const placeOrder = () => addDoc(collection(db, 'orders'), {name, surname, email, number, order: cart})
        .then(ref => getDoc(ref))
        .then(snapshot => setOrderId(snapshot.id))

    useEffect(() => {
        if (orderId) fire('Thank you!', `Thank you for your order! Your order id is ${orderId}.`, 'success', () => navigate('/'))
    }, [orderId])

    return (
        <div className='body'>
            <form onSubmit={e => e.preventDefault()}>
                <Input title='name' label='Name' onInput={e => setName(e.target.value)}></Input>
                <Input title='surname' label='Surname' onInput={e => setSurname(e.target.value)}></Input>
                <Input title='email' label='E-mail' onInput={e => setEmail(e.target.value)}></Input>
                <Input title='number' label='Phone number' onInput={e => setNumber(e.target.value)}></Input>
                <Button type='submit' title='submit' onClick={placeOrder}>Place order</Button>
            </form>
        </div>
    )
}

export default CheckoutForm