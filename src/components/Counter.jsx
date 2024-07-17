import Button from './Button.jsx'
import bin from '/assets/bin.svg'
import MinusSvg from '../svg/MinusSvg.jsx'
import PlusSvg from '../svg/PlusSvg.jsx'

const Counter = ({count, decrease, increase, remove = null}) => (
    <div className='counter'>
        <Button imgButton className={`${remove && count == 1 ? 'red' : ''}`} onClick={decrease}>
            <MinusSvg gradient={count > 1} red={count == 1}/>
        </Button>
        <p className='count'>{count}</p>
        <Button imgButton onClick={increase}>
            <PlusSvg/>
        </Button>
        {remove &&
            <Button imgButton className='red' onClick={remove}>
                <img src={bin} alt='Remove'/>
            </Button>
        }
    </div>
)

export default Counter