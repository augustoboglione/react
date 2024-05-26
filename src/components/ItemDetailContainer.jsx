import {useState, useEffect, useContext} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {ThemeContext} from '../context/ThemeContext.jsx'
import ItemDetail from './ItemDetail.jsx'
import db from '../others/firebase.js'
import {doc, getDoc} from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const id = useParams().id

    const {theme} = useContext(ThemeContext)

    const navigate = useNavigate()

    useEffect(() => {
        getDoc(doc(db, 'items', id)).then(snapshot => setProduct({id: snapshot.id, ...snapshot.data()}))
    }, [id])

    useEffect(() => {
        if (product && !product.name) navigate('/notfound')
    }, [product])

    return (
        <div className={`detail-container ${theme}`}>
            {product ? <ItemDetail product={product}/> : <h1>Loading Product...</h1>}
        </div>
    )
}

export default ItemDetailContainer