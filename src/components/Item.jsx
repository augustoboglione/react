import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import AsyncImg from './AsyncImg.jsx'
import handlePrice from '../others/price.js'

const Item = ({product}) => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => setLoaded(true), [])

    return (
        <Link className={`item square shadowed ${loaded ? 'loaded' : ''}`} to={`/item/${product.id}`}>
            <h2>{product.name}</h2>
            <AsyncImg className='item-img' src={product.img} alt={product.name}/>
            <p>${handlePrice(product.price)}</p>
        </Link>
    )
}

export default Item