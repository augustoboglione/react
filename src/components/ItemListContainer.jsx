import {useState, useEffect, useContext} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {ThemeContext} from '../context/ThemeContext.jsx'
import Search from './Search.jsx'
import ItemList from './ItemList'
import Filter from './Filter.jsx'
import Loading from './Loading.jsx'
import db from '../others/firebase.js'
import {collection, getDocs, query, where} from 'firebase/firestore'

const ItemListContainer = () => {
    const [products, setProducts] = useState()
    const [search, setSearch] = useState('')
    const [inStock, setInStock] = useState(false)
    const [sort, setSort] = useState('name')

    const category = useParams().id

    const {theme} = useContext(ThemeContext)

    const navigate = useNavigate()

    const handleSearch = e => setSearch(e.target.value.toLowerCase())
    const handleInStock = e => setInStock(e.target.checked)
    const handleSort = e => setSort(e.target.value)

    useEffect(() => {
        const filtered = category
            ? query(collection(db, 'items'), where('category', '==', category))
            : collection(db, 'items')

        getDocs(filtered).then(snapshot => setProducts(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))))
    }, [category])

    useEffect(() => {
        if (products && !products.length) navigate('/notfound')
    }, [products])

    return (
        <div className={`list-container ${theme}`}>
            <Search onInput={handleSearch}/>
            <div>
                <Filter handleInStock={handleInStock} handleSort={handleSort}/>
                {products
                    ? <ItemList products={products} search={search} inStock={inStock} sort={sort}/>
                    : <Loading/>
                }
            </div>            
        </div>
    )
}

export default ItemListContainer