import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Hex from './Hex.jsx'
import {getImg} from '../api/api.js'

const Item = (props) => {
    const [img, setImg] = useState()

    useEffect(() => {
        if (props.product) getImg(props.product.id).then(setImg)
    }, [props])

    return (
        <div className={'block' + props.className}>
            <Link className='item' to={`/item/${props.product.id}`}>
                <h2>{props.product.name}</h2>
                <img src={img} alt={props.product.name}/>
                <p>${props.product.price}</p>
                <Hex/>
            </Link>
        </div>
    )
}

export default Item