import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList'
import {getProducts} from '../api/api.js'

const ItemListContainer = () => {
    const [content, setContent] = useState(<h1 style={{marginTop: -66.5}}>Loading Products...</h1>)
    const [products, setProducts] = useState()

    const category = useParams().id

    useEffect(() => {
        getProducts(category).then(setProducts)
    }, [category])

    useEffect(() => {
        if (products) setContent(<ItemList products={products}/>)
    }, [products])

    return (
        <div className='body'>
            <div className='list-container'>
                {content}
            </div>
        </div>
    )
}

export default ItemListContainer