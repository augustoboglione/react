import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList'
import db from '../others/firebase.js'
import {collection, getDocs, query, where} from 'firebase/firestore'


const ItemListContainer = () => {
    const [products, setProducts] = useState()
    const [width, setWidth] = useState()

    const category = useParams().id

    const getWidth = () => document.querySelector('.list-container').offsetWidth

    useEffect(() => {
        setWidth(getWidth())
        window.addEventListener('resize', () => setWidth(getWidth()))
        return () => window.removeEventListener('resize', () => setWidth(getWidth()))
    }, [])

    useEffect(() => {
        const filtered = category
            ? query(collection(db, 'items'), where('category', '==', category))
            : collection(db, 'items')

        getDocs(filtered).then(snapshot => setProducts(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))))
    }, [category])

    return (
        <div className='list-container'>
            {products ? <ItemList products={products} containerWidth={width}/> : <h1>Loading Products...</h1>}
        </div>
    )
}

export default ItemListContainer