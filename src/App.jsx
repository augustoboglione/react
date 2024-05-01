import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import {getProducts} from './api/api.js'
import './styles.css'

const App = () => {
    const [products, setProducts] = useState()

    useEffect(() => {getProducts().then(setProducts)}, [])

    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<ItemListContainer products={products}/>}/>
                <Route path='/category/:id' element={<ItemListContainer products={products}/>}/>
                <Route path='/item/:id' element={<ItemDetailContainer products={products}/>}/>
                <Route path='*' element={<h1>Page not found</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App