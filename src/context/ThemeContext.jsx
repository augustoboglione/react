import {useState, useEffect, createContext} from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState()

    const toggle = () => {
        if (!theme) setTheme('dark')
        else setTheme('')
    }

    useEffect(() => {
        setTheme(localStorage.getItem('theme') ?? '')
    }, [])

    useEffect(() => {
        if (theme != undefined) localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, toggle}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}