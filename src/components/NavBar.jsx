import {useContext} from 'react'
import {DarkContext} from '../context/DarkContext.jsx'
import {Link, NavLink} from 'react-router-dom'
import CartWidget from './CartWidget.jsx'
import logo from '../assets/apple.svg'

const NavBar = ({onClick}) => {
    const {dark} = useContext(DarkContext)

    return (
        <nav className={dark} onClick={onClick}>
            <Link className='logo' to='/'>
                <img src={logo} alt='Apple'/>
            </Link>
            <ul>
                <li><NavLink to='/category/mac'>Mac</NavLink></li>
                <li><NavLink to='/category/ipad'>iPad</NavLink></li>
                <li><NavLink to='/category/iphone'>iPhone</NavLink></li>
                <li><NavLink to='/category/watch'>Watch</NavLink></li>
                <li><NavLink to='/category/vision'>Vision</NavLink></li>
                <li><NavLink to='/category/airpods'>Airpods</NavLink></li>
                <li><NavLink to='/category/tvhome'>TV & Home</NavLink></li>
            </ul>
            <Link to='/cart' className='cart-widget'>
                <CartWidget/>
            </Link>
        </nav>
    )
}

export default NavBar