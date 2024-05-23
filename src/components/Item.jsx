import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Hex from './Hex.jsx'
import {getImg} from '../api/api.js'

const Item = ({product, className}) => {
    const [img, setImg] = useState()

    useEffect(() => {
        //getImg(product.id).then(setImg)
    }, [])

    return (
        <div className={'block' + className}>
            <Link className='item' to={`/item/${product.id}`}>
                <h2>{product.name}</h2>
                <img src={img} alt={product.name}/>
                <p>${product.price}</p>
                <Hex/>
            </Link>
        </div>
    )
}

export default Item