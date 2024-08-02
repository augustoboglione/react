import {useState, useEffect, useContext, createContext} from 'react'
import {AlertContext} from './AlertContext.jsx'
import db from '../modules/firebase.js'
import {collection, getDocs} from 'firebase/firestore'

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [loaded, setLoaded] = useState(false)

    const {fire} = useContext(AlertContext)

    const add = (item, quantity) => setCart(current => [...current, {...item, quantity}])

    const remove = (e, item) => {
        e?.preventDefault()

        fire('Remove', `Do you wish to remove ${item.name} from your cart?`, () => {
            setCart(cart.filter(x => x.id != item.id))
            localStorage.removeItem(item.id)
        }, 'Cancel')
    }

    const clear = (ask = true) => {
        if (ask) fire('Clear cart', 'Do you wish to clear your cart?', () => {
            setCart([])
            localStorage.clear()
        }, 'Cancel')
        else {
            setCart([])
            localStorage.clear()
        }
    }

    const increase = (e, item) => {
        e.preventDefault()

        const quantity = cart.find(x => x.id == item.id).quantity

        if (quantity < item.stock) {
            const cartCopy = [...cart]
            cartCopy.find(x => x.id == item.id).quantity++
            setCart(cartCopy)
        }
        else fire('Not enough stock', `We have ${item.stock} item${item.stock == 1 ? '' : 's'} in stock.`)
    }

    const decrease = (e, item) => {
        e.preventDefault()

        const quantity = cart.find(x => x.id == item.id).quantity

        if (quantity > 1) {
            const cartCopy = [...cart]
            cartCopy.find(x => x.id == item.id).quantity--
            setCart(cartCopy)
        }
        else remove(null, item)
    }

    const totalQuantity = () => cart.reduce((x, y) => x + y.quantity, 0)

    const totalPrice = () => cart.reduce((x, y) => x + y.quantity * y.price, 0)

    useEffect(() => {
        getDocs(collection(db, 'items'))
            .then(snapshot =>  setCart(snapshot.docs.filter(doc => localStorage.getItem(doc.id))
            .map(doc => ({id: doc.id, quantity: parseInt(localStorage.getItem(doc.id)), ...doc.data()}))))
            .then(() => setLoaded(true))
    }, [])

    useEffect(() => {
        cart.forEach(item => localStorage.setItem(item.id, item.quantity))
    }, [cart])

    return (
        <CartContext.Provider value={{cart, loaded, add, remove, clear, increase, decrease, totalQuantity, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}