import {useState} from 'react'
import Input from './Input.jsx'
import Button from './Button.jsx'

const CheckoutForm = ({placeOrder}) => {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [number, setNumber] = useState()

    const handleFirstName = e => setFirstName(e.target.value)
    const handleLastName = e => setLastName(e.target.value)
    const handleEmail = e => setEmail(e.target.value)
    const handleNumber = e => setNumber(e.target.value)

    return (
        <form className='shadowed' onSubmit={e => e.preventDefault()}>
            <div>
                <Input type='text' id='first-name' label='First name' onInput={handleFirstName}/>
                <Input type='text' id='last-name' label='Last name' onInput={handleLastName}/>
            </div>
            <div>
                <Input type='text' id='email' label='E-mail' onInput={handleEmail}/>
                <Input type='text' id='number' label='Phone number' onInput={handleNumber}/>
            </div>
            <Button className='text-button' type='submit' onClick={() => placeOrder({firstName, lastName, email, number})}>
                Place order
            </Button>
        </form>
    )
}

export default CheckoutForm