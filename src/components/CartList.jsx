import {useState, useEffect, useContext} from 'react'
import {CartContext} from '../context/CartContext.jsx'
import CartItem from './CartItem.jsx'

const CartList = () => {
    const [long, setLong] = useState(true)
    const [mounted, setMounted] = useState(false)

    const {cart} = useContext(CartContext)

    const handleResize = () => {
        if (window.innerWidth < 1200) setLong(false)
        else setLong(true)
    }

    useEffect(() => {
        scroll(0, 0)

        setMounted(true)

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className='cart-list'>
            {mounted && cart.sort((x, y) => {
                if (x.name.toLowerCase() < y.name.toLowerCase()) return -1
                else return 1
            }).map(item => <CartItem key={item.id} product={item} long={long}/>)}
        </div>
    )
}

export default CartList