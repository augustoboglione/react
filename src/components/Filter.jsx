import Slide from './Slide.jsx'
import Input from './Input.jsx'
import Range from './Range.jsx'
import handlePrice from '../others/price.js'

const Filter = ({max, bounds, handleInStock, handleBounds, handleSort}) => (
    <Slide className='filter'>
        <div>
            <h2>Sort by</h2>
            <form onInput={handleSort}>
                <Input type='radio' name='sort' id='name' value='name' label='Name' defaultChecked/>
                <Input type='radio' name='sort' id='increasing' value='increasing' label='Price: Low to High'/>
                <Input type='radio' name='sort' id='decreasing' value='decreasing' label='Price: High to Low'/>
            </form>
            <h2>Filter by</h2>
            <form>
                <Input type='checkbox' label='In stock' onInput={handleInStock}/>
                <Range label={`Price: $${handlePrice(bounds[0])} to $${handlePrice(bounds[1])}`}
                    max={max} onInput={handleBounds}
                />
            </form>
        </div>
    </Slide>
)

export default Filter