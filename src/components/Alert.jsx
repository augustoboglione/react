import {useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext.jsx'
import {AlertContext} from '../context/AlertContext.jsx'
import Button from './Button.jsx'

const Alert = () => {
    const {theme} = useContext(ThemeContext)
    const {willUnmount, title, text, icon, callback, cancel, confirm, clear} = useContext(AlertContext)

    const handleConfirm = () => {
        if (callback) callback()
        clear()
    }

    const handleCancel = () => {
        if (!cancel) handleConfirm()
        else clear()
    }

    return(
        <div className={`backdrop ${willUnmount ? 'unmount' : ''} ${theme}`} onClick={handleCancel}>
            <div className='alert square shadowed' onClick={e => e.stopPropagation()}>
                <h2>{title}</h2>
                <p>{text}</p>
                <div className='buttons'>
                    <Button onClick={handleConfirm}>{confirm}</Button>
                    {cancel && <Button onClick={handleCancel}>{cancel}</Button>}
                </div>
            </div>
        </div>
    )
}

export default Alert