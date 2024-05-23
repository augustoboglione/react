import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail.jsx'
import db from '../others/firebase.js'
import {doc, getDoc} from 'firebase/firestore'

const Content = ({product, img}) => (
    <>
        <h1>{product.name}</h1>
        <div>
            <div>
                <img src={img} alt={product.name}/>
            </div>
            <ItemDetail product={product}/>
        </div>
    </>
)

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [img, setImg] = useState()

    const id = useParams().id

    useEffect(() => {
        getDoc(doc(db, 'items', id)).then(snapshot => setProduct({id: snapshot.id, ...snapshot.data()}))
        //getImg(id).then(setImg)
    }, [])

    return (
        <div className='body'>
            <div className='detail-container'>
                {product ? <Content product={product} img={img}/> : <h1>Loading Product...</h1>}
            </div>
        </div>
    )
}

export default ItemDetailContainer