import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import ItemDetail from './ItemDetail.jsx'
import db from '../others/firebase.js'
import {doc, getDoc} from 'firebase/firestore'
import getImg from '../others/getImg.js'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [img, setImg] = useState()

    const id = useParams().id

    const navigate = useNavigate()

    useEffect(() => {
        getDoc(doc(db, 'items', id)).then(snapshot => setProduct({id: snapshot.id, ...snapshot.data()}))
        getImg(id).then(setImg)
    }, [id])

    useEffect(() => {
        if (product && !product.name) navigate('/notfound')
    }, [product])

    return (
        <div className='detail-container'>
            {product ? <ItemDetail product={product} img={img}/> : <h1>Loading Product...</h1>}
        </div>
    )
}

export default ItemDetailContainer