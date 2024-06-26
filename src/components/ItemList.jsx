import Item from './Item.jsx'

const ItemList = ({products, search, inStock, bounds, sort}) => {
    const list = products
        .filter(product => !inStock || product.stock)
        .filter(product => product.price >= bounds[0] && product.price <= bounds[1])
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
        ).map(product => <Item key={product.id} product={product}></Item>)

    return (
        <div className='list'>
            {list.length ? list : <h1>No results</h1>}
        </div>
    )
}

export default ItemList