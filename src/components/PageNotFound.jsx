import {useEffect, useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'

const PageNotFound = () => {
    const {theme} = useContext(ThemeContext)

    useEffect(() => scroll(0, 0), [])

    return (
        <div className={`body not-found ${theme}`}>
            <h1>Page not found</h1>
        </div>
    )
}

export default PageNotFound