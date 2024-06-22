import handlePrice from '../modules/price.js'

const RecapItem = ({item}) => (
    <div className='recap-item'>
        <p>{item.quantity}x {item.name}</p>
        <p>${handlePrice(item.quantity * item.price)}</p>
    </div>
)

export default RecapItem