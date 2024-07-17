import {NavLink} from 'react-router-dom'

const MenuEntry = ({children, to, onClick}) => (
    <li onClick={onClick}>
        <NavLink to={to}>
            <span className='gradient-text'>
                {children}
            </span>
        </NavLink>
    </li>
)

export default MenuEntry