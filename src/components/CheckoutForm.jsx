import {useState} from 'react'
import Input from './Input.jsx'
import Button from './Button.jsx'

const CheckoutForm = ({placeOrder}) => {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [number, setNumber] = useState()

    return (
        <form className='shadowed' onSubmit={e => e.preventDefault()}>
            <div>
                <Input type='text' id='first-name' label='First name' onInput={e => setFirstName(e.target.value)}/>
                <Input type='text' id='last-name' label='Last name' onInput={e => setLastName(e.target.value)}/>
            </div>
            <div>
                <Input type='text' id='email' label='E-mail' onInput={e => setEmail(e.target.value)}/>
                <Input type='text' id='number' label='Phone number' onInput={e => setNumber(e.target.value)}/>
            </div>
            <Button className='text-button' type='submit' onClick={() => placeOrder({firstName, lastName, email, number})}>
                Place order
            </Button>
        </form>
    )
}

export default CheckoutForm