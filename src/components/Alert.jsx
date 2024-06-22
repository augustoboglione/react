import {useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext.jsx'
import {AlertContext} from '../context/AlertContext.jsx'
import Button from './Button.jsx'

const Alert = () => {
    const {theme} = useContext(ThemeContext)

    const {unmount, title, text, icon, confirm, cancel, callback, clear} = useContext(AlertContext)

    const handleConfirm = () => {
        callback?.()
        clear()
    }

    const handleCancel = () => {
        if (!cancel) handleConfirm()
        else clear()
    }

    return(
        <div className={`backdrop ${unmount ? 'unmount' : ''} ${theme}`} onClick={handleCancel}>
            <div className='alert square shadowed' onClick={e => e.stopPropagation()}>
                <div className='icon'>
                    <img src={`/assets/x.svg`} alt='Icon' />
                </div>
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