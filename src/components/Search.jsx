import Slide from './Slide.jsx'
import Input from './Input.jsx'

const Search = ({handleSearch}) => (
    <Slide className='search'>
        <Input type='search' placeholder='Search' onInput={handleSearch}/>
    </Slide>
)

export default Search