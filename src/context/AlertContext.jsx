import {useState, createContext} from 'react'

const AlertContext = createContext()

const AlertProvider = ({children}) => {
    const [alert, setAlert] = useState(false)
    const [willUnmount, setWillUnmount] = useState(false)

    const [title, setTitle] = useState(null)
    const [text, setText] = useState(null)
    const [confirm, setConfirm] = useState(null)
    const [cancel, setCancel] = useState(null)
    const [callback, setCallback] = useState(null)

    const fire = (title, text, callback = null, cancel = null, confirm = 'Accept') => {
        setAlert(true)
        setTitle(title)
        setText(text)
        setConfirm(confirm)
        setCancel(cancel)
        setCallback(() => callback)
    }

    const clear = () => {
        setWillUnmount(true)

        setTimeout(() => {
            setAlert(false)
            setWillUnmount(false)
        }, 300)
    }

    return (
        <AlertContext.Provider value={{alert, willUnmount, title, text, callback, cancel, confirm, fire, clear}}>
            {children}
        </AlertContext.Provider>
    )
}

export {AlertContext, AlertProvider}