import {useState, useEffect, useContext} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {ThemeContext} from '../context/ThemeContext.jsx'
import ItemList from './ItemList'
import Search from './Search.jsx'
import Filter from './Filter.jsx'
import Loading from './Loading.jsx'
import db from '../others/firebase.js'
import {collection, getDocs, query, where} from 'firebase/firestore'
import {handleBounds} from '../others/handleRange.js'

const ItemListContainer = () => {
    const [products, setProducts] = useState()
    const [search, setSearch] = useState([])
    const [inStock, setInStock] = useState(false)
    const [sort, setSort] = useState('name')
    const [maxPrice, setMaxPrice] = useState(0)
    const [bounds, setBounds] = useState([0, 0])

    const category = useParams().id

    const {theme} = useContext(ThemeContext)

    const navigate = useNavigate()

    const handleSearch = e => setSearch(e.target.value.toLowerCase().split(' '))
    const handleInStock = e => setInStock(e.target.checked)
    const handleSort = e => setSort(e.target.value)

    useEffect (() => scroll(0, 0), [])

    useEffect(() => {
        const filtered = category
            ? query(collection(db, 'items'), where('category', '==', category))
            : collection(db, 'items')

        getDocs(filtered).then(snapshot => setProducts(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))))
    }, [category])

    useEffect(() => {
        if (products) {
            if (!products.length) navigate('/notfound')

            const max = Math.max(...products.map(product => product.price))
            setMaxPrice(max)
            setBounds([0, max])
        }
    }, [products])

    return (
        <div className={`body list-container ${theme} ${products ? '' : 'loading'}`}>
            {products
                ? <ItemList products={products} search={search} inStock={inStock} bounds={bounds} sort={sort}/>
                : <Loading/>
            }
            <Search handleSearch={handleSearch}/>
            <Filter max={maxPrice} bounds={bounds} handleInStock={handleInStock} 
                handleBounds={e => handleBounds(e, maxPrice, bounds, setBounds)} handleSort={handleSort}
            />       
        </div>
    )
}

export default ItemListContainer