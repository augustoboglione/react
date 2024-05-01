import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail.jsx'
import {getProducts, getImg} from '../api/api.js'

const ItemDetailContainer = () => {
    const [content, setContent] = useState(<h1>Loading Product...</h1>)
    const [product, setProduct] = useState()
    const [img, setImg] = useState()

    const id = parseInt(useParams().id)

    useEffect(() => {
        getProducts(id).then(setProduct)
        getImg(id).then(setImg)
    }, [])

    useEffect(() => {
        if (product) setContent(
            <>
                <h1>{product.name}</h1>
                <div>
                    <div>
                        <img src={img} alt={product.name}/>
                    </div>
                    <ItemDetail product={product}/>
                </div>
            </>
        )
    }, [product, img])

    return (
        <div className='body'>
            <div className='detail-container'>
                {content}
            </div>
        </div>
    )
}

export default ItemDetailContainer