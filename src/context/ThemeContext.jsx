import {useState, createContext} from 'react'

const ThemeContext = createContext('light')

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')

    const toggle = () => {
        if (theme == 'light') setTheme('dark')
        else setTheme('light')
    }

    return (
        <ThemeContext.Provider value={{theme, toggle}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}