import {useState, useEffect, useRef, useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext.jsx'
import {NavLink} from 'react-router-dom'
import Menu from './Menu.jsx'
import CartWidget from './CartWidget.jsx'
import AppleSvg from '../svg/AppleSvg.jsx'
import ToggleSvg from '../svg/ToggleSvg.jsx'
import HamburgerSvg from '../svg/HamburgerSvg.jsx'

const NavBar = ({start, welcome}) => {
    const [hidden, setHidden] = useState(null)
    const [mount, setMount] = useState(false)

    const ref = useRef()
    ref.current = hidden

    const {theme} = useContext(ThemeContext)

    const handleResize = () => {
        if (window.innerWidth > 1200) setHidden(null)
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
        setMount(true)
        window.addEventListener('resize', handleResize)
        window.addEventListener('click', handleClick)
    }, [])

    return (
        <>
            <nav className={theme}>
                {mount &&
                    <>
                        <NavLink className={`logo ${welcome ? 'plain' : ''}`} to='/' onClick={() => {hide(); start()}}>
                            <AppleSvg/>
                        </NavLink>
                        {hidden ?? <Menu onClick={start}/>}
                        <NavLink className='cart-widget' to='/cart' onClick={() => {hide(); start()}}>
                            <CartWidget/>
                        </NavLink>
                        {hidden == null ||
                            <ToggleSvg className='menu' gradient hidden={hidden} onClick={toggle}>
                                <HamburgerSvg/>
                            </ToggleSvg>
                        }
                    </>
                }
            </nav>
            {hidden == null ||
                <nav className={`dropdown ${theme} ${hidden ? 'hidden' : ''}`}>
                    <Menu onClick={() => {hide(); start()}}/>
                </nav>
            }
        </>
    )
}

export default NavBar