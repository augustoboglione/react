import {useContext} from 'react'
import {CartContext} from '../context/CartContext.jsx'
import Slide from './Slide.jsx'
import RecapItem from './RecapItem.jsx'
import handlePrice from '../others/price.js'

const Recap = () => {
    const {cart, totalPrice} = useContext(CartContext)

    return(
        <Slide className='recap'>
            {cart.map(item => <RecapItem key={item.id} item={item}/>)}
            <div>
            <p className='recap-total'>Total: ${handlePrice(totalPrice())}</p>
            </div>
        </Slide>
    )
}

export default Recap