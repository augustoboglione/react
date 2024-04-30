import {Link, NavLink} from 'react-router-dom'
import CartWidget from './CartWidget.jsx'
import logo from '../assets/logo.png'

const NavBar = (props) => {
    return (
        <nav>
            <Link  className="logo" to='/'>
                <img src={logo} alt=""/>
            </Link>
            <ul>
                <li><NavLink to="/category/mac">Mac</NavLink></li>
                <li><NavLink to="/category/ipad">iPad</NavLink></li>
                <li><NavLink to="/category/iphone">iPhone</NavLink></li>
                <li><NavLink to="/category/watch">Watch</NavLink></li>
                <li><NavLink to="/category/vision">Vision</NavLink></li>
                <li><NavLink to="/category/airpods">Airpods</NavLink></li>
                <li><NavLink to="/category/tvhome">TV & Home</NavLink></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar