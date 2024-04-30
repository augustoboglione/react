import React from 'react'
import {useState, useEffect} from 'react'
import Item from './Item.jsx'

const ItemList = (props) => {
    const [map, setMap] = useState()
    const [classMap, setClassMap] = useState()
    
    useEffect(() => {
        setMap(props.products.map(product => <Item key={product.id} product={product}></Item>))
    }, [props])

    useEffect(() => {
        const width = 346
        const n = Math.floor(window.innerWidth / width + 1 / 3)

        if (map) setClassMap(map.map((item, i) => {
            console.log(n)
            if ((i + 1) % (2 * n - 1) == 0) return React.cloneElement(item, {className: ' end long'})
            if ((i + 1) % (2 * n - 1) == 1) return React.cloneElement(item, {className: ' start short'})
            if ((i + 1) % (2 * n - 1) == n - 1) return React.cloneElement(item, {className: ' end short'})
            if ((i + 1) % (2 * n - 1) == n) return React.cloneElement(item, {className: ' start long'})
            return React.cloneElement(item, {className: ''})
        }))
    }, [props, map])

    return classMap
}

export default ItemList