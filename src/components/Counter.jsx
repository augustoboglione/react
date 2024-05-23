import Button from './Button.jsx'
import minus from '../assets/minus.svg'
import plus from '../assets/plus.svg'

const Counter = ({count, decrease, increase}) => (
    <div className='counter'>
        <Button onClick={decrease}><img src={minus} alt='Minus'/></Button>
        <p>{count}</p>
        <Button onClick={increase}><img src={plus} alt='Plus'/></Button>
    </div>
)

export default Counter