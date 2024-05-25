import {useState, useEffect, useContext} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {DarkContext} from '../context/DarkContext.jsx'
import ItemList from './ItemList'
import db from '../others/firebase.js'
import {collection, getDocs, query, where} from 'firebase/firestore'


const ItemListContainer = () => {
    const [products, setProducts] = useState()

    const category = useParams().id

    const {dark} = useContext(DarkContext)

    const navigate = useNavigate()

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
        <div className={`list-container ${dark}`}>
            {products ? <ItemList products={products}/> : <h1>Loading Products...</h1>}
        </div>
    )
}

export default ItemListContainer