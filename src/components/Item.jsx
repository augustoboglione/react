import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import handlePrice from '../others/handlePrice.js'
import getImg from '../others/getImg.js'

const Item = ({product}) => {
    const [img, setImg] = useState()

    useEffect(() => {
        getImg(product.id).then(setImg)
    }, [])

    return (
        <Link className='item shadowed' to={`/item/${product.id}`}>
            <h2>{product.name}</h2>
            <img src={img} alt={product.name}/>
            <p>${handlePrice(product.price)}</p>
        </Link>
    )
}

export default Item