import {useState, useEffect, useRef, useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext.jsx'
import {Link, NavLink} from 'react-router-dom'
import Menu from './Menu.jsx'
import CartWidget from './CartWidget.jsx'
import logo from '../assets/apple.svg'
import menu from '../assets/menu.svg'
import x from '../assets/x.svg'

const NavBar = ({onClick}) => {
    const [hidden, setHidden] = useState(true)
    const ref = useRef()
    ref.current = hidden

    const {theme} = useContext(ThemeContext)

    const handleResize = () => {
        if (document.documentElement.clientWidth > 1200) setHidden(null)
        else setHidden(true)
    }

    const handleClick = e => {
        if (!e.target.closest('nav')) hide()
    }

    const toggle = () => setHidden(!hidden)

    const hide = () => {
        if (ref.current == false) setHidden(true)
    }

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        window.addEventListener('click', handleClick)
    }, [])

    return (
        <>
            <nav className={theme} onClick={onClick}>
                <Link className='logo' to='/' onClick={hide}>
                    <img src={logo} alt='Apple'/>
                </Link>
                {hidden ?? <Menu/>}
                <Link className='cart-widget' to='/cart' onClick={hide}>
                    <CartWidget/>
                </Link>
                {hidden == null || <img 
                    className={(hidden ? '' : 'rotate ') + 'menu'}
                    src={hidden ? menu : x} onClick={toggle} alt='Menu'
                />}
            </nav>
            {hidden == false
                && <nav className={`dropdown ${theme}`}>
                    <Menu onClick={hide}/>
                </nav>
            }
        </>
    )
}

export default NavBar