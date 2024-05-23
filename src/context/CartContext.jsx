import {useState, createContext} from 'react'
import fire from '../others/sweetalert.js'

const CartContext = createContext([])

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const add = (item, quantity) => {
        if (quantity <= item.stock) setCart(current => [...current, {...item, quantity}])
        else fire('Not enough stock', `We have ${item.stock} items in stock.`, 'error')
    }

    const remove = (item) => setCart(cart.filter(x => x.id != item.id))

    const increase = (item) => {
        const cartCopy = [...cart]
        cartCopy.find(x => x.id == item.id).quantity++
        setCart(cartCopy)
    }

    const decrease = (item) => {
        const cartCopy = [...cart]
        cartCopy.find(x => x.id == item.id).quantity--
        setCart(cartCopy)
    }

    const totalQuantity = () => cart.reduce((x, y) => x + y.quantity, 0)

    const totalPrice = () => cart.reduce((x, y) => x + y.quantity * y.price, 0)

    const logCart = () => console.log(cart)

    return (
        <CartContext.Provider value={{cart, add, remove, increase, decrease, totalQuantity, totalPrice, logCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}