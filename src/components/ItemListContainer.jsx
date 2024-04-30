import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList'

const ItemListContainer = (props) => {
    const [content, setContent] = useState(<h1>Loading Products...</h1>)
    const [filtered, setFiltered] = useState()
    const category = useParams().id

    useEffect(() => {
        if (props.products) {
            if (category) setFiltered(props.products.filter(product => product.category == category))
            else setFiltered(props.products)
        }
    }, [props, category])

    useEffect(() => {
        if (filtered) setContent(<ItemList products={filtered}/>)
    }, [filtered])

    return (
        <div className='body'>
            <div className='container'>
                {content}
            </div>
        </div>
    )
}

export default ItemListContainer