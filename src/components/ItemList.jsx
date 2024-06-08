import React from 'react'
import Item from './Item.jsx'

const ItemList = ({products}) => (
    <div className='list'>
        {products.map(product => <Item key={product.id} product={product}></Item>)}
    </div>
)

export default ItemList