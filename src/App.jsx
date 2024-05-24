import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {CartProvider} from './context/CartContext.jsx'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import Cart from './components/Cart.jsx'
import Checkout from './components/Checkout.jsx'
import PageNotFound from './components/PageNotFound.jsx'
import './styles.css'

const App = () => (
    <BrowserRouter>
        <CartProvider>
            <NavBar/>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/category/:id' element={<ItemListContainer/>}/>
                <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/notfound' element={<PageNotFound/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </CartProvider>
    </BrowserRouter>
)

export default App