import {useState, useEffect, createContext} from 'react'
import db from '../others/firebase.js'
import {collection, getDocs} from 'firebase/firestore'
import fire from '../others/sweetalert.js'

const CartContext = createContext([])

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        getDocs(collection(db, 'items'))
            .then(snapshot =>  setCart(snapshot.docs.filter(doc => localStorage.getItem(doc.id))
            .map(doc => ({id: doc.id, quantity: parseInt(localStorage.getItem(doc.id)), ...doc.data()}))))
    }, [])

    useEffect(() => {
        cart.forEach(item => localStorage.setItem(item.id, item.quantity))
    }, [cart])

    const add = (item, quantity) => setCart(current => [...current, {...item, quantity}])

    const remove = (item) => {
        fire('Remove', `Do you wish to remove ${item.name} from your cart?`, 'question',
            () => setCart(cart.filter(x => x.id != item.id)), true
        )
        localStorage.removeItem(item.id)
    }

    const clear = (ask = true) => {
        if (ask) fire('Clear cart', 'Do you wish to clear your cart?', 'question', () => {
            setCart([])
            localStorage.clear()
        }, true)
        else {
            setCart([])
            localStorage.clear()
        }
    }

    const increase = (item) => {
        const quantity = cart.find(x => x.id == item.id).quantity

        if (quantity < item.stock) {
            const cartCopy = [...cart]
            cartCopy.find(x => x.id == item.id).quantity++
            setCart(cartCopy)
        }
        else fire('Not enough stock', `We have ${item.stock} item${item.stock == 1 ? '' : 's'} in stock.`, 'error')
    }

    const decrease = (item) => {
        const quantity = cart.find(x => x.id == item.id).quantity

        if (quantity > 1) {
            const cartCopy = [...cart]
            cartCopy.find(x => x.id == item.id).quantity--
            setCart(cartCopy)
        }
        else remove(item)
    }

    const totalQuantity = () => cart.reduce((x, y) => x + y.quantity, 0)

    const totalPrice = () => cart.reduce((x, y) => x + y.quantity * y.price, 0)

    return (
        <CartContext.Provider value={{cart, add, remove, clear, increase, decrease, totalQuantity, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}