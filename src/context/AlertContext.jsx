import {useState, createContext} from 'react'

const AlertContext = createContext()

const AlertProvider = ({children}) => {
    const [alert, setAlert] = useState(false)
    const [unmount, setUnmount] = useState(false)

    const [title, setTitle] = useState(null)
    const [text, setText] = useState(null)
    const [icon, setIcon] = useState(null)
    const [confirm, setConfirm] = useState(null)
    const [cancel, setCancel] = useState(null)
    const [callback, setCallback] = useState(null)

    const fire = (title, text, icon, callback = null, cancel = null, confirm = 'Accept') => {
        setAlert(true)
        setTitle(title)
        setText(text)
        setIcon(icon)
        setConfirm(confirm)
        setCancel(cancel)
        setCallback(() => callback)
    }

    const clear = () => {
        setUnmount(true)

        setTimeout(() => {
            setAlert(false)
            setUnmount(false)
        }, 300)
    }

    return (
        <AlertContext.Provider value={{alert, unmount, title, text, icon, callback, cancel, confirm, fire, clear}}>
            {children}
        </AlertContext.Provider>
    )
}

export {AlertContext, AlertProvider}