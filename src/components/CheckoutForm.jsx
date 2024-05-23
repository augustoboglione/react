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
                <Input title='first-name' label='First name' onInput={e => setFirstName(e.target.value)}/>
                <Input title='last-name' label='Last name' onInput={e => setLastName(e.target.value)}/>
            </div>
            <div>
                <Input title='email' label='E-mail' onInput={e => setEmail(e.target.value)}/>
                <Input title='number' label='Phone number' onInput={e => setNumber(e.target.value)}/>
            </div>
            <Button className='text-button' type='submit' onClick={() => placeOrder({firstName, lastName, email, number})}>
                Place order
            </Button>
        </form>
    )
}

export default CheckoutForm