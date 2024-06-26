import Button from './Button.jsx'
import minus from '/assets/minus.svg'
import minusRed from '/assets/minus-red.svg'
import plus from '/assets/plus.svg'
import bin from '/assets/bin.svg'

const Counter = ({count, decrease, increase, remove = null}) => (
    <div className='counter'>
        <Button className={`img-button ${remove && count == 1 ? 'red' : ''}`} onClick={decrease}>
            <img src={remove && count == 1 ? minusRed : minus} alt='Decrease'/>
        </Button>
        <p className='count'>{count}</p>
        <Button className='img-button' onClick={increase}>
            <img src={plus} alt='Increase'/>
        </Button>
        {remove && <Button className='img-button red' onClick={remove}>
            <img src={bin} alt='Remove'/>
        </Button>}
    </div>
)

export default Counter