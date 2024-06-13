import {Link} from 'react-router-dom'

const Button = ({to, type, className, onClick, children}) => {
    if (to) return (
        <Link to={to}>
            <button className={`shadowed ${className ?? 'text-button'}`} type={type ?? 'button'}>{children}</button>
        </Link>
    )

    return (
        <button className={`shadowed ${className ?? 'text-button'}`} type={type ?? 'button'} onClick={onClick}>{children}</button>
    )
}

export default Button