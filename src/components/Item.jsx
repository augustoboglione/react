import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import handlePrice from '../others/handlePrice.js'

const Item = ({product}) => (
    <Link className='item shadowed' to={`/item/${product.id}`}>
        <h2>{product.name}</h2>
        <img src={product.img} alt={product.name}/>
        <p>${handlePrice(product.price)}</p>
    </Link>
)

export default Item