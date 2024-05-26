import {useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'

const PageNotFound = () => {
    const {theme} = useContext(ThemeContext)

    return (
        <div className={`not-found ${theme}`}>
            <h1>Page not found</h1>
        </div>
    )
}

export default PageNotFound