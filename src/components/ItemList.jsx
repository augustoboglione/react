import React from 'react'
import Item from './Item.jsx'

const ItemList = ({products}) => products.map(product => <Item key={product.id} product={product}></Item>)

export default ItemList