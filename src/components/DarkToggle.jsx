import {useContext} from 'react'
import {DarkContext} from '../context/DarkContext'
import Button from './Button'

const DarkToggle = () => {
    const {dark, toggle} = useContext(DarkContext)

    return <Button className='dark-toggle text-button' onClick={toggle}>
        {dark == 'dark' ? 'Light' : 'Dark'}
    </Button>
}

export default DarkToggle