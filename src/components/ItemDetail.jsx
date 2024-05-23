import ItemCount from './ItemCount'

const ItemDetail = ({product}) => (
    <div className='detail'>
        <p className='description'>{product.description}</p>
        <p className='price'>${product.price}</p>
        <ItemCount product={product}/>
    </div>
)

export default ItemDetail