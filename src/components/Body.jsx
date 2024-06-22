import {useState, useEffect, useContext} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {AlertContext} from '../context/AlertContext.jsx'
import NavBar from './NavBar.jsx'
import Welcome from './Welcome.jsx'
import ItemListContainer from './ItemListContainer.jsx'
import ItemDetailContainer from './ItemDetailContainer.jsx'
import Cart from './Cart.jsx'
import Checkout from './Checkout.jsx'
import PageNotFound from './PageNotFound.jsx'
import Footer from './Footer.jsx'
import Alert from './Alert.jsx'
import {setStock} from '../modules/firebase.js'
import {handleScroll} from '../modules/slide.js'

const Body = () => {
    const [welcome, setWelcome] = useState(true)

    const {alert} = useContext(AlertContext)

    const start = () => setWelcome(false)

    useEffect(() => {
        // setStock(15)
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <BrowserRouter>
            <NavBar start={start} welcome={welcome}/>
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
            <Footer welcome={welcome}/>
            {alert && <Alert/>}
        </BrowserRouter>
    )
}

export default Body