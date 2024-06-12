import Item from './Item.jsx'

const ItemList = ({products, search, inStock, sort}) => (
    <div className='list'>
        {products
            .filter(product => !inStock || product.stock)
            .filter(product => {
                const name = product.name.toLowerCase().split(' ')

                return search.map(searchWord =>
                    name.map(nameWord => !!nameWord.match(searchWord)).reduce((x, y) => x || y, false)
                ).reduce((x, y) => x && y, true)
            }).sort(sort == 'increasing'
                ? (x, y) => x.price - y.price
                : 
            sort == 'decreasing'
                ? (x, y) => y.price - x.price
                : (x, y) => {
                    if (x.name.toLowerCase() < y.name.toLowerCase()) return -1
                    else return 1
                }
            ).map(product => <Item key={product.id} product={product}></Item>)}
    </div>
)

export default ItemList