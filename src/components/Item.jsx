import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import handlePrice from '../others/price.js'
import getImg from '../others/img.js'

const Item = ({product}) => {
    const [img, setImg] = useState()

    useEffect(() => {
        getImg(product.id).then(setImg)
    }, [])

    return (
            <Link to={`/item/${product.id}`}>
                <div className='item shadowed'>
                <h2>{product.name}</h2>
                <img src={img} alt={product.name}/>
                <p>${handlePrice(product.price)}</p>
                </div>
            </Link>
    )
}

export default Item