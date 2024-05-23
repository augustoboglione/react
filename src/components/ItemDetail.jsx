import ItemCount from './ItemCount'

const ItemDetail = ({product, img}) => (
    <>
        <h1>{product.name}</h1>
        <div>
            <div>
                <img className='detail-img' src={img} alt={product.name}/>
            </div>
            <div className='shadowed'>
                <p className='detail-description'>{product.description}</p>
                <p className='detail-price'>${product.price}</p>
                <ItemCount product={product}/>
            </div>
        </div>
    </>
)

export default ItemDetail