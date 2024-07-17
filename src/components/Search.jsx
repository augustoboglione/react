import Slide from './Slide.jsx'
import Input from './Input.jsx'
import SearchSvg from '../svg/SearchSvg.jsx'

const Search = ({handleSearch}) => (
    <Slide className='search'>
        <SearchSvg/>
        <Input type='search' placeholder='Search' onInput={handleSearch}/>
    </Slide>
)

export default Search