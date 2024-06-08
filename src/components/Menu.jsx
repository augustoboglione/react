import {NavLink} from 'react-router-dom'

const Menu = ({onClick}) => {
    return (
        <ul>
            <li onClick={onClick}><NavLink to='/category/mac'>Mac</NavLink></li>
            <li onClick={onClick}><NavLink to='/category/ipad'>iPad</NavLink></li>
            <li onClick={onClick}><NavLink to='/category/iphone'>iPhone</NavLink></li>
            <li onClick={onClick}><NavLink to='/category/watch'>Watch</NavLink></li>
            <li onClick={onClick}><NavLink to='/category/vision'>Vision</NavLink></li>
            <li onClick={onClick}><NavLink to='/category/airpods'>Airpods</NavLink></li>
            <li onClick={onClick}><NavLink to='/category/tvhome'>TV & Home</NavLink></li>
        </ul>
    )
}

export default Menu