import {useState, useEffect, useContext} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {ThemeContext} from '../context/ThemeContext.jsx'
import Search from './Search.jsx'
import ItemList from './ItemList'
import Filter from './Filter.jsx'
import db from '../others/firebase.js'
import {collection, getDocs, query, where} from 'firebase/firestore'
import loading from '../assets/loading2.svg'


const ItemListContainer = () => {
    const [products, setProducts] = useState()
    const [sort, setSort] = useState('alphabetical')
    const [search, setSearch] = useState('')

    const category = useParams().id

    const {theme} = useContext(ThemeContext)

    const navigate = useNavigate()

    const handleSort = () => setSort(document.querySelector('input[name="sort"]:checked').id)

    const handleSearch = e => setSearch(e.target.value.toLowerCase())

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
            {products
                ? <>
                    <Search onInput={handleSearch}/>
                    <div>
                        <Filter handleSort={handleSort} sort={sort}/>
                        <ItemList products={products} search={search} sort={sort}/>
                    </div>
                </>
                : <img className='loading' src={loading} alt='Loading'/>
            }
        </div>
    )
}

export default ItemListContainer