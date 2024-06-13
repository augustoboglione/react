import {useEffect, useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {CartProvider} from './context/CartContext.jsx'
import {ThemeProvider} from './context/ThemeContext.jsx'
import NavBar from './components/NavBar.jsx'
import Welcome from './components/Welcome.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import Cart from './components/Cart.jsx'
import Checkout from './components/Checkout.jsx'
import PageNotFound from './components/PageNotFound.jsx'
import Footer from './components/Footer.jsx'
import {setStock} from './others/firebase.js'
import './styles.css'

const App = () => {
    const [welcome, setWelcome] = useState(true)

    const start = () => setWelcome(false)

    // useEffect(() => {
    //     setStock(15)
    // }, [])

    return (
        <BrowserRouter>
            <ThemeProvider>
                <CartProvider>
                    <NavBar start={start}/>
                    <Routes>
                        {welcome 
                            ? <Route path='/' element={<Welcome start={start}/>}/>
                            : <Route path='/' element={<ItemListContainer/>}/>
                        }
                        <Route path='/category/:id' element={<ItemListContainer/>}/>
                        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='/checkout' element={<Checkout/>}/>
                        <Route path='/notfound' element={<PageNotFound/>}/>
                        <Route path='*' element={<PageNotFound/>}/>
                    </Routes>
                    <Footer/>
                </CartProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App