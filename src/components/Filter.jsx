import Slide from './Slide.jsx'
import Input from './Input.jsx'

const Filter = ({handleSort, handleInStock}) => (
    <Slide className='filter'>
        <div>
            <h2>Sort by</h2>
            <form onInput={handleSort}>
                <Input type='radio' name='sort' id='name' value='name' label='Name' defaultChecked={true}/>
                <Input type='radio' name='sort' id='increasing' value='increasing' label='Price: Low to High'/>
                <Input type='radio' name='sort' id='decreasing' value='decreasing' label='Price: High to Low'/>
            </form>
            <h2>Filter by</h2>
            <form>
                <Input type='checkbox' label='In stock' onInput={handleInStock}/>
                <Input type='range' label='Price'/>
            </form>
        </div>
    </Slide>
)

export default Filter