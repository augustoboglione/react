import {Link} from 'react-router-dom'
import AsyncImg from './AsyncImg.jsx'
import handlePrice from '../others/handlePrice.js'

const Item = ({product}) => (
    <Link className='item square shadowed' to={`/item/${product.id}`}>
        <h2>{product.name}</h2>
        <AsyncImg className='item-img' src={product.img} alt={product.name}/>
        <p>${handlePrice(product.price)}</p>
    </Link>
)

export default Item