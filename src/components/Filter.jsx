import {useState} from 'react'
import Input from './Input'
import filter from '../assets/apple.svg'
import x from '../assets/apple.svg'

const Filter = () => {
    const [hidden, setHidden] = useState(true)

    const toggle = () => setHidden(!hidden)

    return (
        <div className={`filter shadowed ${hidden ? '' : 'open'}`}>
            <img src={hidden ? filter : x} alt='Filter' onClick={toggle}/>
            {!hidden
                && <>
                    <h2>Sort by</h2>
                    <form onSubmit={e => e.preventDefault()}>
                        <Input type='checkbox' title='az' label='A to Z'/>
                        <Input type='checkbox' title='increasing' label='Increasing price'/>
                        <Input type='checkbox' title='increasing' label='Decreasing price'/>
                    </form>
                    <h2>Filter by</h2>
                    <form onSubmit={e => e.preventDefault()}>
                        <Input type='checkbox' title='az' label='A to Z'/>
                        <Input type='checkbox' title='increasing' label='Increasing price'/>
                        <Input type='checkbox' title='increasing' label='Decreasing price'/>
                    </form>
                </>
            }
        </div>
    )
}

export default Filter