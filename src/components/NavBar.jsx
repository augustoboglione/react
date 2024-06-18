import {useState, useEffect, useRef, useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext.jsx'
import {Link} from 'react-router-dom'
import Menu from './Menu.jsx'
import CartWidget from './CartWidget.jsx'
import logo from '/assets/apple.svg'
import menu from '/assets/menu.svg'
import x from '/assets/x.svg'

const NavBar = ({start}) => {
    const [hidden, setHidden] = useState(null)
    const [loaded, setLoaded] = useState(false)

    const ref = useRef()
    ref.current = hidden

    const {theme} = useContext(ThemeContext)

    const handleResize = () => {
        if (document.documentElement.clientWidth > 1200) setHidden(null)
        else setHidden(true)
        setLoaded(true)
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
        window.onresize = handleResize
        window.onclick = handleClick
    }, [])

    return (
        <>
            <nav className={theme}>
                {loaded
                    && <>
                        <Link className='logo' to='/' onClick={() => {hide(); start()}}>
                            <img src={logo} alt='Apple'/>
                        </Link>
                        {hidden ?? <Menu onClick={start}/>}
                        <Link className='cart-widget' to='/cart' onClick={() => {hide(); start()}}>
                            <CartWidget/>
                        </Link>
                        {hidden == null || <img 
                            className={(hidden ? '' : 'counterclockwise ') + 'menu'}
                            src={hidden ? menu : x} onClick={toggle} alt='Menu'
                        />}
                    </>
                }
            </nav>
            {hidden == null
                || <nav className={`dropdown ${theme} ${hidden ? 'hidden' : ''}`}>
                    <Menu onClick={() => {hide(); start()}}/>
                </nav>
            }
        </>
    )
}

export default NavBar