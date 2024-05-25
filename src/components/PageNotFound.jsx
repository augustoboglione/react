import {useContext} from 'react'
import {DarkContext} from '../context/DarkContext'

const PageNotFound = () => {
    const {dark} = useContext(DarkContext)

    return (
        <div className={`not-found ${dark}`}>
            <h1>Page not found</h1>
        </div>
    )
}

export default PageNotFound