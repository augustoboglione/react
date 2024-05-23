import React from 'react'
import {useState, useEffect} from 'react'
import Item from './Item.jsx'

const ItemList = ({products, containerWidth}) => {
    const [map, setMap] = useState()
    const [classMap, setClassMap] = useState()
    
    useEffect(() => {
        setMap(products.map(product => <Item key={product.id} product={product}></Item>))
    }, [products])

    useEffect(() => {
        const width = 346
        let n = Math.floor(containerWidth / width + 1 / 3)

        // if (map && Math.ceil((map.length + 2) / 3) < n) n = Math.ceil((map.length + 2) / 3)

        // if (map && map.length < 2 * n - 1) n = Math.floor(map.length / 2)
        // if (n < 2) n = 2

        if (map) setClassMap(map.map((item, i) => {

            if ((i + 1) % (2 * n - 1) == 0) return React.cloneElement(item, {className: ' end long'})
            if ((i + 1) % 3 == 1 && n == 2) {
                if (containerWidth > width * (n + 1 / 2)) return React.cloneElement(item, {className: ' only ext'})
                return React.cloneElement(item, {className: ' only'})
            }
            if ((i + 1) % (2 * n - 1) == 1) return React.cloneElement(item, {className: ' start short'})
            if ((i + 1) % (2 * n - 1) == n - 1) {
                if (containerWidth > width * (n + 1 / 2)) return React.cloneElement(item, {className: ' end short ext'})
                return React.cloneElement(item, {className: ' end short'})
            }
            if ((i + 1) % (2 * n - 1) == n) return React.cloneElement(item, {className: ' start long'})
            return React.cloneElement(item, {className: ''})
        }))
    }, [containerWidth, map])

    return classMap
}

export default ItemList