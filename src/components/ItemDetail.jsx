import ItemCount from './ItemCount'

const ItemDetail = (props) => {
    return (
        <div className='detail'>
            <p className='description'>{props.product.description}</p>
            <p className='price'>${props.product.price}</p>
            <ItemCount stock={props.product.stock}/>
        </div>
    )
}

export default ItemDetail