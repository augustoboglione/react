import {useState, useEffect} from 'react'
import Input from './Input'
import filter from '../assets/apple.svg'
import x from '../assets/apple.svg'

const Filter = ({sort, handleSort}) => {
    const [hidden, setHidden] = useState(true)

    const toggle = () => setHidden(!hidden)

    useEffect(() => {
        if (!hidden) document.getElementById(sort).checked = true
    }, [hidden])

    return (
        <div className={`filter shadowed ${hidden ? '' : 'open'}`}>
            <img src={hidden ? filter : x} alt='Filter' onClick={toggle}/>
            {!hidden
                && <>
                    <h2>Sort by</h2>
                    <form onInput={handleSort}>
                        <Input type='radio' name='sort' id='alphabetical' label='A to Z' defaultChecked={true}/>
                        <Input type='radio' name='sort' id='increasing' label='Increasing price'/>
                        <Input type='radio' name='sort' id='decreasing' label='Decreasing price'/>
                    </form>
                    <h2>Filter by</h2>
                    <form>
                        <Input type='range' label='Price'/>
                    </form>
                </>
            }
        </div>
    )
}

export default Filter