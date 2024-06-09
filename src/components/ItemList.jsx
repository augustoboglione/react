import Item from './Item.jsx'

const ItemList = ({products, search, sort}) => (
    <div className='list'>
        {products
            .filter(product => product.name.toLowerCase().match(search))
            .sort(sort == 'increasing'
                ? (a, b) => a.price - b.price
                : sort == 'decreasing'
                ? (a, b) => b.price - a.price
                : (a, b) => {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
                    else return 1
                }
            ).map(product => <Item key={product.id} product={product}></Item>)}
    </div>
)

export default ItemList