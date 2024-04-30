import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Button from './Button.jsx'
import {getImg} from '../api/api.js'

const ItemDetailContainer = (props) => {
    const [content, setContent] = useState(<h1>Loading Product...</h1>)
    const [product, setProduct] = useState()
    const [img, setImg] = useState()

    const id = parseInt(useParams().id)

    useEffect(() => {
        getImg(id).then(setImg)
    }, [])

    useEffect(() => {
        if (props.products) setProduct(props.products.find(product => product.id == id))
    }, [props])

    useEffect(() => {
        if (product) setContent(
            <>
                <h1>{product.name}</h1>
                <div>
                    <div>
                        <img src={img} alt={product.name}/>
                    </div>
                    <div>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <Button>Add to Cart</Button>
                    </div>
                </div>
            </>
        )
    }, [product, img])

    return (
        <div className='detail'>
            {content}
        </div>
    )
}

export default ItemDetailContainer