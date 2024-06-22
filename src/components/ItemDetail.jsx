import ItemCount from './ItemCount'
import AsyncImg from './AsyncImg'
import handlePrice from '../modules/price.js'

const ItemDetail = ({product}) => (
    <>
        <h1>{product.name}</h1>
        <div className='detail'>
            <div>
                <AsyncImg className='detail-img' src={product.img} alt={product.name}/>
            </div>
            <div className='square shadowed'>
                <p className='detail-description'>{product.description}</p>
                <p className='detail-price'>${handlePrice(product.price)}</p>
                <ItemCount product={product}/>
            </div>
        </div>
    </>
)

export default ItemDetail