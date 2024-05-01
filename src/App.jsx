import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import './styles.css'

const App = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/category/:id' element={<ItemListContainer/>}/>
                <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                <Route path='*' element={<h1>Page not found</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App