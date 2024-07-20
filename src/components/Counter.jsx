import Button from './Button.jsx'
import MinusSvg from '../svg/MinusSvg.jsx'
import PlusSvg from '../svg/PlusSvg.jsx'
import BinSvg from '../svg/BinSvg.jsx'

const Counter = ({count, decrease, increase, remove = null}) => (
    <div className='counter'>
        <Button imgButton onClick={decrease}>
            <MinusSvg gradient={count > 1} red={count == 1}/>
        </Button>
        <p className='count'>{count}</p>
        <Button imgButton onClick={increase}>
            <PlusSvg/>
        </Button>
        {remove &&
            <Button imgButton onClick={remove}>
                <BinSvg/>
            </Button>
        }
    </div>
)

export default Counter