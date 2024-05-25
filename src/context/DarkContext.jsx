import {useState, createContext} from 'react'

const DarkContext = createContext('light')

const DarkProvider = ({children}) => {
    const [dark, setDark] = useState('light')

    const toggle = () => {
        if (dark == 'light') setDark('dark')
        else setDark('light')
    }

    return (
        <DarkContext.Provider value={{dark, toggle}}>
            {children}
        </DarkContext.Provider>
    )
}
export {DarkContext, DarkProvider}
